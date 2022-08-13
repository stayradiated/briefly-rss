import { LoaderFunction, redirect, json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import * as dateFns from "date-fns";

import * as briefly from "../briefly";
import { GetFriendsTapesQuery } from "../briefly/graphql/generated";
import { formatDuration } from "../utils/duration";

type Friend = NonNullable<
  GetFriendsTapesQuery["friend"][number]["friend_profile"]
>;
type Tape = Friend["tapes"][number];

type LoaderData = {
  friends: Friend[];
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await briefly.getSession(request);
  if (!session.accessToken) {
    return redirect("/login");
  }

  const sdk = briefly.getClient(session);

  const result = await sdk.GetFriendsTapes({
    now: dateFns.formatISO(new Date()),
    user_id: session.userUID,
  });

  const friends = result.friend
    .map((friend) => friend.friend_profile)
    .filter(Boolean) as Friend[];

  return json<LoaderData>(
    { friends },
    {
      headers: {
        "Set-Cookie": await briefly.commitSession(session),
      },
    }
  );
};

type FriendItemProps = {
  friend: Friend;
};

const FriendItem = (props: FriendItemProps) => {
  const { friend } = props;

  return (
    <li>
      {friend.tapes.length > 0 ? (
        <strong>{friend.username}</strong>
      ) : (
        <em>{friend.username}</em>
      )}
      <ul>
        {friend.tapes.map((tape) => (
          <TapeItem tape={tape} />
        ))}
      </ul>
    </li>
  );
};

type TapeItemProps = {
  tape: Tape;
};

const TapeItem = (props: TapeItemProps) => {
  const { tape } = props;

  const createdAt = dateFns.parseISO(tape.created_at);
  const duration = formatDuration(tape.duration);

  const ICON_PUBLIC = "📢";
  const ICON_PRIVATE = "✉️";
  const ICON_IMAGE = "🖼️";
  const ICON_COMMENT = "💬";

  return (
    <li>
      <Link to={`/tape/${tape.id}`}>
        {tape.is_public ? ICON_PUBLIC : ICON_PRIVATE}{" "}
        {dateFns.format(createdAt, "EEEE p")} [{duration}]{" "}
        {tape.tape_snap_files.length > 0 ? ICON_IMAGE : ""}
        {(tape.comments_aggregate.aggregate?.count ?? 0) > 0
          ? ICON_COMMENT
          : ""}
      </Link>
    </li>
  );
};

const FriendsTapesRoute = () => {
  const { friends } = useLoaderData<LoaderData>();

  return (
    <main>
      <h1>Friends Tapes</h1>
      <ul>
        {friends.map((friend) => (
          <FriendItem friend={friend} />
        ))}
      </ul>
    </main>
  );
};

export default FriendsTapesRoute;
