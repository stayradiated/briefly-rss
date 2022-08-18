import { Form } from "@remix-run/react";
import {
  json,
  redirect,
  ActionFunction,
  LoaderFunction,
} from "@remix-run/node";
import { makeDomainFunction, inputFromForm } from "remix-domains";
import * as z from "zod";
import styled from "styled-components";

import * as briefly from "../briefly";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

const login = makeDomainFunction(
  z.object({
    email: z.string(),
    password: z.string(),
  })
)(async (input) => {
  const { email, password } = input;
  return briefly.login({ email, password });
});

const Main = styled.main`
  padding: 1em;
`;

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

export const loader: LoaderFunction = async ({ request }) => {
  const session = await briefly.getSession(request);
  if (session.accessToken) {
    return redirect("/");
  }
  return null;
};

export const LoginRoute = () => {
  return (
    <Main>
      <Form method="post">
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" />
        <Button type="submit">Login</Button>
      </Form>
    </Main>
  );
};

export default LoginRoute;
