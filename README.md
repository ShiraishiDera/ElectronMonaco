# ElectronMonaco
## これは何？
最低限のelectronとmonaco-editorでメモ帳を作ってみたものです。
パッケージ化までは考えていません。

## 使い方
node.jsが入っている前提です。npm installは適宜--saveや--save-devを使ってください。
1. cloneする
2. cdでcloneしたフォルダに移動
3. npm init(mainはmain.jsを指定)
4. npm install electron
5. npm install monaco-editor
6. ./node_modules/.bin/electron .