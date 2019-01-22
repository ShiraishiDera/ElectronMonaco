require.config({ paths: { 'vs': 'node_modules/monaco-editor/min/vs' }});
var editor;

require(['vs/editor/editor.main'], function() {
    editor = monaco.editor.create(document.getElementById('container'), {
        value: [
            'hello'
        ].join('\n'),
        language: '',
        automaticLayout: true,
        wordWrap: true,
        fontSize: 16, 
        theme: "vs-dark"
    });
});  
function getEditValue() {
    return editor.getValue();
}  
function setEditValue(data) {
    editor.setValue(data);
}  