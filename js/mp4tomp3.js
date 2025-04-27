import { dir2array } from "https://js.sabae.cc/dir2array.js";
import { changeExt } from "./changeExt.js";
import { VideoUtil } from "https://code4fukui.github.io/VideoUtil/VideoUtil.js";

const path = "../temp/";
const fns = await dir2array(path);
for (const fn of fns) {
  if (!fn.endsWith(".mp4")) continue;
  console.log(fn);
  const outfn = changeExt(fn, "mp3");
  await VideoUtil.extractMP3(path + fn, path + outfn);
}
