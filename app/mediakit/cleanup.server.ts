import * as fs from "fs/promises";

const cleanup = async (filepath: string | undefined) => {
  if (typeof filepath === "string") {
    await fs.unlink(filepath);
  }
};

export { cleanup };
