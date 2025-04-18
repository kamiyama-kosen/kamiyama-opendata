import { CSV } from "https://js.sabae.cc/CSV.js";
import { changeExt } from "./changeExt.js";

const fn = "../it-bootcamp-2025.csv";
const data = await CSV.fetchJSON(fn);
const outfn = "../it-bootcamp-2025.html";
const html = [];
const title = "神山まるごと高専ITブートキャンプ2025 まるごとハッカソン発表会";
html.push(`<!DOCTYPE html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" href="data:">
<title>${title}</title>
<style>
body {
  font-family: sans-serif;
  text-align: center;
}
img, video {
  width: 95vw;
}
.script {
  font-size: 90%;
  border: 1px solid black;
  padding: 0.5em;
  margin: 0.5em;
  text-align: left;
}
</style>
</head><body>
<h1>${title}</h1>
<main>`);
html.push()
// series,id,file,filesize,url,name,url_mp3,url_txt,url_jpg

for (const item of data) {
  const txt = await Deno.readTextFile("../temp/" + changeExt(item.file, "txt"));
  html.push(`
  <h2>${item.series}. ${item.name} by チーム ${item.id}</h2>
  <a href=${item.url} target=_video><img src=${item.url_jpg}></a>
  <div class=script>${txt}</div>
  `);
}
html.push(`</main>
<hr><a href=https://github.com/kamiyama-kosen/kamiyama-opendata/>src on GitHub</a>
</body></html>
`);
await Deno.writeTextFile(outfn, html.join("\n"));
