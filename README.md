# ElectronMonaco
## これは何？
最低限のelectronとmonaco-editorでメモ帳を作ってみたものです。
jsの素人が作っている練習用です。
※windowsしか考えていません
※パッケージ化までは考えていません。

## 使い方
node.jsが入っている前提です。npm installは適宜--saveや--save-devを使ってください。
1. cloneする
2. cdでcloneしたフォルダに移動
3. npm init(mainはmain.jsを指定)
4. npm install electron
5. npm install monaco-editor
6. ./node_modules/.bin/electron .

## 各タグ・ブランチ
* initial
  最低限の実装。monaco-editorでエディタを表示し、ウィンドウによってリサイズする。

  動作していることが確認できればいいところ。

  index.htmlの設定をいじったりして遊ぶ用

  ```
  language: '',
  automaticLayout: true,
  wordWrap: true,
  theme: "vs-dark"
  ```

  この辺は必要かも。languageはCにするとCの予約文字の色変え。automaticLayoutはたぶんウィンドウ変更したときの挙動、wordWrapは折り返し、themeはテーマ。

  

* menuDev

    initialからよくあるファイルメニューと編集メニューを入れる。

    メニューをいじって遊ぶところ、click: function() { mainWindow.loadURL('https://www.google.com/'); }

    とかclick() = {} で遊ぶ。ファイル操作はjs初心者にはわかりにくかったので別にする。

* fileDev

  ファイルをオープンしたり、shift-jisを直したりするところ。

## パッケージバージョン

* electron@4.0.1
* iconv-lite@0.4.24
* monaco-editor@0.15.6


## 参考
* fsなど
  https://github.com/ics-creative/150819_electron_text_editor

* メニュー

  https://www.kabanoki.net/1208

  https://electronjs.org/docs/api/menu

* 設定

  https://microsoft.github.io/monaco-editor/api/classes/monaco.editor.internaleditoroptions.html#canuselayerhinting