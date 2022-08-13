import { NodeOnDiskFile } from "@remix-run/node";

import * as briefly from "../briefly";
import { Session } from "../briefly/session.server";

type UploadResponse = {
  error?: {
    message: string;
  };
  id: string;
  name: string;
  size: number;
  bucketId: string;
  etag: string;
  createdAt: string;
  updatedAt: string;
  isUploaded: boolean;
  mimeType: string;
  uploadedByUserId: string;
};

const upload = async (
  session: Session,
  audioFilepath: string
): Promise<UploadResponse> => {
  const uploadURL = `https://${briefly.config.NHOST_ID}.storage.eu-central-1.nhost.run/v1/files`;

  const audioFile = new NodeOnDiskFile(audioFilepath, "audio/aac");

  const form = new FormData();
  form.append("file", audioFile);

  const fileInfoResponse = await fetch(uploadURL, {
    method: "POST",
    body: form,
    headers: {
      "x-nhost-bucket-id": "default",
      authorization: `Bearer ${session.accessToken}`,
    },
  });

  const fileInfo = (await fileInfoResponse.json()) as UploadResponse;

  if (fileInfoResponse.status >= 400) {
    console.error(fileInfoResponse);
    throw new Error(fileInfo.error?.message ?? "Could not upload file.");
  }

  return fileInfo;
};

export { upload };
