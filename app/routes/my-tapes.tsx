import { LoaderFunction, redirect, json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import * as dateFns from "date-fns";

import * as briefly from "../briefly";
import { GetMyTapesQuery } from "../briefly/graphql/generated";
import { formatDuration } from "../utils/duration";

type Tape = NonNullable<GetMyTapesQuery["profile_by_pk"]>["tapes"][number];

type LoaderData = {
  tapes: Tape[];
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await briefly.getSession(request);
  if (!session.accessToken) {
    return redirect("/login");
  }

  const sdk = briefly.getClient(session);

  const result = await sdk.GetMyTapes({
    now: dateFns.formatISO(new Date()),
    user_id: session.userUID,
  });

  const tapes = result.profile_by_pk?.tapes ?? [];

  return json<LoaderData>(
    { tapes },
    {
      headers: {
        "Set-Cookie": await briefly.commitSession(session),
      },
    }
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

const MyTapesRoute = () => {
  const { tapes } = useLoaderData<LoaderData>();

  console.log(tapes);

  return (
    <main>
      <h1>My Tapes</h1>
      <ul>
        {tapes.map((tape) => (
          <TapeItem tape={tape} />
        ))}
      </ul>
    </main>
  );
};

export default MyTapesRoute;
