import { LoaderFunction, json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'

import * as briefly from '../briefly'

type LoaderData = {
  isLoggedIn: boolean
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await briefly.getSession(request)
  const isLoggedIn = Boolean(session.accessToken)
  return json<LoaderData>({ isLoggedIn })
}

const IndexRoute = () => {
  const { isLoggedIn } = useLoaderData<LoaderData>()

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Debrief</h1>
      {isLoggedIn ? (
      <ul>
        <li>
        <Link to='./upload'>Upload</Link>
        </li>
        <li>
          <Link to='./friends-tapes.json'>Friends Tapes (JSON)</Link>
        </li>
        <li>
          <Link to='./my-tapes.json'>My Tapes (JSON)</Link>
        </li>
        <li>
          <Link to='./logout'>Logout</Link>
        </li>
      </ul>
      ): (
        <p>You need to <Link to='/login'>login</Link>.</p>
      )}
    </div>
  );
}

export default IndexRoute
