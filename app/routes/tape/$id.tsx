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

  return json<LoaderData>(
    { tape },
    {
      headers: {
        "Set-Cookie": await briefly.commitSession(session),
      },
    }
  );
};

type Comment = {
  created_at: string;
  profile?: { username?: string | null } | null;
  body: string;
  child_comments?: Comment[];
};

type CommentListProps = {
  comments: Comment[];
};

const CommentList: React.FC<CommentListProps> = (props) => {
  const { comments } = props;
  if (comments.length === 0) {
    return (
      <p>
        <em>No comments yet…</em>
      </p>
    );
  }
  return (
    <>
      {comments.map((comment) => {
        const date = dateFns.format(dateFns.parseISO(comment.created_at), "p");
        return (
          <p key={comment.id}>
            <strong>{comment.profile?.username}</strong> {comment.body}{" "}
            <em>{date}</em>
            {comment.child_comments && comment.child_comments.length > 0 && (
              <ul>
                <CommentList comments={comment.child_comments} />
              </ul>
            )}
          </p>
        );
      })}
    </>
  );
};

const TapeRoute = () => {
  const { tape } = useLoaderData<LoaderData>();

  const tapeDate = dateFns.format(dateFns.parseISO(tape.created_at), "EEEE p");

  return (
    <main>
      <h2>{tape.profile?.username}</h2>
      <h3>{tapeDate}</h3>
      <audio src={tape.path} autoPlay controls />
      <CommentList comments={tape.comments} />
      {tape.tape_snap_files.map((file) => (
        <img src={file.path} />
      ))}
    </main>
  );
};

export default TapeRoute;
