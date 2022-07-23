import got from 'got'
import Fastify from 'fastify'
import { parseISO, format } from 'date-fns'
import { GraphQLClient } from 'graphql-request';

import { getSdk } from './graphql/generated'

import { formatContainer, formatItem } from './podcast'
import config from './config'

let GLOBAL_SESSION: Session | undefined = undefined

const getSize = async (url: string) => {
  const response = await got.head(url)
  return response.headers['content-length']
}

const login = async (): Promise<Session> => {
  if (GLOBAL_SESSION) {
    return GLOBAL_SESSION
  }

  const result = await got.post(`https://${config.NHOST_ID}.auth.eu-central-1.nhost.run/v1/signin/email-password`, {
    json: {
      email: config.USER_EMAIL,
      password: config.USER_PASSWORD,
    }
  }).json() as { session: Session }

  GLOBAL_SESSION = result.session

  return GLOBAL_SESSION
}

const getClient = (session: Session) => {
  const client = new GraphQLClient(`https://${config.NHOST_ID}.graphql.eu-central-1.nhost.run/v1`, {
    headers: {
      authorization: `Bearer ${session.accessToken}`
    }
  })
  const sdk = getSdk(client)
  return sdk
}

type Session = {
  accessToken: string
  user: {
    id: string
  }
}


const fastify = Fastify({
  logger: true
})

fastify.get('/friends.rss', async (_request, reply) => {
  const session = await login()
  const sdk = getClient(session)
  const tapes = await sdk.GetFriendsTapes({
    now: new Date(),
    user_id: session.user.id,
  })

  const items = await Promise.all(tapes.friend.flatMap((friend) => {
    return friend?.friend_profile?.tapes.map((tape) => {
      return {
        friend: friend.friend_profile,
        tape,
      }
    }) ?? []
  }).map(async (item) => {
    const { friend, tape } = item

    const size = await getSize(tape.path)
    const createdAt = parseISO(tape.created_at)

    return formatItem({
      title: `${friend?.username} • ${format(createdAt, 'p Lo LLL')}`,
      description: `Tape from ${friend?.username}. Duration ${tape.duration}`,
      author: friend?.username ?? '',
      url: `https://a03b-86-32-41-79.ngrok.io/tape/${tape.id}`,
      size: size ?? '',
      date: tape.created_at,
      image: `https://${config.NHOST_ID}.storage.eu-central-1.nhost.run/v1/files/${friend?.avatar_id}?w=256&h=256`,
    })
  }))

  reply.type('application/xml').send(formatContainer(items))
})

fastify.get('/tapes.json', async (_request, reply) => {
  const session = await login()
  const sdk = getClient(session)
  const tapes = await sdk.GetFriendsTapes({
    now: new Date(),
    user_id: session.user.id
  })
  reply.send(tapes)
})

fastify.get<{
  Params: {
    id: string
  }
}>('/tape/:id', async (request, reply) => {
  const { id } = request.params
  const session = await login()
  const sdk = getClient(session)
  const tape = await sdk.GetTapeById({ id })
  const path = tape?.tape_by_pk?.path
  if (!path) {
    throw new Error('No tape path found')
  }
  await reply.type('audio/mpeg').send(got.stream(path))
})

// Run the server!
fastify.listen({ host: config.HOST, port: config.PORT }, (err) => {
  if (err) throw err
})
