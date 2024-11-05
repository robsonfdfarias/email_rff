var historyStack = [];
var currentIndex = -1;
var editor=null;
var maxReg = 50;
function definedEditor(edit){
    editor=edit;
}

function undo(){
    if(editor==null){
        return;
    }
    if(currentIndex>0){
        currentIndex--;
        editor.innerHTML = historyStack[currentIndex];
    }
}

function redo(){
    if(editor==null){
        return;
    }
    // currentIndex++;
    if(currentIndex<(historyStack.length-1)){
        currentIndex++;
        editor.innerHTML = historyStack[currentIndex];
    }
}
function saveState(){
    historyStack.splice(currentIndex+1, historyStack.length-currentIndex-1);
    if(historyStack.includes(editor.innerHTML)){
        return;
    }
    verifyMaxReg();
    historyStack.push(editor.innerHTML);
    currentIndex++;
}

function verifyMaxReg(){
    if(historyStack.length>=maxReg){
        historyStack.shift();
        currentIndex--;
    }
}
function showHistoryStackAtConsole(){
    console.log(historyStack);
}
