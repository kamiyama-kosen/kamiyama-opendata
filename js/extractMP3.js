import { ffmpeg } from "./ffmpeg.js";

export const extractMP3 = async (infn, mp3fn) => {
  const result = await ffmpeg([
    "-i", infn,
    "-vn", // 映像を無視
    "-acodec", "libmp3lame",
    mp3fn,
  ]);
  return result;
};
