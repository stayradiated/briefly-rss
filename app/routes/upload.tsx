import {
  ActionFunction,
  LoaderFunction,
  json,
  redirect,
  unstable_composeUploadHandlers,
  unstable_createFileUploadHandler,
  unstable_createMemoryUploadHandler,
  unstable_parseMultipartFormData,
} from "@remix-run/node";
import { Form, useTransition } from "@remix-run/react";
import * as dateFns from "date-fns";

import * as briefly from "../briefly";
import * as mediakit from "../mediakit";

export const action: ActionFunction = async ({ request }) => {
  const session = await briefly.getSession(request);
  if (!session.accessToken) {
    return json({ error: "You are not logged in." });
  }

  const sdk = briefly.getClient(session);

  const uploadHandler = unstable_composeUploadHandlers(
    unstable_createFileUploadHandler({
      maxPartSize: 50_000_000,
      file: ({ filename }) => filename,
    }),
    // parse everything else into memory
    unstable_createMemoryUploadHandler()
  );

  let sourceAudioFilepath: string | undefined;
  let audioFilepath: string | undefined;

  try {
    const formData = await unstable_parseMultipartFormData(
      request,
      uploadHandler
    );

    const sourceAudioFile = formData.get("audio") as unknown as {
      filepath: string;
    };
    sourceAudioFilepath = sourceAudioFile.filepath;

    audioFilepath = await mediakit.transcodeAudio(sourceAudioFilepath);
    const uploadedFileInfo = await mediakit.upload(session, audioFilepath);
    const uploadedFileUID = uploadedFileInfo.id;
    const presignedURL = await mediakit.getPresignedURL(
      session,
      uploadedFileUID
    );

    const expiryDate = dateFns.addDays(new Date(), 2);

    const durationMS = await mediakit.getAudioDurationMS(audioFilepath);
    const waves = mediakit.generateWaves(durationMS);

    console.log({
      uploadedFileUID,
      durationMS,
      presignedURL,
      expiryDate,
      waves: {
        length: waves.length,
        first100: waves.slice(0, 100),
      },
    });

    const tape = await sdk.InsertTape({
      file_id: uploadedFileUID,
      duration: durationMS,
      path: presignedURL.url,
      waves,
      expires_at: expiryDate.toISOString(),
      is_public: true,
      is_multicast: false,
      private_comments: false,
    });

    console.log({ tape });
  } finally {
    await Promise.all([
      mediakit.cleanup(sourceAudioFilepath),
      mediakit.cleanup(audioFilepath),
    ]);
  }

  return null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await briefly.getSession(request);
  if (!session.accessToken) {
    return redirect("/login");
  }

  return null;
};

const UploadRoute = () => {
  const transition = useTransition();

  return (
    <Form method="post" encType="multipart/form-data">
      <fieldset disabled={transition.state !== "idle"}>
        <input type="file" name="audio" />
        <input type="submit" value="Upload" />
      </fieldset>
      <p>STATE: {transition.state}</p>
    </Form>
  );
};

export default UploadRoute;
