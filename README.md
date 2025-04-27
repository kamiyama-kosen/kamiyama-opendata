# 神山まるごと高専オープンデータ / kamiyama-opendata
 
## opendata

- [ITブートキャンプ2025発表会動画](it-bootcamp-2025.csv)
- [神山まるごと高専スカラーシップパートナー企業](kamiyama-scholarship-partners.csv)
- [3Dオープンデータ (別リポジトリ)](https://github.com/kamiyama-kosen/3d-opendata/)

## apps

- [SPシャッフルで順番決め！](https://github.com/kamiyama-kosen/sp-shuffle)
- [ITブートキャンプ2025発表会動画まとめ](https://kamiyama-kosen.github.io/kamiyama-opendata/it-bootcamp-2025.html)

## tools in JavaScript(js)

- [download.js](download.js) - CSVオープンデータからMP4ファイルをローカルにダウンロードするツール
- [mp3totxt.js](mp3totxt.js) - ディレクトリ内のMP3ファイルから文字起こしするツール (要 .env as OpenAI API key)
- [mp4tomp3.js](mp3totxt.js) - ディレクトリ内のMP4ファイルからMP3ファイルを作成するツール (要 ffmpeg)
- [mp4tojpg.js](mp3tojpg.js) - ディレクトリ内のMP4ファイルからJPEGファイルを作成するツール (要 ffmpeg)
- [txttopng.js](txttopng.js) - ディレクトリ内のTXTファイルからPNGファイルを生成するツール (要 .env as OpenAI API key)
- [addURL.js](addURL.js) - CSVオープンデータに追加オープンデータのURLを加えるツール
- [makeHTML.js](makeHTML.js) - CSVオープンデータからHTMLを生成するツール
- [changeExt.js](changeExt.js) - 拡張子を変更する関数

## prepare

### how to install deno

[Deno](https://deno.com/) is a runtime of JavaScript.

for MacOS
```sh
curl -fsSL https://deno.land/install.sh | sh
```

for Windows
```sh
irm https://deno.land/install.ps1 | iex
```

### how to install ffmpeg

[FFmpeg](https://www.ffmpeg.org/) is a tool about video files.

```sh
brew install ffmpeg
```

### how to set OpenAI API Key

1. [sign up OpenAI](https://auth.openai.com/create-account)
2. [create an API key](https://platform.openai.com/api-keys)
3. create a .env file
```
OPENAI_API_KEY=???
```
