import { CSV } from "https://js.sabae.cc/CSV.js";
import { changeExt } from "./changeExt.js";

const fn = "../it-bootcamp-2025.csv";
const data = await CSV.fetchJSON(fn);
for (const item of data) {
  item.url_mp3 = changeExt(item.url, "mp3");
  item.url_txt = changeExt(item.url, "txt");
  item.url_jpg = changeExt(item.url, "jpg");
}
await Deno.writeTextFile(fn, CSV.stringify(data));
