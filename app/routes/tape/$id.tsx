import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import * as dateFns from "date-fns";

import * as briefly from "../../briefly";
import { GetTapeByIdQuery } from "../../briefly/graphql/generated";

type Tape = NonNullable<GetTapeByIdQuery["tape_by_pk"]>;

type LoaderData = {
  tape: Tape;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await briefly.getSession(request);
  const sdk = briefly.getClient(session);

  const { id } = params;
  invariant(typeof id === "string", "params.id is required");

  const query = await sdk.GetTapeById({ id });
  const tape = query.tape_by_pk;

  if (!tape) {
    throw new Error("Could not find that tape!");
  }

  return json<LoaderData>({ tape });
};

const TapeRoute = () => {
  const { tape } = useLoaderData<LoaderData>();

  const tapeDate = dateFns.format(dateFns.parseISO(tape.created_at), "EEEE p");

  return (
    <main>
      <h2>{tape.profile?.username}</h2>
      <h3>{tapeDate}</h3>
      <audio src={tape.path} autoPlay controls />
      {tape.comments.map((comment) => {
        const date = dateFns.format(dateFns.parseISO(comment.created_at), "p");
        return (
          <p>
            <strong>{comment.profile?.username}</strong> {comment.body}{" "}
            <em>{date}</em>
          </p>
        );
      })}
      {tape.comments.length === 0 && (
        <p>
          <em>No comments yet…</em>
        </p>
      )}
      {tape.tape_snap_files.map((file) => (
        <img src={file.path} />
      ))}
    </main>
  );
};

export default TapeRoute;
