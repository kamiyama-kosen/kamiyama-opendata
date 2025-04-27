import { dir2array } from "https://js.sabae.cc/dir2array.js";
import { changeExt } from "./changeExt.js";
import { VideoUtil } from "https://code4fukui.github.io/VideoUtil/VideoUtil.js";

//const defpreprompt = "下記のプレゼンテーションの文字起しからポップなグラレコを生成してください";
const defpreprompt = "下記のプレゼンテーションで示される事業をPRする、かわいいキャラクターを描いてください";
const postname = "_char";

const path = "../temp/";
const fns = await dir2array(path);
for (const fn of fns) {
  if (!fn.endsWith(".txt")) continue;
  console.log(fn);
  const outfn = changeExt(fn, "png", postname);
  await VideoUtil.generatePNG(path + fn, path + outfn, defpreprompt, { background: "transparent" });
}
