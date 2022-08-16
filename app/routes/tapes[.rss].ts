import { LoaderFunction, redirect } from "@remix-run/node";
import * as dateFns from "date-fns";

import * as briefly from "../briefly";
import { formatContainer, formatItem } from "../briefly/podcast";

const getSize = async (url: string) => {
  const response = await fetch(url, { method: "HEAD" });
  return response.headers.get("content-length");
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await briefly.getSession(request);
  if (!session.accessToken) {
    return redirect("/login");
  }

  const sdk = briefly.getClient(session);

  const tapes = await sdk.GetTapes({
    now: dateFns.formatISO(new Date()),
    user_id: session.userUID,
  });

  const items = await Promise.all(
    tapes.friend
      .flatMap((friend) => {
        return (
          friend?.friend_profile?.tapes.map((tape) => {
            return {
              friend: friend.friend_profile,
              tape,
            };
          }) ?? []
        );
      })
      .map(async (item) => {
        const { friend, tape } = item;

        const size = await getSize(tape.path);
        const createdAt = dateFns.parseISO(tape.created_at);

        return formatItem({
          title: `${friend?.username} • ${dateFns.format(
            createdAt,
            "p Lo LLL"
          )}`,
          description: `Tape from ${friend?.username}. Duration ${tape.duration}`,
          author: friend?.username ?? "",
          url: `/tape/${tape.id}`,
          size: size ?? "",
          date: tape.created_at,
          image: `https://${briefly.config.NHOST_ID}.storage.eu-central-1.nhost.run/v1/files/${friend?.avatar_id}?w=256&h=256`,
        });
      })
  );

  const body = formatContainer(items);

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
