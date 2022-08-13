import { LoaderFunction } from '@remix-run/node'

import * as briefly from '../briefly'

const getSize = async (url: string) => {
  const response = await fetch(url, { method: 'HEAD' })
  return response.headers.get('content-length')
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await briefly.getSession(request)
  const sdk = briefly.getClient(session)
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
      url: `/tape/${tape.id}`,
      size: size ?? '',
      date: tape.created_at,
      image: `https://${briefly.config.NHOST_ID}.storage.eu-central-1.nhost.run/v1/files/${friend?.avatar_id}?w=256&h=256`,
    })
  }))

  reply.type('application/xml').send(formatContainer(items))
}


