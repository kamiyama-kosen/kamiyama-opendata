import { CSV } from "https://js.sabae.cc/CSV.js";
import { changeExt } from "./changeExt.js";

const fn = "../it-bootcamp-2025.csv";
const data = await CSV.fetchJSON(fn);
const outfn = "../it-bootcamp-2025.html";
const html = [];
const title = "神山まるごと高専ITブートキャンプ2025 まるごとハッカソン発表会";
const imglist = data.map(i => {
  return `
    <div>
      <a href=#${i.id}><img src=${changeExt(i.url, "png", "_char")}></a><br>
      <a href=#${i.id} class=imglista><span class=spanteam>チーム </span>${i.id}</a>
    </div>
  `;
}).join("\n");
html.push(`<!DOCTYPE html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" href="data:">
<title>${title}</title>
<style>
body {
  font-family: sans-serif;
  text-align: center;
  background-color: #f0f0f0;
}
img, video {
  width: 95vw;
}
.imglist {
  white-space: nowrap;
  overflow: scroll;
}
.imglist img {
  width: 20vw;
}
.imglist > div {
  display: inline-block;
  padding: .1vw;
  padding-bottom: 1em;
}
.imglist a {
  text-decoration: none;
  color: black !important;
}
.spanteam {
  display: none;
}

.container {
}

.character img, .graphic img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.transcript {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  line-height: 1.6;
  font-size: 90%;
  text-align: left;
}

video {
  width: 100%;
  height: auto;
  border-radius: 12px;
  background: #000;
}

@media (min-width: 768px) {
  .spanteam {
    display: inline;
  }
  h2 {
    text-align: left;
    font-size: 200%;
  }
  .container {
    display: grid;
    align-items: start;
    gap: .5em;
  }
  .character {
  	grid-column: 1;
    grid-row: 1 / 3;
  }
  .graphic {
  	grid-column: 1;
    grid-row: 3 / 5;
  }
  .video {
  	grid-column: 2 / 4;
    grid-row: 1;
  }
  .transcript {
  	grid-column: 2 / 4;
    grid-row: 2 / 5;
  }
}

</style>
</head><body>
<h1>${title}</h1>
<div class=imglist>${imglist}</div>
<div>※動画を元にテキストをAI生成し、グラレコ、キャラクターはそのテキストを元にAI生成したものです</diV>

<main>`);
html.push()
// series,id,file,filesize,url,name,url_mp3,url_txt,url_jpg

for (const item of data) {
  const txt = await Deno.readTextFile("../temp/" + changeExt(item.file, "txt"));
  html.push(`
  <hr>
  <section>
    <a id=${item.id}><h2>${item.series}. ${item.name} by チーム ${item.id}</h2></a>
    <div class=container>
      <div class=character><img class=char src=${changeExt(item.url, "png", "_char")}></div>
      <div class=graphic><img class=grarec src=${changeExt(item.url, "png")}></div>
      <div class=video><video controls src=${item.url} poster=${item.url_jpg}></video></div>
      <div class=transcript>${txt}</div>
    </div>
  </section>
  `);
}
html.push(`</main>
<hr><a href=https://github.com/kamiyama-kosen/kamiyama-opendata/>src on GitHub</a>
</body></html>
`);
await Deno.writeTextFile(outfn, html.join("\n"));
