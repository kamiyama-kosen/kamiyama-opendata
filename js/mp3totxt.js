import { dir2array } from "https://js.sabae.cc/dir2array.js";
import { changeExt } from "./changeExt.js";
import { fetchAudioRecog } from "https://code4fukui.github.io/openai-audiorecog/fetchAudioRecog.js"

// https://github.com/code4fukui/openai-audiorecog/

const path = "../temp/";
const fns = await dir2array(path);
for (const fn of fns) {
  if (!fn.endsWith(".mp3")) continue;
  console.log(fn);
  const outfn = changeExt(fn, "txt");
  const mp3bin = new Uint8Array(await Deno.readFile(path + fn));
  const res = await fetchAudioRecog(mp3bin);
  const res2 = res.replace(/ /g, "\n");
  await Deno.writeTextFile(path + outfn, res2);
}
