import { useState, useRef } from "react";
import Uppy, { UploadedUppyFile } from "@uppy/core";
import ImageEditor from "@uppy/image-editor";
import Webcam from "@uppy/webcam";
import Audio from "@uppy/audio";
import Tus from "@uppy/tus";
import GoldenRetriever from "@uppy/golden-retriever";
import Compressor from "@uppy/compressor";
import { DashboardModal, useUppy } from "@uppy/react";

import uppyCoreStyles from "@uppy/core/dist/style.css";
import uppyDashboardStyles from "@uppy/dashboard/dist/style.css";
import uppyWebcamStyles from "@uppy/webcam/dist/style.css";
import uppyAudioStyles from "@uppy/audio/dist/style.css";
import uppyImageEditorStyles from "@uppy/image-editor/dist/style.css";

type UploadedFile = UploadedUppyFile<
  Record<string, unknown>,
  Record<string, unknown>
>;
type UploadFormOnCompleteFn = (files: UploadedFile[]) => void;

type Props = {
  onComplete: UploadFormOnCompleteFn;
};

const UploadForm = (props: Props) => {
  const { onComplete } = props;

  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  const filesRef = useRef<UploadedFile[]>([]);

  const handleDone = () => {
    uppy.cancelAll();
    handleClose();
    onComplete(filesRef.current);
  };

  const uppy = useUppy(() => {
    const uppy = new Uppy();

    uppy.use(Tus, { endpoint: "https://tusd.stayradiated.com/files/" });

    uppy.on("complete", (result) => {
      filesRef.current.push(...result.successful);
    });

    uppy.setOptions({
      restrictions: {
        maxFileSize: 50_000_000,
        maxNumberOfFiles: null,
        minNumberOfFiles: 1,
        allowedFileTypes: ["image/*", "audio/*"],
      },
    });

    uppy.use(Webcam, { showVideoSourceDropdown: true });
    uppy.use(Audio, { showAudioSourceDropdown: true });
    uppy.use(ImageEditor, {
      quality: 0.8,
      cropperOptions: {
        viewMode: 1,
        background: false,
        autoCropArea: 1,
        responsive: true,
        croppedCanvasOptions: {},
      },
      actions: {
        revert: true,
        rotate: false,
        granularRotate: false,
        flip: false,
        zoomIn: true,
        zoomOut: true,
        cropSquare: false,
        cropWidescreen: false,
        cropWidescreenVertical: true,
      },
    });

    uppy.use(GoldenRetriever);
    uppy.use(Compressor);

    return uppy;
  });

  return (
    <DashboardModal
      open={open}
      onRequestClose={handleClose}
      uppy={uppy}
      height={600}
      doneButtonHandler={handleDone}
      showProgressDetails
      note="Audio and images only, at least 1 file, up to 50 MB"
      theme="light"
      plugins={["Webcam", "Audio", "ImageEditor"]}
    />
  );
};

UploadForm.links = [
  {
    rel: "stylesheet",
    href: uppyCoreStyles,
  },
  {
    rel: "stylesheet",
    href: uppyDashboardStyles,
  },
  {
    rel: "stylesheet",
    href: uppyWebcamStyles,
  },
  {
    rel: "stylesheet",
    href: uppyAudioStyles,
  },
  {
    rel: "stylesheet",
    href: uppyImageEditorStyles,
  },
];

export { UploadForm };
export type { UploadFormOnCompleteFn, UploadedFile };
