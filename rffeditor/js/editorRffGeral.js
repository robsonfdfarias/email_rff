var EMAIL_RFF_DIR_EDITOR;
function updateDirEditor(){
    EMAIL_RFF_DIR_EDITOR = localStorage.getItem("EMAIL_RFF_URL_EDITOR");
}
updateDirEditor();


const upload = document.createElement('script');
upload.src = EMAIL_RFF_DIR_EDITOR+'js/upload.js';

const func_editor_robson = document.createElement('script');
func_editor_robson.src = EMAIL_RFF_DIR_EDITOR+'js/func.editor.robson.js';

const atalho = document.createElement('script');
atalho.src = EMAIL_RFF_DIR_EDITOR+'js/tecla-de-atalho.js';

const dragDrop = document.createElement('script');
dragDrop.src = EMAIL_RFF_DIR_EDITOR+'js/dragDrop.js';

const simplePDF = document.createElement('script');
simplePDF.src = EMAIL_RFF_DIR_EDITOR+'js/simplePDF.js';

const internalScript = document.createElement('script');
internalScript.src = EMAIL_RFF_DIR_EDITOR+'js/internalScript.js';

    document.getElementById('scriptsImports').appendChild(upload);
    document.getElementById('scriptsImports').appendChild(func_editor_robson);
    document.getElementById('scriptsImports').appendChild(atalho);
    document.getElementById('scriptsImports').appendChild(dragDrop);
    document.getElementById('scriptsImports').appendChild(simplePDF);
    document.getElementById('scriptsImports').appendChild(internalScript);
