import { LoaderFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import * as briefly from "../briefly";

type LoaderData = {
  isLoggedIn: boolean;
  email: string | undefined;
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await briefly.getSession(request);
  const isLoggedIn = Boolean(session.accessToken);
  return json<LoaderData>(
    { isLoggedIn, email: session.email },
    {
      headers: {
        "Set-Cookie": await briefly.commitSession(session),
      },
    }
  );
};

const IndexRoute = () => {
  const { isLoggedIn, email } = useLoaderData<LoaderData>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Briefly</h1>
      {isLoggedIn ? (
        <>
          <ul>
            <li>
              <p>
                You are logged in as <code>{email}</code>
              </p>
            </li>
            <li>
              <Link to="./upload">Create Tape</Link>
            </li>
            <li>
              <Link to="./friends-tapes">Friends Tapes</Link>
            </li>
            <li>
              <Link to="./my-tapes">My Tapes</Link>
            </li>
            <li>
              <Link to="./account">Change Username</Link>
            </li>
            <li>
              <Link to="./logout">Logout</Link>
            </li>
          </ul>
          <hr />
          <ul>
            <li>
              <Link reloadDocument to="./my-tapes.json">
                <code>./my-tapes.json</code>
              </Link>
            </li>
            <li>
              <Link reloadDocument to="./friends-tapes.json">
                <code>./friends-tapes.json</code>
              </Link>
            </li>
            <li>
              <Link reloadDocument to="./friends-tapes.rss">
                <code>./friends-tapes.rss</code>
              </Link>
            </li>
          </ul>
        </>
      ) : (
        <p>
          You need to <Link to="/login">login</Link>.
        </p>
      )}
    </div>
  );
};

export default IndexRoute;
