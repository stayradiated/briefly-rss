import { writeFile } from "fs/promises";
import { temporaryFile } from "tempy";

const download = async (url: string): Promise<string> => {
  const outputFilepath = temporaryFile();
  const res = await fetch(url);
  const blob = await res.blob();
  const arrayBuffer = await blob.arrayBuffer();
  await writeFile(outputFilepath, Buffer.from(arrayBuffer));
  return outputFilepath;
};

export { download };
