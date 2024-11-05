var POSTS_RFF_DIR_EDITOR;
function updateDirEditor(){
    POSTS_RFF_DIR_EDITOR = localStorage.getItem("POSTS_RFF_URL_EDITOR");
}
updateDirEditor();


const upload = document.createElement('script');
upload.src = POSTS_RFF_DIR_EDITOR+'js/upload.js';

const func_editor_robson = document.createElement('script');
func_editor_robson.src = POSTS_RFF_DIR_EDITOR+'js/func.editor.robson.js';

const atalho = document.createElement('script');
atalho.src = POSTS_RFF_DIR_EDITOR+'js/tecla-de-atalho.js';

const dragDrop = document.createElement('script');
dragDrop.src = POSTS_RFF_DIR_EDITOR+'js/dragDrop.js';

const simplePDF = document.createElement('script');
simplePDF.src = POSTS_RFF_DIR_EDITOR+'js/simplePDF.js';

const internalScript = document.createElement('script');
internalScript.src = POSTS_RFF_DIR_EDITOR+'js/internalScript.js';

    document.getElementById('scriptsImports').appendChild(upload);
    document.getElementById('scriptsImports').appendChild(func_editor_robson);
    document.getElementById('scriptsImports').appendChild(atalho);
    document.getElementById('scriptsImports').appendChild(dragDrop);
    document.getElementById('scriptsImports').appendChild(simplePDF);
    document.getElementById('scriptsImports').appendChild(internalScript);
