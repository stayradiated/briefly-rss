import { ActionFunction, redirect } from "@remix-run/node";

import * as briefly from "../briefly";

export const action: ActionFunction = async ({ request }) => {
  const session = await briefly.getSession(request);

  return redirect("/", {
    headers: {
      "Set-Cookie": await briefly.destroySession(session),
    },
  });
};

const LogoutRoute = () => {
  return (
    <form method="post">
      <p>Are you sure?</p>
      <input type="submit" value="Logout" />
    </form>
  );
};

export default LogoutRoute;
