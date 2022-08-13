import { Form } from "@remix-run/react";
import { json, redirect, ActionFunction } from "@remix-run/node";
import { makeDomainFunction, inputFromForm } from "remix-domains";
import * as z from "zod";

import * as briefly from "../briefly";

const login = makeDomainFunction(
  z.object({
    email: z.string(),
    password: z.string(),
  })
)(async (input) => {
  const { email, password } = input;
  return briefly.login({ email, password });
});

export const action: ActionFunction = async ({ request }) => {
  const maybeSession = await login(await inputFromForm(request));
  if (!maybeSession.success) {
    console.error(maybeSession);
    return json({ error: maybeSession.errors });
  }
  const session = maybeSession.data;

  return redirect("/", {
    headers: {
      "Set-Cookie": await briefly.commitSession(session),
    },
  });
};

export const LoginRoute = () => {
  return (
    <Form method="post">
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <input type="submit" value="Login" />
    </Form>
  );
};

export default LoginRoute;
