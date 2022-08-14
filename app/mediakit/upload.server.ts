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

type UploadOptions = {
  session: Session;
  filepath: string;
  contentType: string;
};

const upload = async (options: UploadOptions): Promise<UploadResponse> => {
  const { session, filepath, contentType } = options;

  const uploadURL = `https://${briefly.config.NHOST_ID}.storage.eu-central-1.nhost.run/v1/files`;

  const file = new NodeOnDiskFile(filepath, contentType);

  const form = new FormData();
  form.append("file", file);

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
