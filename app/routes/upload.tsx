import { useState } from "react";
import { ClientOnly } from "remix-utils";
import {
  UploadForm,
  UploadFormOnCompleteFn,
  UploadedFile,
} from "~/components/UploadForm";
import {
  LinksFunction,
  ActionFunction,
  LoaderFunction,
  json,
  redirect,
} from "@remix-run/node";
import { Link, Form, useTransition, useActionData } from "@remix-run/react";
import * as dateFns from "date-fns";
import invariant from "tiny-invariant";

import * as briefly from "../briefly";
import * as mediakit from "../mediakit";

export const links: LinksFunction = () => [...UploadForm.links];

type ActionData = {
  tapeUID: string;
};

export const action: ActionFunction = async ({ request }) => {
  const session = await briefly.getSession(request);
  if (!session.accessToken) {
    return json({ error: "You are not logged in." });
  }

  const sdk = briefly.getClient(session);

  const formData = await request.formData();

  const cleanupList: string[] = [];

  try {
    const fileURLList = formData.getAll("file");
    const files = await Promise.all(
      fileURLList.map(async (fileURL) => {
        invariant(typeof fileURL === "string", "Must send file URL as string");
        const filepath = await mediakit.download(fileURL);
        cleanupList.push(filepath);
        const mediaType = await mediakit.getMediaType(filepath);
        return { filepath, mediaType };
      })
    );

    const sourceAudioFile = files.find((file) => file.mediaType === "audio");
    invariant(sourceAudioFile, "Must have at least one audio file");
    const sourceAudioFilepath = sourceAudioFile.filepath;

    const audioFilepath = await mediakit.transcodeAudio(sourceAudioFilepath);
    cleanupList.push(audioFilepath);

    const uploadedFileInfo = await mediakit.upload({
      session,
      filepath: audioFilepath,
      contentType: "audio/aac",
    });
    const uploadedFileUID = uploadedFileInfo.id;
    const presignedURL = await mediakit.getPresignedURL(
      session,
      uploadedFileUID
    );

    const expiryDate = dateFns.addDays(new Date(), 2);

    const durationMS = await mediakit.getAudioDurationMS(audioFilepath);
    const waves = mediakit.generateWaves(durationMS);

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

    const tapeUID = tape.insert_tape_one?.id;
    invariant(typeof tapeUID === "string", "Could not insert tape!");

    const imageList = files.filter((file) => file.mediaType === "image");

    const snaps = await Promise.all(
      imageList.map(async (image, index) => {
        const outputFilepath = await mediakit.transcodeImage(image.filepath);
        cleanupList.push(outputFilepath);

        const uploadedImage = await mediakit.upload({
          session,
          filepath: outputFilepath,
          contentType: "image/jpg",
        });
        const presignedURL = await mediakit.getPresignedURL(
          session,
          uploadedImage.id
        );

        return {
          tape_id: tapeUID,
          file_id: uploadedImage.id,
          path: presignedURL.url,
          second: index * 10,
        };
      })
    );

    await sdk.InsertTapeSnaps({ snaps });

    return json<ActionData>({
      tapeUID,
    });
  } finally {
    await Promise.all(
      cleanupList.map((filepath) => mediakit.cleanup(filepath))
    );
  }
};

type FileItemProps = {
  file: UploadedFile;
};

const FileItem = (props: FileItemProps) => {
  const { file } = props;

  const ICON_IMAGE = "🖼️";
  const ICON_AUDIO = "🔈";
  const ICON_UNKNOWN = "❓";

  const type = file.meta.type?.split("/")[0];
  const iconType =
    type === "audio"
      ? ICON_AUDIO
      : type === "image"
      ? ICON_IMAGE
      : ICON_UNKNOWN;

  return (
    <li>
      <p>
        {iconType} {file.name}
      </p>
      <input type="hidden" name="file" value={file.uploadURL} />
    </li>
  );
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await briefly.getSession(request);
  if (!session.accessToken) {
    return redirect("/login");
  }

  return json(
    {},
    {
      headers: {
        "Set-Cookie": await briefly.commitSession(session),
      },
    }
  );
};

const UploadDash = () => {
  const transition = useTransition();
  const actionData = useActionData<ActionData>();

  const [files, setFiles] = useState<UploadedFile[]>([]);

  const handleComplete: UploadFormOnCompleteFn = (files) => {
    setFiles(files);
  };

  return (
    <main>
      <h1>
        <Link to="/">Briefly</Link>
      </h1>
      <h2>Create Tape</h2>
      <ClientOnly>
        {() => <UploadForm onComplete={handleComplete} />}
      </ClientOnly>
      <Form method="post">
        <ul>
          {files.map((file) => (
            <FileItem file={file} />
          ))}
        </ul>
        <button
          disabled={transition.state !== "idle" || Boolean(actionData?.tapeUID)}
        >
          Create Tape
        </button>
        {transition.state !== "idle" && <p>Creating tape...</p>}
        {actionData?.tapeUID && (
          <p>
            Success!{" "}
            <Link to={`/tape/${actionData.tapeUID}`}>Check out your tape</Link>.
          </p>
        )}
      </Form>
    </main>
  );
};

export default UploadDash;
