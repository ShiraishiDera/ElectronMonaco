'use strict';

const electron = require("electron");
const app = electron.app;
const Menu = electron.Menu;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  //mainWindow.webContents.openDevTools();
  initWindowMenu();
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

function initWindowMenu(){
  const template = 
  [
    {
      label: 'ファイル',
      submenu: 
      [
        {label: '新規作成', click: function(){mainWindow.webContents.executeJavaScript('saveNewFile()')}},
        {label: '開く', click: function(){mainWindow.webContents.executeJavaScript('openLoadFile()')}},
        {label: '保存', click: function(){mainWindow.webContents.executeJavaScript('saveFile()')}},
        {label: '名前を付けて保存', click: function(){mainWindow.webContents.executeJavaScript('saveNewFile()')}},
        {type: 'separator'},
        {label: '終了', role: 'close'}
      ]
    },
    {
      label: '編集',
      submenu: 
      [
        {label: '元に戻す', accelerator: 'CmdOrCtrl+Z', role: 'undo'},
        {label: 'やり直し', accelerator: 'Shift+CmdOrCtrl+Z', role: 'redo'},
        {type: 'separator'},
        {label: '切り取り', accelerator: 'CmdOrCtrl+X', role: 'cut'},
        {label: 'コピー', accelerator: 'CmdOrCtrl+C', role: 'copy'},
        {label: '貼り付け', accelerator: 'CmdOrCtrl+V', role: 'paste'},
        {label: '全選択', accelerator: 'CmdOrCtrl+A', role: 'selectall'}
      ]
    }
  ]
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

