import { LoaderFunction } from '@remix-run/node'

export const loader: LoaderFunction = async ({ request, params }) => {
  const { id } = params
  const session = await login()
  const sdk = getClient(session)
  const tape = await sdk.GetTapeById({ id })
  const path = tape?.tape_by_pk?.path
  if (!path) {
    throw new Error('No tape path found')
  }
  await reply.type('audio/mpeg').send(got.stream(path))
}
