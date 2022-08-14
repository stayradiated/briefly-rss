import { temporaryFile } from "tempy";

import { ffmpeg } from "./ffmpeg.server";

const transcodeImage = async (sourceFilePath: string): Promise<string> => {
  const outputFilePath = temporaryFile({
    extension: "jpg",
  });

  await ffmpeg(
    [
      ["-i", sourceFilePath],
      // downscale to max of 1920px tall
      ["-vf", "scale=-1:'min(1920,ih)'"],
      // set quality
      ["-q:v", "1"],
      outputFilePath,
    ].flat()
  );

  return outputFilePath;
};

export { transcodeImage };
