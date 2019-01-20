const fs = require('fs');
const {BrowserWindow, dialog} = require('electron').remote;
var iconv = require('iconv-lite');

let currentPath = '';

function openLoadFile() {
    const win = BrowserWindow.getFocusedWindow();
    dialog.showOpenDialog(
      win,
      {
        properties: ['openFile'],
        filters: [{name: 'Documents', extensions: ['txt']}]
      },
      (fileNames) => {
        if (fileNames) {
          readFile(fileNames[0]);
        }
    });
}
  
function readFile(path) {
    currentPath = path;
    fs.readFile(path, (error, text) => {
    if (error != null) {
        alert('error : ' + error);
        return;
    }
    var convText = iconv.decode(text, "Shift_JIS");
    setEditValue(convText.toString());
    });
}
  

function saveFile() {
    if (currentPath === '') {
        saveNewFile();
        return;
    }
    const data = editor.getEditValue();
    writeFile(currentPath, data);
}

function saveNewFile() {  
    const win = BrowserWindow.getFocusedWindow();
    dialog.showSaveDialog(
      win,
      {
          properties: ['openFile'],
          filters: [{name: 'Documents', extensions: ['txt']}]
      },
      (fileName) => {
        if (fileName) {
            currentPath = fileName;
            writeFile(fileName, editValue());
        }
      }
    );
}  

function writeFile(path, data) {
    fs.writeFile(path, data, (error) => {
      if (error != null) {
        alert('error : ' + error);
      }
    });
}

