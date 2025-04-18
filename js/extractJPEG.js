import { ffmpeg } from "./ffmpeg.js";

export const extractJPEG = async (infn, jpgfn) => {
  const result = await ffmpeg([
    "-i", infn,
    jpgfn,
  ]);
  return result;
};
