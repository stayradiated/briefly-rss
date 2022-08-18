import { useRef, useEffect, useState, useMemo } from "react";
import {
  ActionFunction,
  LoaderFunction,
  json,
  redirect,
} from "@remix-run/node";
import { useTransition, useLoaderData, Link, Form } from "@remix-run/react";
import invariant from "tiny-invariant";
import * as dateFns from "date-fns";
import styled from "styled-components";
import { last } from "rambda";
import { makeDomainFunction, inputFromFormData } from "remix-domains";
import * as z from "zod";

import * as briefly from "../../briefly";
import { GetTapeByIdQuery } from "../../briefly/graphql/generated";
import { useImagePreloader } from "../../components/useImagePreloader";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/TextArea";

type Tape = NonNullable<GetTapeByIdQuery["tape_by_pk"]>;

/* GraphQL */ `
mutation InsertComment(
  $body: String!,
  $ms: Int!,
  $parent_comment_id: uuid,
  $tape_id: uuid!,
  $seen_by_tape_owner_at: timestamptz
) {
  insert_comment_one(object: {
    body: $body,
    ms: $ms,
    parent_comment_id: $parent_comment_id,
    tape_id: $tape_id,
    seen_by_tape_owner_at: $seen_by_tape_owner_at
  }) {
    id
  }
}
`;

const insertComment = makeDomainFunction(
  z.object({
    body: z.string(),
    ms: z.preprocess((arg) => Number.parseFloat(String(arg)), z.number()),
  }),
  z.object({
    tapeID: z.string(),
    session: briefly.userSessionSchema,
  })
)((input, environment) => {
  const { body, ms } = input;
  const { tapeID, session } = environment;
  const sdk = briefly.getClient(session);
  return sdk.InsertComment(
    {
      body,
      ms,
      parent_comment_id: undefined,
      tape_id: tapeID,
      seen_by_tape_owner_at: undefined,
    },
    {
      authorization: `Bearer ${session.accessToken}`,
    }
  );
});

export const action: ActionFunction = async ({ request, params }) => {
  const session = await briefly.getSession(request);
  if (!session.accessToken) {
    return redirect("/login");
  }

  const { id: tapeID } = params;
  invariant(typeof tapeID === "string", "params.id is required");

  const formData = await request.formData();
  const action = formData.get("_action");

  switch (action) {
    case "insertComment": {
      const result = await insertComment(inputFromFormData(formData), {
        tapeID,
        session,
      });
      if (!result.success) {
        console.error(result);
        throw new Error("Could not insert comment.");
      }
      return null;
    }
    default: {
      throw new Error(`Unsupported action: ${action}`);
    }
  }
};

type LoaderData = {
  tape: Tape;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await briefly.getSession(request);
  if (!session.accessToken) {
    return redirect("/login");
  }

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

const CommentForm = styled(Form)`
  padding: 0 1em;
`;

const Title = styled.h1`
  a {
    color: var(--light);
  }
`;

const Metadata = styled.div<{ focus: boolean }>`
  position: absolute;
  bottom: 0;
  padding: 1em;
  opacity: 1;
  transition: opacity 0.3s ease;

  ${(props) => (props.focus ? "opacity: 0;" : "")}
`;

const Audio = styled.audio``;

const ImgContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
`;

const Img = styled.div<{ src: string }>`
  height: 100%;
  width: 100%;
  ${(props) => `background-image: url(${props.src});`}
  background-size: cover;
  background-position: center center;
`;

const NoImg = styled.div`
  height: 100%;
  width: 100%;
  background-color: #808080;
`;

const Comment = styled.p`
  padding: 1em;
`;

type Comment = {
  id: string;
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
      <Comment>
        <em>No comments yet…</em>
      </Comment>
    );
  }
  return (
    <>
      {comments.map((comment) => {
        const date = dateFns.format(dateFns.parseISO(comment.created_at), "p");
        return (
          <Comment key={comment.id}>
            <strong>{comment.profile?.username}</strong> {comment.body}{" "}
            <em>{date}</em>
            {comment.child_comments && comment.child_comments.length > 0 && (
              <ul>
                <CommentList comments={comment.child_comments} />
              </ul>
            )}
          </Comment>
        );
      })}
    </>
  );
};

const TapeRoute = () => {
  const { tape } = useLoaderData<LoaderData>();
  const transition = useTransition();

  const [currentTime, setCurrentTime] = useState(0);
  const [focus, setFocus] = useState(false);

  const tapeDate = dateFns.format(dateFns.parseISO(tape.created_at), "EEEE p");

  const isInsertingComment =
    transition.state === "submitting" &&
    transition.submission?.formData.get("_action") === "insertComment";

  const commentFormRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (!isInsertingComment) {
      commentFormRef.current?.reset();
    }
  }, [isInsertingComment]);

  const imgSrcPaths = useMemo(() => {
    return tape.tape_snap_files.map((snap) => snap.path);
  }, [tape]);

  useImagePreloader(imgSrcPaths);

  const currentSnap = last(
    tape.tape_snap_files.filter((snap) => {
      return snap.second <= currentTime;
    })
  );

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      const listener = (event: Event) => {
        if (event.target instanceof HTMLAudioElement) {
          setCurrentTime(event.target.currentTime);
        }
      };
      audioRef.current.addEventListener("timeupdate", listener);
      return () => {
        audioRef.current?.removeEventListener("timeupdate", listener);
      };
    }
  });

  const handleTouchStart = () => setFocus(true);
  const handleTouchEnd = () => setFocus(false);
  const stopPropagation = (e: React.TouchEvent) => e.stopPropagation();

  return (
    <main>
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseUp={handleTouchEnd}
      >
        <Metadata focus={focus} onTouchStart={stopPropagation}>
          <Title>
            <Link to="/">{tape.profile?.username}</Link>
          </Title>
          <h3>{tapeDate}</h3>
          <Audio ref={audioRef} src={tape.path} autoPlay controls />
        </Metadata>
        <ImgContainer>
          {currentSnap ? <Img src={currentSnap.path} /> : <NoImg />}
        </ImgContainer>
      </div>
      <CommentList comments={tape.comments} />
      <CommentForm method="post" ref={commentFormRef}>
        <input type="hidden" name="ms" value={Math.round(currentTime * 1000)} />
        <TextArea rows={2} placeholder="Add Comment" name="body" />
        <Button name="_action" value="insertComment">
          Send
        </Button>
      </CommentForm>
    </main>
  );
};

export default TapeRoute;
