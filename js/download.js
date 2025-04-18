import { CSV } from "https://js.sabae.cc/CSV.js";

const data = await CSV.fetchJSON("../it-bootcamp-2025.csv");
for (const item of data) {
  console.log(item.file);
  const bin = await (await fetch(item.url)).bytes();
  await Deno.writeFile("../temp/" + item.file, bin);
}
