import {
  ActionFunction,
  LoaderFunction,
  json,
  redirect,
} from "@remix-run/node";
import { Link, Form, useLoaderData } from "@remix-run/react";
import { makeDomainFunction, inputFromFormData } from "remix-domains";
import * as z from "zod";

import * as briefly from "../briefly";
import { GetProfileQuery } from "../briefly/graphql/generated";

type Profile = NonNullable<GetProfileQuery["profile_by_pk"]>;

type LoaderData = {
  profile: Profile;
};

const changeUsername = makeDomainFunction(
  z.object({
    username: z.string(),
  }),
  z.object({
    session: briefly.userSessionSchema,
  })
)(async (input, environment) => {
  const { username } = input;
  const { session } = environment;
  const sdk = briefly.getClient(session);
  sdk.UpdateUsername({ userUID: session.userUID, username });
});

export const action: ActionFunction = async ({ request }) => {
  const session = await briefly.getSession(request);
  if (!session.accessToken) {
    return redirect("/login");
  }

  const formData = await request.formData();
  const result = await changeUsername(inputFromFormData(formData), { session });

  console.log({ result });

  return null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await briefly.getSession(request);
  if (!session.accessToken) {
    return redirect("/login");
  }

  const sdk = briefly.getClient(session);

  const query = await sdk.GetProfile({ userUID: session.userUID });

  const profile = query.profile_by_pk;
  if (!profile) {
    throw new Error("Could not load profile!");
  }

  return json<LoaderData>(
    { profile },
    {
      headers: {
        "Set-Cookie": await briefly.commitSession(session),
      },
    }
  );
};

const AccountRoute = () => {
  const { profile } = useLoaderData<LoaderData>();

  return (
    <main>
      <h1>
        <Link to="/">Briefly</Link>
      </h1>
      <ul>
        <li>Username: {profile.username}</li>
      </ul>
      <Form method="post">
        <input
          type="text"
          name="username"
          defaultValue={profile.username ?? ""}
        />
        <button name="_action" value="changeUsername">
          Change Username
        </button>
      </Form>
    </main>
  );
};

export default AccountRoute;
