import { LoaderFunction, redirect, json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import * as dateFns from "date-fns";
import styled from "styled-components";

import * as briefly from "../briefly";
import {
  ProfileFragment as Profile,
  TapeFragment as Tape,
} from "../briefly/graphql/generated";
import { formatDuration } from "../utils/duration";

/* GraphQL */ `
fragment Tape on tape {
  id
  duration
  created_at
  path
  is_public
  tape_snap_files(limit: 1) {
    id
  }
  comments_aggregate {
    aggregate {
      count
    }
  }
}

fragment Profile on profile {
  id
  username
  avatar_id
  tapes(
    order_by: { created_at: desc }
    where: { expires_at: { _gt: $now } }
    limit: 10
  ) {
    ...Tape
  }
}

query GetTapes($now: timestamptz, $user_id: uuid!) {
  me: profile_by_pk(id: $user_id) {
    ...Profile
  }
  friend(
    where: { user_id: { _eq: $user_id } }
    order_by: {
      friend_profile: {
        tapes_aggregate: { max: { created_at: desc_nulls_last } }
      }
    }
  ) {
    friend_profile {
      ...Profile
    }
  }
}
`;

type LoaderData = {
  me: Profile;
  friends: Profile[];
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await briefly.getSession(request);
  if (!session.accessToken) {
    return redirect("/login");
  }

  const sdk = briefly.getClient(session);

  const result = await sdk.GetTapes({
    now: dateFns.formatISO(dateFns.subDays(new Date(), 5)),
    user_id: session.userUID,
  });

  const me = result.me!;

  const friends = result.friend
    .map((friend) => {
      const profile = friend.friend_profile;
      if (profile?.avatar_id) {
        profile.avatar_id = `https://${briefly.config.NHOST_ID}.storage.eu-central-1.nhost.run/v1/files/${profile.avatar_id}?w=64&h=64`;
      }
      return profile;
    })
    .filter(Boolean) as Profile[];

  return json<LoaderData>(
    { me, friends },
    {
      headers: {
        "Set-Cookie": await briefly.commitSession(session),
      },
    }
  );
};

const Main = styled.main`
  padding: 1em;
`;

const AvatarImg = styled.img`
  border-radius: 50%;
  transform: rotate(90deg);
  height: 32px;
  width: 32px;
  vertical-align: middle;
  margin-right: 10px;
  background-color: #e15987;
  border: 3px solid var(--light);
`;

const FriendContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`;

type FriendItemProps = {
  friend: Profile;
};

const FriendItem = (props: FriendItemProps) => {
  const { friend } = props;

  const avatarSrc = friend.avatar_id ?? "";

  return (
    <FriendContainer>
      <div>
        <AvatarImg src={avatarSrc} />
        {friend.tapes.length > 0 ? (
          <strong>{friend.username}</strong>
        ) : (
          <em>{friend.username}</em>
        )}
      </div>
      {friend.tapes.map((tape) => (
        <TapeItem key={tape.id} tape={tape} />
      ))}
    </FriendContainer>
  );
};

const TapeContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin-left: 0.5em;
  line-height: 2em;
`;

const TapeLink = styled(Link)`
  color: var(--light);
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

type TapeItemProps = {
  tape: Tape;
};

const TapeItem = (props: TapeItemProps) => {
  const { tape } = props;

  const createdAt = dateFns.parseISO(tape.created_at);
  const duration = formatDuration(tape.duration);

  const ICON_PUBLIC = "📼";
  const ICON_PRIVATE = "✉️";
  const ICON_IMAGE = "🖼️";
  const ICON_COMMENT = "💬";

  const hasImage = tape.tape_snap_files.length > 0;
  const isPrivate = tape.is_public === false;
  const icon = isPrivate ? ICON_PRIVATE : hasImage ? ICON_IMAGE : ICON_PUBLIC;

  return (
    <TapeContainer>
      <TapeLink to={`/tape/${tape.id}`}>
        {icon}
        {dateFns.format(createdAt, "EEEE p")} [{duration}]{" "}
      </TapeLink>
      {(tape.comments_aggregate.aggregate?.count ?? 0) > 0 ? ICON_COMMENT : ""}
    </TapeContainer>
  );
};

const FriendsTapesRoute = () => {
  const { me, friends } = useLoaderData<LoaderData>();

  return (
    <Main>
      <h2>Briefly</h2>
      <FriendItem key="me" friend={me} />
      {friends.map((friend) => (
        <FriendItem key={friend.id} friend={friend} />
      ))}
    </Main>
  );
};

export default FriendsTapesRoute;
