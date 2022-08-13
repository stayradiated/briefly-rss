import { LoaderFunction, redirect } from '@remix-run/node'

import * as briefly from '../briefly'

export const loader: LoaderFunction = async ({ request }) => {
  const session = await briefly.getSession(request)
  if (!session.accessToken) {
    return redirect('/login')
  }

  const sdk = briefly.getClient(session)

  const tapes = await sdk.GetMyTapes({
    now: new Date(),
    user_id: session.userUID,
  })

  const body = JSON.stringify(tapes)

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
}
