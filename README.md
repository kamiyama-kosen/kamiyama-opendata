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
- [addURL.js](addURL.js) - CSVオープンデータに追加オープンデータのURLを加えるツール
- [makeHTML.js](makeHTML.js) - CSVオープンデータからHTMLを生成するツール

- [changeExt.js](changeExt.js) - 拡張子を変更する関数
- [extractJPEG.js](extractJPEG.js) - 動画ファイルからJPEGファイルを生成する関数 (要 ffmpeg)
- [extractMP3.js](extractMP3.js) - 動画ファイルからMP3ファイルを生成する関数 (要 ffmpeg)
- [ffmpeg.js](ffmpeg.js) - ffmpegを呼び出す関数 (要 ffmpeg)

## how to install ffmpeg

```sh
brew install ffmpeg
```
