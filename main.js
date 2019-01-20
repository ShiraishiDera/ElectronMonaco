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
