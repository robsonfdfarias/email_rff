(function () {
    document.getElementById('formatH').addEventListener('change', function() {
        var value = this.value;
        this.children['padrao'].selected = true;
        if(value=='reset'){
            delElement()
            return;
        }
        insertH(value)
    }); 
    document.getElementById('tamFont').addEventListener('change', function() {
        var value = this.value;
        tamanhoFont(parseInt(value))
        this.children['padrao'].selected = true;

    });
    document.getElementById('typefontface').addEventListener('change', function() {
        var selectedOption = this.children[this.selectedIndex];
        var value = this.value;
        fontFaceSel(value)
        // insertTag('font', 'face="'+value+'"');
    });
})();

var POSTS_RFF_DIR_EDITOR;
function updateDirEditor(){
    POSTS_RFF_DIR_EDITOR = localStorage.getItem("POSTS_RFF_URL_EDITOR");
}


definedEditor(document.getElementById('texto'))
saveState();
var characters = 0;
document.getElementById('texto').addEventListener('input', function(){
    characters++;
    if(characters>15){
        saveState()
        characters=0;
    }
});
document.getElementById('desfaz').addEventListener('click', function(){
    undo();
});
document.getElementById('refaz').addEventListener('click', function(){
    redo();
});
// document.getElementById('impHist').addEventListener('click', function(){
//     showHistoryStackAtConsole();
// })



let colorPicker;
const defaultColor = "#0000ff";

// window.addEventListener("load", startup1, false);

function startup1() {
    colorPicker = document.querySelector("#cores");
    colorPicker.value = defaultColor;
    colorPicker.addEventListener("input", cor, false);
    //colorPicker.addEventListener("change", updateAll, false);
    colorPicker.select();
}

// window.addEventListener("load", startup, false);

function startup() {
    colorPicker = document.querySelector("#coresDestaque");
    colorPicker.value = defaultColor;
    colorPicker.addEventListener("input", backColorText, false);
    //colorPicker.addEventListener("change", updateAll, false);
    colorPicker.select();
}




/*********************************** EXCLUIR TAG (EFEITO) INICIO **************************************/


function delElement(){
    // var range = window.getSelection().getRangeAt(0);
    var selecao = window.getSelection().getRangeAt(0).startContainer;
    var tag = selecao.parentNode;
    let pai = tag.parentNode;
    if(tag.nodeName=='DIV'){
        if(pai.getAttribute('id')=='texto' && pai.getAttribute('id')!=null){
            return;
        }
        if(tag.getAttribute('id')=='texto'){
            return;
        }
    }
    if(tag.nodeName!='LI'){
        //Cria um fragmento do documento
        const tagContent = document.createDocumentFragment();
        //Inseri todo o conteúdo dentro do fragmento
        tagContent.append(...Array.from(tag.childNodes));
        //Inseri o fragmento dentro do node pai
        pai.replaceChild(tagContent, tag);
    }else{
        // let sel = window.getSelection();
        // let range = sel.getRangeAt(0);
        // range.deleteContents();
        // range.selectNodeContents(tag);
        // sel.removeAllRanges();
        // sel.addRange(range);
        addTagOrder('ul', 'disc');
    }

    // let tt = document.createTextNode(tag.innerText);
    // pai.replaceChild(tt, tag);
    // let p = pai.outerHTML;
    // var t = tag.outerHTML;
    // let abre = '';
    // let fecha = '';
    // if(getTagName(tag.nodeName)=='p'){
    //     abre = '<'+getTagName(tag.nodeName)+' class="p">';
    //     fecha = '</'+getTagName(tag.nodeName)+'>';
    // }else{
    //     abre = '<'+getTagName(tag.nodeName)+'>';
    //     fecha = '</'+getTagName(tag.nodeName)+'>';
    // }
    // p = p.replace(abre, '');
    // p = p.replace(fecha, '');

    // abre = '<'+getTagName(pai.nodeName)+'>';
    // fecha = '</'+getTagName(pai.nodeName)+'>';
    // p = p.replace(abre, '');
    // p = p.replace(fecha, '');
    // pai.innerHTML = p
    // range.insertNode(pai);
}

function getTagName(tag){
    if(tag == 'DIV'){
        return 'div';
    }else if(tag=='B'){
        return 'b';
    }else if(tag=='RFFEFEITOBGTEXT1'){
        return 'rffefeitobgtext1';
    }else if(tag=='RFFEFEITOBGTEXT2'){
        return 'rffefeitobgtext2';
    }else if(tag=='RFFEFEITOBGTEXT3'){
        return 'rffefeitobgtext3';
    }else if(tag=='RFFEFEITOBGTEXT4'){
        return 'rffefeitobgtext4';
    }else if(tag=='RFFEFEITOBGTEXT5'){
        return 'rffefeitobgtext5';
    }else if(tag=='RFFEFEITOBGTEXT6'){
        return 'rffefeitobgtext6';
    }else if(tag=='RFFEFEITOBGTEXT7'){
        return 'rffefeitobgtext7';
    }else if(tag=='RFFEFEITOBGTEXT8'){
        return 'rffefeitobgtext8';
    }else if(tag=='RFFEFEITOBGTEXT9'){
        return 'rffefeitobgtext9';
    }else if(tag=='RFFEFEITOBGTEXT10'){
        return 'rffefeitobgtext10';
    }else if(tag=='RFFEFEITOBGTEXT11'){
        return 'rffefeitobgtext11';
    }else if(tag=='RFFEFEITOBGTEXT12'){
        return 'rffefeitobgtext12';
    }else if(tag=='RFFEFEITOBGTEXT13'){
        return 'rffefeitobgtext13';
    }else if(tag=='RFFEFEITOBGTEXT14'){
        return 'rffefeitobgtext14';
    }else if(tag=='RFFEFEITOBGTEXT15'){
        return 'rffefeitobgtext15';
    }else if(tag=='RFFEFEITOBGTEXT16'){
        return 'rffefeitobgtext16';
    }else if(tag=='RFFEFEITOBGTEXT17'){
        return 'rffefeitobgtext17';
    }else if(tag=='RFFEFEITOBGTEXT18'){
        return 'rffefeitobgtext18';
    }else if(tag=='RFFEFEITOBGTEXT19'){
        return 'rffefeitobgtext19';
    }else if(tag=='RFFEFEITOBGTEXT20'){
        return 'rffefeitobgtext20';
    }else if(tag=='RFFEFEITOBGTEXT21'){
        return 'rffefeitobgtext21';
    }else if(tag=='RFFEFEITOBGTEXT'){
        return 'rffefeitobgtext';
    }else if(tag=='RFFTEXTSHADOW'){
        return 'rfftextshadow';
    }else if(tag=='RFFNEONTEXT'){
        return 'rffneontext';
    }else if(tag=='RFFNEONTEXTECOLORWHITE'){
        return 'rffneontextecolorwhite';
    }else if(tag=='RFFTEXT3D'){
        return 'rfftext3d';
    }else if(tag=='RFFTEXT3DSIMPLES'){
        return 'rfftext3dsimples';
    }else if(tag=='RFFTEXT3DEXTREME'){
        return 'rfftext3dextreme';
    }else if(tag=='RFFTEXTDEGRADE'){
        return 'rfftextdegrade';
    }else if(tag=='CITE'){
        return 'cite';
    }else if(tag=='A'){
        return 'a';
    }else if(tag=='P'){
        return 'p';
    }else if(tag=='H1'){
        return 'h1';
    }else if(tag=='H2'){
        return 'h2';
    }else if(tag=='H3'){
        return 'h3';
    }else if(tag=='H4'){
        return 'h4';
    }else if(tag=='H5'){
        return 'h5';
    }else if(tag=='RFF'){
        return 'rff';
    }
}

function getTags(){
    var selecao = window.getSelection().getRangeAt(0).startContainer;
    var tag = selecao.parentNode;
    return getTagName(tag.nodeName)
}

/*********************************** EXCLUIR TAG (EFEITO) INICIO **************************************/

// window.addEventListener('click', function(e){
//     e.preventDefault()
//     console.log(e.target)
// })

/*********************************** MARCAR OS BOTÕES QUE FORAM ATIVADOS INICIO **************************************/
function removeBackgroundColorButtons(){
    let tools = document.getElementById('ferramentas');
    // let imgs = tools.getElementsByTagName('img');
    let imgs = tools.getElementsByClassName('img');
    for(let i=0; i<imgs.length; i++){
        imgs[i].setAttribute('style', 'background-color: none;');
    }
}

function selectElem(){
        let selFont = document.getElementById('typefontface');
        selFont.children['padrao'].selected = true;

        selFont = document.getElementById('tamFont');
        selFont.children['padrao'].selected = true;
    removeBackgroundColorButtons();
    let tags = [];
    var selecao = window.getSelection().getRangeAt(0).startContainer;
    tags.push(selecao)
    for(let i=0; i<10; i++){
        if(tags[i].parentNode.nodeName=='DIV'){
            tags.push(tags[i].parentNode)
            break;
        }else{
            tags.push(tags[i].parentNode)
        }
        if(returnBtName(tags[i].parentNode.nodeName)!=null){
            elementInsert(tags[i].parentNode.nodeName, tags[i].parentNode)
        }
    }
}
function returnBtName(ele, node){
    let obj=null;
    if(ele=='B'){
        obj='negrito';
    }else if(ele=='I'){
        obj='italico';
    }else if(ele=='STRIKE'){
        obj='strike';
    }else if(ele=='U'){
        obj='sublinhado';
    }else if(ele=='SUB'){
        obj='subescrito';
    }else if(ele=='SUP'){
        obj='superescrito';
    }else if(ele=='RFFEFEITOBGTEXT'){
        obj='rffEfeitoBGText';
    }else if(ele=='RFFTEXTSHADOW'){
        obj='rffTextShadow';
    }else if(ele=='RFFNEONTEXT'){
        obj='rffNeonText';
    }else if(ele=='RFFNEONTEXTECOLORWHITE'){
        obj='rffNeonTextEColorWhite';
    }else if(ele=='RFFTEXT3D'){
        obj='rffText3D';
    }else if(ele=='RFFTEXT3DSIMPLES'){
        obj='rffText3DSimples';
    }else if(ele=='RFFTEXT3DEXTREME'){
        obj='rffText3DExtreme';
    }else if(ele=='RFFTEXTDEGRADE'){
        obj='rffTextDegrade';
    }else if(ele=='CITE'){
        obj='cite';
    }else if(ele=='A'){
        obj='insertHyperLink';
    }else if(ele=='P'){
        obj='p';
    }else if(ele=='FONT'){
        obj='font';
    }else if(ele=='RFF'){
        obj='rff';
    }else if(ele=='SPAN'){
        if(node.getAttribute('id')=='capitular'){
            obj='p';
        }
    }else if(ele=='OL'){
        obj='ordenarLista';
    }else if(ele=='UL'){
        obj='unOrdenarLista';
    }
    return obj;
}

function elementInsert(ele, nodeEl){
    var obj;
    // console.log(ele)
    obj = returnBtName(ele, nodeEl);
    negritaBt(obj, nodeEl)

}
function negritaBt(obj, nodeEl){
    if(obj=='font'){
        if(nodeEl.getAttribute('face')!=null){
            // console.log('O tipo da fonte é: '+nodeEl.getAttribute('face'))
            let selFont = document.getElementById('typefontface');
            selFont.children[nodeEl.getAttribute('face')].selected = true;
        }
        if(nodeEl.getAttribute('size')!=null){
            // console.log('O tipo da fonte é: '+nodeEl.getAttribute('size'))
            let selFont = document.getElementById('tamFont');
            let n =  nodeEl.getAttribute('size');
            n=n-1;
            selFont.children[n].selected = true;
        }
    }else{
        var o = document.getElementById(obj);
        if(nodeEl.id=="shortcode"){
            o = document.getElementById('shortcode');
        }
        // console.log(nodeEl.parentNode.nodeName)
        // alert(o.src)
        if(o!=null){
            o.setAttribute('style', 'background-color: #cdcdcd;')
        }
    }
}


/*********************************** MARCAR OS BOTÕES QUE FORAM ATIVADOS FIM **************************************/




function InsertCapitular(tagPai){
    // let selecao = window.getSelection().getRangeAt(0).startContainer;
    let tagFirstCharacter = returnFirstCharacter(tagPai, []);
    //funcção que capitura a tag
    function returnFirstCharacter(tagPai, tagChild){
        let firstCharacter = tagPai.innerHTML.charAt(0);
        if(firstCharacter=='<'){
            let firstTag = tagPai.firstElementChild;
            tagChild.push(firstTag);
            returnFirstCharacter(firstTag, tagChild);
        }
        let val = tagChild[(tagChild.length-1)];
        return val!=undefined?val:tagPai;
    }
    let first = tagFirstCharacter.innerText.charAt(0);
    let content = tagFirstCharacter.innerHTML.slice(1)
    tagFirstCharacter.innerHTML = '<span id="capitular" style="float:left; font-size:3em; color: green; padding: 11px 5px 10px 0px; font-weight: bold;">'+first+'</span>'+content;
}

function capitular(){
    let isInDivTexto = verifyIfIsIntoDivTexto();
    if(isInDivTexto==false){
      alert('Clique na caixa de texto antes de usar esse recurso');
        return;
    }
    saveState();
    let selecao = window.getSelection().getRangeAt(0).startContainer;
    let pai = returnTagFather(selecao, []);
    function returnTagFather(selecao, tags){
        if(selecao.parentNode.nodeName!='DIV' && selecao.parentNode!=undefined){
            tags.push(selecao.parentNode);
            returnTagFather(selecao.parentNode, tags);
        }
        let val = tags[(tags.length-1)];
        return val!=undefined?val:selecao.parentNode;
    }
    let tagSpan = verifyTagSpanCapitular(pai, []);
    function verifyTagSpanCapitular(selecao, tags){
        let firstCharacter = selecao.innerHTML.charAt(0);
        if(firstCharacter=='<'){
            tags.push(selecao.firstElementChild);
            if(selecao.firstElementChild.nodeName=='SPAN' && selecao.firstElementChild.getAttribute('id')=='capitular'){
                //encontrou a tag span com id capitular
            }else{
                verifyTagSpanCapitular(selecao.firstElementChild, tags);
            }
        }
        let val = tags[(tags.length-1)];
        return val!=undefined?val:pai;
    }
    if(tagSpan.nodeName=='SPAN' && tagSpan.getAttribute('id')=='capitular'){
        let parent = selecao.parentNode;
        if(parent.nodeName=='SPAN'){
            parent = parent.parentNode;
        }
        let first = tagSpan.innerHTML;
        tagSpan.remove();
        // selecao.innerHTML = first+selecao.innerHTML.slice(1);
        parent.innerHTML = first+parent.innerHTML;
    }else{
        InsertCapitular(pai);
    }
    saveState();
}

function getTagFather(tag){
    let pai = returnTagFather(tag, []);
    function returnTagFather(selecao, tags){
        if(selecao.parentNode.nodeName!='DIV' && selecao.parentNode!=undefined){
            tags.push(selecao.parentNode);
            returnTagFather(selecao.parentNode, tags);
        }
        let val = tags[(tags.length-1)];
        return val!=undefined?val:selecao.parentNode;
    }
    return pai;
}

function getTagChild(tagFather){
    let tagChild = verifyTagSpanCapitular(tagFather, []);
    function verifyTagSpanCapitular(selecao, tags){
        let firstCharacter = selecao.innerHTML.charAt(0);
        if(firstCharacter=='<'){
            tags.push(selecao.firstElementChild);
            verifyTagSpanCapitular(selecao.firstElementChild, tags);
        }
        tags.push(selecao);
        let val = tags[(tags.length-1)];
        return val!=undefined?val:pai;
    }
    return tagChild;
}




function insertVi(){
    var url = document.getElementById('url').value;
    var vizualiza = document.getElementById('videoVisualiza');
    vizualiza.innerHTML = ifrm;
}



function openWindowLink(){
    let isInDivTexto = verifyIfIsIntoDivTexto();
    if(isInDivTexto==false){
      alert('Clique na caixa de texto antes de usar esse recurso');
        return;
    }
    updateDirEditor();
    var selecao = window.getSelection().getRangeAt(0).startContainer;
    var tag = selecao.parentNode;
    if(tag.nodeName=='A'){
        localStorage.setItem('link', tag.getAttribute('href'))
        localStorage.setItem('target', tag.getAttribute('target'))
        window.open(POSTS_RFF_DIR_EDITOR+'windowEditLink.php', 'janela', 'height=350, width=500, top=50, left=100, scrollbar=no, fullscreen=no');
    }else{
        window.open(POSTS_RFF_DIR_EDITOR+"windowInsertLink.php", 'janela', 'height=350, width=500, top=50, left=100, scrollbar=no, fullscreen=no');
    }
}

function link(link, target) {
    saveState();
    let a = document.createElement('a');
    a.href=link;
    a.target=target;
    if(insertTagSelection(a)){
        saveState();
    }
}
function unlink() {
    saveState();
    document.execCommand("unlink", false, null);
    selectElem();
    saveState();
}
function justificar() { //Está sendo usado
    saveState();
    document.execCommand("justifyFull");
    saveState();
}
function alinharEsquerda() { //Está sendo usado
    saveState();
    document.execCommand("justifyLeft");
    saveState();
}
function alinharDireita() { //Está sendo usado
    saveState();
    document.execCommand("justifyRight");
    saveState();
}
function alinharCentro() { //Está sendo usado
    saveState();
    document.execCommand("justifyCenter");
    saveState();
}

function italico() { //Está sendo usado
    saveState();
    document.execCommand("italic", window.getSelection(), null);
    saveState();
}
function negrito() { //Está sendo usado
    saveState();
    document.execCommand("bold");
    saveState();
}
function sublinhado() { //Está sendo usado
    saveState();
    document.execCommand("underline", window.getSelection(), null);
    saveState();
}
function cor() {
    saveState();
    var cores = document.getElementById('cores');
    document.execCommand('styleWithCSS', false, true);
    document.execCommand("foreColor", window.getSelection(), cores.value);
    saveState();
}

function backColorText() {
    saveState();
    var cores = document.getElementById('coresDestaque');
    document.execCommand("backColor", window.getSelection(), cores.value);
    saveState();
}

function corText(cor) {
    saveState();
    document.execCommand("foreColor", window.getSelection(), '#'+cor);
    saveState();
}

function backColorTextNew(color) {
    saveState();
    document.execCommand("backColor", window.getSelection(), '#'+color);
    saveState();
}

function tamanhoFont(size) {
    saveState();
    document.execCommand("fontsize", true, size);
    saveState();
}

function fontFaceSel(font) {
    saveState();
    document.execCommand("fontname", true, font);
    saveState();
}

function copiar() {
    saveState();
    document.execCommand("copy", false, null);
    saveState();
}

function recortar() {
    saveState();
    document.execCommand("cut", false, null);
    saveState();
}
 
function colar() {
    saveState();
    document.execCommand("paste", false, null);
    saveState();
}

function ordenarLista(){
    saveState();
    document.execCommand("insertOrderedList", false, null);
    saveState();
}

function unOrdenarLista(){
    saveState();
    document.execCommand("insertUnorderedList", false, null);
    saveState();
}

function desfazer(){
    document.execCommand("undo", false, null);
}

function refazer(){
    document.execCommand("redo", false, null);
}

function removeFormatT(){
    let isInDivTexto = verifyIfIsIntoDivTexto();
    if(isInDivTexto==false){
        alert('Clique na caixa de texto antes de usar esse recurso');
        return;
    }
    saveState();
    delElement();
    saveState();
}

function addStrikeThrough(){ //Está sendo usado
    saveState();
    document.execCommand("strikeThrough", false, null);
    saveState();
}

function addSubScript(){
    saveState();
    document.execCommand("subscript", false, null);
    saveState();
}

function addSuperScript(){
    saveState();
    document.execCommand("superscript", false, null);
    saveState();
}

function addIdent(){
    saveState();
    document.execCommand("indent", false, null);
    saveState();
}

function addOutIdent(){
    saveState();
    document.execCommand("outdent", false, null);
    saveState();
}

function teste(){
    window.getSelection().getRangeAt(0).insertNode(id_('bold').firstChild);
}

function itIsInTheTextDiv(){
    let isInDivTexto = verifyIfIsIntoDivTexto();
    if(isInDivTexto==false){
      alert('Clique na caixa de texto antes de usar esse recurso');
        return;
    }
}

function verifyIfIsIntoDivTexto(){
    let container = window.getSelection().getRangeAt(0).startContainer;
    let v = verify(container, []);
    function verify(data, char){
        let val = data.parentNode;
        if(val != null){
            if(val.nodeName=='DIV'){
                if(val.getAttribute('id') == 'texto'){
                    return true;
                }
                if(val.getAttribute('id')=='divForm' || val.getAttribute('id')=='wpwrap'){
                    return false;
                }
            }
        }
        return verify(val, char);
    }
    return v;
}

function setOrderType(type, style_type, texto){
    // let tag = document.createElement(type);
    // tag.setAttribute('style', 'list-style-type: '+style_type+'; margin-left: 2em;');
    let li = document.createElement('li');
    li.innerHTML = texto;
    // tag.appendChild(li);
    return li;
}
function addTagOrder(type, style_type){
    let isInDivTexto = verifyIfIsIntoDivTexto();
    if(isInDivTexto==false){
        alert('Clique na caixa de texto antes de usar esse recurso');
        return;
    }
    saveState();
    let selection = window.getSelection();
    let range = selection.getRangeAt(0);
    let start = range.startContainer.parentNode;
    let texto = selection.toString();
    let tags = [start]
    if(texto.includes('\n')){
        let end = range.endContainer.parentNode;
        let currentTag = start.nextElementSibling;
        while(currentTag && currentTag!==end){
            tags.push(currentTag);
            currentTag=currentTag.nextElementSibling;
        }
        tags.push(end)
        // console.log(tags)
        // tags=[];
    }
    if(tags[0].nodeName=='LI'){
        // console.log(tags)
        let ant = false;
        let pos = false;
        if(tags[0].previousElementSibling && tags[0].previousElementSibling.nodeName=='LI'){
            ant=true;
        }
        if(tags[(tags.length-1)].nextElementSibling && tags[(tags.length-1)].nextElementSibling.nodeName=='LI'){
            pos=true;
        }
        let fatherLi = tags[0].parentNode;
        let fatherUlOl = fatherLi.parentNode;
        let fatherFatherUlOl = fatherLi.parentNode.parentNode;
        if(ant==false && pos==false){
            for(let i=0;i<tags.length;i++){
                let div = document.createElement('div');
                div.innerHTML = tags[i].innerHTML;
                // fatherLi.replaceChild(span, tags[i]);
                fatherFatherUlOl.insertBefore(div, fatherUlOl)
            }
            fatherLi.parentNode.remove();
        }else if(ant==false && pos==true){
            for(let i=0;i<tags.length;i++){
                let div = document.createElement('div');
                div.innerHTML = tags[i].innerHTML;
                // fatherLi.replaceChild(span, tags[i]);
                fatherFatherUlOl.insertBefore(div, fatherUlOl);
                tags[i].remove();
            }
        }else if(ant==true && pos==false){
            for(let i=0;i<tags.length;i++){
                let div = document.createElement('div');
                div.innerHTML = tags[i].innerHTML;
                // fatherLi.replaceChild(span, tags[i]);
                insertAfter(div, fatherUlOl);
                tags[i].remove();
            }
        }else if(ant==true && pos==true){
            //cria uma lista e insere os LIs antes da seleção e 
            //cria as DIVs com o conteúdo das LIs que fazem parte da seleção e 
            //os insere na div texto mantendo a ordem dos elementos
            //depois cria outra lista e inserir os LIs que estão depois da seleção
            splitTheUlOrOl(fatherLi, tags, style_type);
        }
    }else{
        let ulOl = document.createElement(type)
        ulOl.setAttribute('style', 'list-style-type: '+style_type+'; margin-left: 2em;');
        for(let i=0;i<tags.length;i++){
            let li = setOrderType(type, style_type, tags[i].innerHTML);
            ulOl.appendChild(li);
            if(i>0){
                tags[i].remove();
            }
        }
        tags[0].innerHTML='';
        tags[0].appendChild(ulOl);
        range.collapse(false);
    }
    saveState();
}

//recebe a div mais externa depois da div com id Texto para inserir o elemento após
function insertAfter(newElement, referenceElement){
    const parent = referenceElement.parentNode;
    if(parent.lastChild===referenceElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement, referenceElement.nextElementSibling);
    }
}

//Recebe o UL ou o OL
function splitTheUlOrOl(ulOl, tags, style_type){
    let definedUlOrOl = [];
    definedUlOrOl['UL'] = 'ul';
    definedUlOrOl['OL'] = 'ol';
    let lista1 = document.createElement(definedUlOrOl[ulOl.tagName])
    let lista2 = document.createElement(definedUlOrOl[ulOl.tagName])
    lista1.setAttribute('style', 'list-style-type: '+style_type+'; margin-left: 2em;');
    lista2.setAttribute('style', 'list-style-type: '+style_type+'; margin-left: 2em;');
    let control = 0;
    for(let i=0; i<ulOl.children.length; i++){
        if(testLi(ulOl.children[i], tags)==true){
            if(control==0){
                let div = document.createElement('div');
                div.appendChild(lista1);
                ulOl.parentNode.parentNode.insertBefore(div, ulOl.parentNode);
            }
            let divL = document.createElement('div');
            divL.innerHTML = ulOl.children[i].innerHTML;
            ulOl.parentNode.parentNode.insertBefore(divL, ulOl.parentNode);
            control=1;
        }
        if(testLi(ulOl.children[i], tags)==false && control==0){
            // lista1.appendChild(ulOl.children[i].cloneNode(true));
            let li = document.createElement('li');
            li.innerHTML = ulOl.children[i].innerHTML;
            lista1.appendChild(li);
        }else if(testLi(ulOl.children[i], tags)==false && control==1){
            // lista2.appendChild(ulOl.children[i].cloneNode(true));
            let li = document.createElement('li');
            li.innerHTML = ulOl.children[i].innerHTML;
            lista2.appendChild(li);
        }
    }
    let div2 = document.createElement('div');
    div2.appendChild(lista2);
    insertAfter(div2, ulOl.parentNode);
    ulOl.parentNode.remove();
}
function testLi(li, tags){
    let verify=false;
    for(let j=0;j<tags.length;j++){
        if(li===tags[j]){
            verify=true;
        }
    }
    return verify;
}

function upperAndLowerCase(val){
    saveState();
    let selection = window.getSelection();
    let range = selection.getRangeAt(0);
    let texto = selection.toString();
    let isInDivTexto = verifyIfIsIntoDivTexto();
    if(isInDivTexto==false){
      alert('Clique na caixa de texto antes de usar esse recurso');
        return;
    }
    if(texto!='' && texto.length>0){
        let nodeText = document.createElement('div');
        nodeText.append(range.cloneContents());
        if(val=='upper'){
            // texto = texto.toUpperCase();
            // console.log(nodeText)
            nodeText.innerHTML=nodeText.innerHTML.toUpperCase();
            texto=nodeText;
        }else if(val=='upperAndLower'){
            texto = texto.toLocaleLowerCase();
            let char = texto.split(' ');
            let union=[];
            let test = texto.charAt(0);
            if(test!=' '){
                test='';
            }
            for(let i =0; i<char.length; i++){
                let first = char[i].charAt(0).toUpperCase();
                union.push(first+char[i].slice(1));
            }
            // let first = texto.charAt(0).toUpperCase();
            // texto = first+texto.slice(1);
            // texto=test+union.join(' ');
            // nodeText.innerHTML=texto;
            nodeText.innerHTML=test+union.join(' ');
            texto=nodeText;
        }else if(val=='lower'){
            // texto = texto.toLocaleLowerCase();
            // console.log(nodeText)
            nodeText.innerHTML=nodeText.innerHTML.toLocaleLowerCase();
            texto=nodeText;
        }
        range.deleteContents();
        // range.insertNode(document.createTextNode(texto));
        // console.log(texto)
        let container = document.createDocumentFragment();
        container.append(...Array.from(texto.childNodes));
        range.insertNode(container);
        selection.removeAllRanges();
        selection.addRange(range);
    }
    saveState();
}

function insertShortcode(){
    let isInDivTexto = verifyIfIsIntoDivTexto();
    if(isInDivTexto==false){
      alert('Clique na caixa de texto antes de usar esse recurso');
        return;
    }
    let selection = window.getSelection();
    let range = selection.getRangeAt(0);
    let container = range.startContainer;
    let father = getTagFather(container);
    console.log(container.nodeValue)
    console.log(father)
    if(father.nodeName=='P'){
        if(father.id=='shortcode'){
            let fatherGenarete = father.parentNode;
            fatherGenarete.innerHTML='';
            fatherGenarete.append(container);
            return;
        }
    }
    let div = document.createElement('div');
    let varClear='';
    if(container.nodeValue!=null){
        varClear = container.nodeValue.replace('[', '');
        varClear = varClear.replace(']', '');
    }
    div.innerHTML = `
        <!-- wp:paragraph -->
        <p id="shortcode" style="padding:0 4px; background-color:#cdcdcd;">[${varClear}]</p>
        <!-- /wp:paragraph -->
    `;
    let div2 = document.createElement('div');
    div2.innerHTML=' ';
    if(container.nodeValue!=null){
        div2.innerHTML='.';
        let father2 = father.parentNode;
        father2.insertBefore(div2, father);
        father2.insertBefore(div, div2);
    }else{
        father.insertBefore(div2, container);
        father.insertBefore(div, div2);
    }
    container.nodeValue = '';
}

function insertTag(valor) {
    let isInDivTexto = verifyIfIsIntoDivTexto();
    if(isInDivTexto==false){
      alert('Clique na caixa de texto antes de usar esse recurso');
        return;
    }
    saveState();
    if(valor.toLowerCase() == getTags()){
        delElement();
        return;
    }
    let sel = document.createElement(valor);
    sel.setAttribute('style', strategyTags(valor));
    if(insertTagSelection(sel)){
        saveState();
    }
}

function insertTagSelection(tag){
    let selection = window.getSelection();
    let range = selection.getRangeAt(0);
    if(selection.toString()!=''){
        tag.append(range.cloneContents());
        range.deleteContents();
        range.insertNode(tag);
        range.setStartAfter(tag);
        selection.removeAllRanges();
        selection.addRange(range);
        return true;
    }else{
        return false;
    }
}

function strategyTags(value){
    updateDirEditor();
    let rffTextShadow = `text-shadow: 2px 2px 2px #00000055, 2px 2px 2px rgba(0,0,0,0.4);`;
    let rffNeonText = `text-shadow: 0px 0px 4px #4056ff;
        font-weigth:bold;`;
    let rffNeonTextEColorWhite = `text-shadow: 0px 0px 1px #4056ff, 0px 0px 2px #4056ff, 0px 0px 4px #4056ff, 0px 0px 6px #4056ff;
        font-weigth:bold;`;
    let rffText3D = `color: #dfdfdf;
        font-size: 150px;
        font-family: monospace;
        font-weight: bold;
        text-align: center;
        text-shadow: 1px -1px 0 #2f5d87, 
                    2px -2px 0 #2e5a83, 
                    3px -3px 0 #2d5880, 
                    4px -4px 0 #2b557c, 
                    5px -5px 0 #2a5378, 
                    6px -6px 0 #295074, 
                    7px -7px 0 #274d71, 
                    8px -8px 0 #264b6d, 
                    9px -9px 0 #254869, 
                    10px -10px 0 #234665, 
                    11px -11px 0 #224361, 
                    12px -12px 0 #21405e, 
                    13px -13px 12px rgba(0, 0, 0, 0.55), 
                    13px -13px 1px rgba(0, 0, 0, 0.5);`;
    let rffText3DSimples = `color: #dfdfdf;
        font-size: 100px;
        font-family: monospace;
        font-weight: bold;
        text-align: center;
        text-shadow: 1px -1px 0 #2f5d87,
                    2px -2px 0 #2e5a83, 
                    3px -3px 0 #2d5880;`;
    let rffText3DExtreme = `font-size: 100px;
        font-weight: 900;
        background-image: linear-gradient(rgb(130,130,130), rgb(255,255,255), rgb(255,255,255));
        background-clip: border-box;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: 2px 1px #dfdfdf, 
                    2px 1px rgb(0, 57, 85),
                    4px 2px rgb(5, 70, 90), 
                    6px 4px rgb(15, 72, 100), 
                    8px 5px rgb(20, 85, 105), 
                    10px 6px rgb(25, 98, 110), 
                    12px 7px rgb(30, 99, 115), 
                    14px 8px rgb(30, 112, 120), 
                    16px 9px black, 
                    18px 10px black, 
                    20px 11px black, 
                    22px 12px black, 
                    24px 13px black, 
                    28px 14px rgba(0, 0, 0, 0.9), 
                    30px 15px rgba(0, 0, 0, 0.7), 
                    32px 16px rgba(0, 0, 0, 0.5), 
                    34px 17px rgba(0, 0, 0, 0.3), 
                    36px 18px rgba(0, 0, 0, 0.1), 
                    40px 20px rgba(0, 0, 0, 0.1);`;
    let rffTextDegrade = 'font-size: 70px; font-weight: 900; letter-spacing: 4px; background-image: linear-gradient(to bottom, rebeccapurple, steelblue, turquoise); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; color: black; -webkit-text-stroke-width: 2px; -webkit-text-stroke-color: #adadad;';
    let rffEfeitoBGText = `
        background-image: url('${POSTS_RFF_DIR_EDITOR}imgs/bk2.png');
        background-size: cover;
        -webkit-text-fill-color: transparent;
        -webkit-animation: aitf 5s linear infinite;
        -webkit-transform: translate3d(0,0,0);
        -webkit-backface-visibility: hidden;
        background-position: center;
        color: transparent;
        -moz-background-clip: text;
        -webkit-background-clip: text;
        text-transform: uppercase;
        font-size: 50px;
        margin: 10px 0;
        font-weight: 900;
        border-image: 1px solid #ddd;`;
    let rffEfeitoBGText2 = `background-image: url('${POSTS_RFF_DIR_EDITOR}imgs/giphy2.webp');
        background-size: cover;
        background-position: center;
        color: transparent;
        -moz-background-clip: text;
        -webkit-background-clip: text;
        text-transform: uppercase;
        font-size: 50px;
        margin: 10px 0;
        font-weight: 900;`;
    let rffEfeitoBGText3 = `background-image: url('${POSTS_RFF_DIR_EDITOR}imgs/giphy3.webp');
        background-size: cover;
        background-position: center;
        color: transparent;
        -moz-background-clip: text;
        -webkit-background-clip: text;
        text-transform: uppercase;
        font-size: 50px;
        margin: 10px 0;
        font-weight: 900;`;
    let rffEfeitoBGText4 = `background-image: url('${POSTS_RFF_DIR_EDITOR}imgs/giphy4.webp');
        background-size: cover;
        background-position: center;
        color: transparent;
        -moz-background-clip: text;
        -webkit-background-clip: text;
        text-transform: uppercase;
        font-size: 50px;
        margin: 10px 0;
        font-weight: 900;`;
    let rffEfeitoBGText5 = `background-image: url('${POSTS_RFF_DIR_EDITOR}imgs/giphy5.webp');
        background-size: cover;
        background-position: center;
        color: transparent;
        -moz-background-clip: text;
        -webkit-background-clip: text;
        text-transform: uppercase;
        font-size: 50px;
        margin: 10px 0;
        font-weight: 900;`;
    let rffEfeitoBGText6 = `background-image: url('${POSTS_RFF_DIR_EDITOR}imgs/giphy6.webp');
        background-size: cover;
        background-position: center;
        color: transparent;
        -moz-background-clip: text;
        -webkit-background-clip: text;
        text-transform: uppercase;
        font-size: 50px;
        margin: 10px 0;
        font-weight: 900;`;
    let rffEfeitoBGText7 = `background-image: url('${POSTS_RFF_DIR_EDITOR}imgs/giphy7.webp');
        background-size: cover;
        background-position: center;
        color: transparent;
        -moz-background-clip: text;
        -webkit-background-clip: text;
        text-transform: uppercase;
        font-size: 50px;
        margin: 10px 0;
        font-weight: 900;`;
    let rffEfeitoBGText8 = `background-image: url('${POSTS_RFF_DIR_EDITOR}imgs/giphy8.webp');
        background-size: cover;
        background-position: center;
        color: transparent;
        -moz-background-clip: text;
        -webkit-background-clip: text;
        text-transform: uppercase;
        font-size: 50px;
        margin: 10px 0;
        font-weight: 900;`;
    let rffEfeitoBGText9 = `background-image: url('${POSTS_RFF_DIR_EDITOR}imgs/giphy9.webp');
        background-size: cover;
        background-position: center;
        color: transparent;
        -moz-background-clip: text;
        -webkit-background-clip: text;
        text-transform: uppercase;
        font-size: 50px;
        margin: 10px 0;
        font-weight: 900;`;
    let rffEfeitoBGText10 = `background-image: url('${POSTS_RFF_DIR_EDITOR}imgs/giphy10.webp');
        background-size: cover;
        background-position: center;
        color: transparent;
        -moz-background-clip: text;
        -webkit-background-clip: text;
        text-transform: uppercase;
        font-size: 50px;
        margin: 10px 0;
        font-weight: 900;`;
    let rffEfeitoBGText11 = `background-image: url('${POSTS_RFF_DIR_EDITOR}imgs/giphy11.webp');
        background-size: cover;
        background-position: center;
        color: transparent;
        -moz-background-clip: text;
        -webkit-background-clip: text;
        text-transform: uppercase;
        font-size: 50px;
        margin: 10px 0;
        font-weight: 900;`;
    let rffEfeitoBGText12 = `background-image: url('${POSTS_RFF_DIR_EDITOR}imgs/giphy12.webp');
        background-size: cover;
        background-position: center;
        color: transparent;
        -moz-background-clip: text;
        -webkit-background-clip: text;
        text-transform: uppercase;
        font-size: 50px;
        margin: 10px 0;
        font-weight: 900;`;
    let rffEfeitoBGText13 = `background-image: url('${POSTS_RFF_DIR_EDITOR}imgs/giphy13.webp');
        background-size: cover;
        background-position: center;
        color: transparent;
        -moz-background-clip: text;
        -webkit-background-clip: text;
        text-transform: uppercase;
        font-size: 50px;
        margin: 10px 0;
        font-weight: 900;`;
    let rffEfeitoBGText14 = `background-image: url('${POSTS_RFF_DIR_EDITOR}imgs/giphy14.webp');
        background-size: cover;
        background-position: center;
        color: transparent;
        -moz-background-clip: text;
        -webkit-background-clip: text;
        text-transform: uppercase;
        font-size: 50px;
        margin: 10px 0;
        font-weight: 900;`;
    let rffEfeitoBGText15 = `background-image: url('${POSTS_RFF_DIR_EDITOR}imgs/giphy15.webp');
        background-size: cover;
        background-position: center;
        color: transparent;
        -moz-background-clip: text;
        -webkit-background-clip: text;
        text-transform: uppercase;
        font-size: 50px;
        margin: 10px 0;
        font-weight: 900;`;
    let rffEfeitoBGText16 = `
        background-image: url('${POSTS_RFF_DIR_EDITOR}imgs/bkVertical.png');
        background-size: cover;
        -webkit-text-fill-color: transparent;
        -webkit-animation: aitf16 20s linear infinite;
        -webkit-transform: translate3d(0,0,0);
        -webkit-backface-visibility: hidden;
        background-position: center;
        color: transparent;
        -moz-background-clip: text;
        -webkit-background-clip: text;
        text-transform: uppercase;
        font-size: 50px;
        margin: 10px 0;
        font-weight: 900;`;
    let rffEfeitoBGText17 = `background-image: url('${POSTS_RFF_DIR_EDITOR}imgs/bk.png');
        background-size: cover;
        -webkit-text-fill-color: transparent;
        -webkit-animation: aitf 35s linear infinite;
        -webkit-transform: translate3d(0,0,0);
        -webkit-backface-visibility: hidden;
        background-position: center;
        color: transparent;
        -moz-background-clip: text;
        -webkit-background-clip: text;
        text-transform: uppercase;
        font-size: 50px;
        margin: 10px 0;
        font-weight: 900;
        border-image: 1px solid #ddd;`;

    let rffEfeitoBGText18 = `-webkit-animation: aitf18 2s linear infinite;
        animation: aitf18 2s linear infinite;
        font-size: 50px;
        margin: 10px 0;
        font-weight: 900;
        border-image: 1px solid #ddd;
        color: rgb(21, 206, 77);
        font-family: 'JosefinSans-VariableFont_wght';`;

    let rffEfeitoBGText19 = `-webkit-animation: aitf19 2s linear infinite;
        animation: aitf19 2s linear infinite;
        font-size: 50px;
        margin: 10px 0;
        font-weight: 900;
        border-image: 1px solid #ddd;
        color: white;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: blue;
        font-family: 'VarelaRound-Regular';`;
    let cite = `margin: 1em 1px 1em 25px;
        background-color: #dfdfdf;
        border-left: 3px solid green;
        padding: 25px 20px;
        margin: 1em 1px 1em 25px;
        overflow: hidden;
        position: relative;
        display: inline-block;
    `
    let obj={};
    obj['rffTextShadow'] = rffTextShadow;
    obj['rffNeonText'] = rffNeonText;
    obj['rffNeonTextEColorWhite'] = rffNeonTextEColorWhite;
    obj['rffText3D'] = rffText3D;
    obj['rffText3DSimples'] = rffText3DSimples;
    obj['rffText3DExtreme'] = rffText3DExtreme;
    obj['rffTextDegrade'] = rffTextDegrade;
    obj['rffEfeitoBGText'] = rffEfeitoBGText;
    obj['rffEfeitoBGText2'] = rffEfeitoBGText2;
    obj['rffEfeitoBGText3'] = rffEfeitoBGText3;
    obj['rffEfeitoBGText4'] = rffEfeitoBGText4;
    obj['rffEfeitoBGText5'] = rffEfeitoBGText5;
    obj['rffEfeitoBGText6'] = rffEfeitoBGText6;
    obj['rffEfeitoBGText7'] = rffEfeitoBGText7;
    obj['rffEfeitoBGText8'] = rffEfeitoBGText8;
    obj['rffEfeitoBGText9'] = rffEfeitoBGText9;
    obj['rffEfeitoBGText10'] = rffEfeitoBGText10;
    obj['rffEfeitoBGText11'] = rffEfeitoBGText11;
    obj['rffEfeitoBGText12'] = rffEfeitoBGText12;
    obj['rffEfeitoBGText13'] = rffEfeitoBGText13;
    obj['rffEfeitoBGText14'] = rffEfeitoBGText14;
    obj['rffEfeitoBGText15'] = rffEfeitoBGText15;
    obj['rffEfeitoBGText16'] = rffEfeitoBGText16;
    obj['rffEfeitoBGText17'] = rffEfeitoBGText17;
    obj['rffEfeitoBGText18'] = rffEfeitoBGText18;
    obj['rffEfeitoBGText19'] = rffEfeitoBGText19;
    obj['cite'] = cite;
    return obj[value];
}

function CssFnctn() {
    saveState();
    document.execCommand('formatblock', false, 'h1')
    var listId = window.getSelection().anchorNode.parentNode;
    listId.classList = 'oder2';
    saveState();
}


function insertH(valor) {
    saveState();
    selection = window.getSelection().toString();
    // console.log(selection)
    wrappedselection = '<'+valor+'>' + selection + '</'+valor+'>';
    //var img = new Image();
    document.execCommand('insertHTML', false, wrappedselection);
    saveState();
}





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/********************************* Cria e edita tabela INICIO ***************************************************/


/////////////////////////////////////////////////////////
/************ Cria a tabela e o menu junto *************/
/////////////////////////////////////////////////////////

function insertTable() {
    let isInDivTexto = verifyIfIsIntoDivTexto();
    if(isInDivTexto==false){
      alert('Clique na caixa de texto antes de usar esse recurso');
        return;
    }
    updateDirEditor();
    console.log(POSTS_RFF_DIR_EDITOR+"windowInsertTable.php")
    window.open(POSTS_RFF_DIR_EDITOR+"windowInsertTable.php", 'janela', 'height=350, width=500, top=50, left=100, scrollbar=no, fullscreen=no');
}

var styleFirstColumn = 'width: 10px !important; background-color: #cdcdcd; resize: vertical !important; overflow: auto; box-sizing: border-box;';


function insertTableNovo(numRow, numCol) {
    saveState();
    updateDirEditor();
    let range = window.getSelection().getRangeAt(0);
    selection = window.getSelection().toString();
    let divPai = document.createElement('div');
    divPai.setAttribute('contenteditable', 'false');
    divPai.setAttribute('spellcheck', 'false');
    divPai.setAttribute('class', 'tabelaObj');
    var table ='<div class="configTable" contenteditable="false" spellcheck="false">'
    // table+='<button id="testeSel" onclick="merge(\'row\', \'add\')"><img src="rffeditor/imgEditor/mesclar-celula.svg" width="50" title="Opções de mesclagem"></button>';
    table+='<ul id="menuTable">';
    table+='<li><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/mesclar-celula.svg" height="40" title="Opções de mesclagem">';
    table+='<ul>';
    table+='<li><button id="testeSel" onclick="merge(\'row\', \'add\')"><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/mesclar-lado.svg" height="40" title="Mesclar célula a direita"></button></li>';
    table+='<li><button id="testeSel" onclick="merge(\'column\', \'add\')"><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/mesclar-abaixo.svg" height="40" title="Mesclar célula abaixo"></button></li>';
    table+='<li><button id="testeSel" onclick="merge(\'row\', \'remove\')"><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/mesclar-remover-lado.svg" height="40" title="Remove mesclagem a direita"></button></li>';
    table+='<li><button id="testeSel" onclick="merge(\'column\', \'remove\')"><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/mesclar-remover-abaixo.svg" height="40" title="Remover mesclagem abaixo"></button></li>';
    table+='</ul>';
    table+='</li>';

    table+='<li><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/configRow.svg" height="40" title="Configuração de linha">';
    table+='<ul>';
    table+='<li><button id="testeSel" onclick="insertTrAfter()"><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/inserttableRowAfter.svg" height="40" title="Inserir linha depois"></li>';
    table+='<li><button id="testeSel" onclick="insertTrBefore()"><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/inserttableRowBefore.svg" height="40" title="Inserir linha antes"></li>';
    table+='<li><button id="testeSel" onclick="delTr()"><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/deleteTableRowAfter.svg" height="40" title="Apagar linha"></li>';
    // table+='<li><button id="testeSel" onclick="insertTrAfter()">Inserir linha depois</button></li>';
    // table+='<li><button id="testeSel" onclick="insertTrBefore()">Inserir linha antes</button></li>';
    // table+='<li><button id="testeSel" onclick="delTr()">Apagar linha</button></li>';
    table+='</ul>';
    table+='</li>';

    table+='<li><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/configColumn.svg" height="40" title="Configuração de coluna">';
    table+='<ul>';
    table+='<li><button id="testeSel" onclick="insertTdAfter()"><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/inserttableColumnAfter.svg" height="40" title="Inserir coluna depois"></button></li>';
    table+='<li><button id="testeSel" onclick="insertTdBefore()"><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/inserttableColumnBefore.svg" height="40" title="Inserir coluna antes"></button></li>';
    table+='<li><button id="testeSel" onclick="delTd()"><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/deleteTableColumn.svg" height="40" title="Apagar coluna"></button></li>';
    table+='</ul>';
    table+='</li>';

    table+='<li><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/configCell.svg" height="40" title="Configurar célula">';
    table+='<ul>';
    // table+='<li><button id="testeSel" onclick="rotateTdSel(\'sc\')"><img src="rffeditor/imgEditor/configCell-rotate-text.svg" height="40" title="Rotacionar o texto na célula"></button></li>';
    // table+='<li><button id="testeSel" onclick="getWindowBckgroundColorTDsel()"><img src="rffeditor/imgEditor/configCell-background.svg" height="40" title="Mudar a cor da célula"></button></li>';
    // table+='<li><button id="testeSel" onclick="openConfigBorderTdSel()"><img src="rffeditor/imgEditor/configCell-border.svg" height="40" title="Configurar borda da célula"></button></li>';
    table+='<li><button id="testeSel" onclick="openConfigTdSel()"><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/configCell-prop.svg" height="40" title="Configurar propriedade da célula"></button></li>';

    table+='<li><button id="testeSel" onclick="insertCellRight()"><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/configCell-insert-after.svg" height="40" title="Inserir célula depois"></button></li>';
    table+='<li><button id="testeSel" onclick="insertCellLeft()"><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/configCell-insert-before.svg" height="40" title="Inserir célula antes"></button></li>';
    table+='<li><button id="testeSel" onclick="removeCell()"><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/configCell-delete.svg" height="40" title="Apagar célula"></button></li>';
    table+='</ul>';
    table+='</li>';

    table+='<li><button id="testeSel" onclick="openWindowConfigBackgroundTable()"><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/configTable.svg" height="40" title="Configurar tabela"></button></li>';
    table+='</ul>';
    table+='<button onclick="fecharJanTab(this)" draggable="false" droppable="false">X</button>';
    table+='</div>';
    table += '<table cellspacing="0" class="tabela" id="tabelaInserida" onkeydown="keydownTable(event, this)" onkeyup="keyupTable(event, this)">';
    for(i=0; i<=numRow; i++){
        table+='<tr contenteditable="false" spellcheck="false">';
        // table+='<tr contenteditable="false" spellcheck="false">';
        if(i==0){
            for(j=0;j<=numCol;j++){
                if(j==0){
                    table+='<td style="" contenteditable="false" spellcheck="false" id="tableTdInicialPoint"></td>';
                }else{
                    table+='<td contenteditable="false" spellcheck="false" id="tableTdInicialLarg" style=""></td>';
                }
            }
        }else{
            for(j=0;j<=numCol;j++){
                if(j==0){
                    // table+='<td style="'+styleFirstColumn+'" contenteditable="false" spellcheck="false" id="tableTdInicialSmall"></td>';
                    table+='<td contenteditable="false" spellcheck="false" id="tableTdInicialSmall"></td>';
                }else{
                    table+='<td style="" contenteditable="true" spellcheck="true" onclick="actionClickTd(this)" class="">&nbsp;</td>';
                    // table+='<td contenteditable="true" spellcheck="true">&nbsp;</td>';
                }
            }
        }
        table+='</tr>';
    }
    table+='</table>';
    divPai.innerHTML=table;
    range.insertNode(divPai);
    saveState();
}




////////////////////////////////
/******* Inserir linha ********/
///////////////////////////////

function insertTrAfter() {
    saveState();
    var selecao = verifyGetTD();
    // console.log(selecao.nodeName+"------------")
    if(selecao.nodeName=='TD'){
        var tbody = selecao.parentNode.parentNode;
        let tr = selecao.parentNode;
        let obj = document.createElement('tr');
        obj.setAttribute('contenteditable', 'false');
        obj.setAttribute('spellcheck', 'false');
        var tds = '';

        let rowspan = selecao.getAttribute('rowspan');
        // console.log('Quantidade de linhas: '+rowspan)
        let r = 0;
        if(rowspan != null && rowspan!=0){
            let j = parseInt(rowspan, 10)+1;
            selecao.setAttribute('rowspan', j)
            r=j-2;
        }

        for(let i=0;i<tr.children.length;i++){
            if(i==0){
                // tds+='<td style="'+styleFirstColumn+'" contenteditable="false" spellcheck="false" id="tableTdInicialSmall"></td>';
                tds+='<td contenteditable="false" spellcheck="false" id="tableTdInicialSmall"></td>';
            }else if(i<=r){
                r=0;
                continue;
            }else{
                tds+='<td contenteditable="true" spellcheck="true" onclick="actionClickTd(this)">&nbsp;</td>';
            }
            
        }
        obj.innerHTML = tds
        tbody.insertBefore(obj, tr.nextElementSibling);
        // console.log('Deu certo')
    }
    saveState();
}

function insertTrBefore() {
    saveState();
    var selecao = verifyGetTD();
    // console.log(selecao.nodeName+"------------")
    if(selecao.nodeName=='TD'){
        var tbody = selecao.parentNode.parentNode;
        let tr = selecao.parentNode;
        let obj = document.createElement('tr');
        obj.setAttribute('contenteditable', 'false');
        obj.setAttribute('spellcheck', 'false');
        var tds = '';

        for(let i=0;i<tr.children.length;i++){
            if(i==0){
                // tds+='<td style="'+styleFirstColumn+'" contenteditable="false" spellcheck="false" id="tableTdInicialSmall"></td>';
                tds+='<td contenteditable="false" spellcheck="false" id="tableTdInicialSmall"></td>';
            }else{
                tds+='<td contenteditable="true" spellcheck="true" onclick="actionClickTd(this)">&nbsp;</td>';
            }
        }
        obj.innerHTML = tds
        tbody.insertBefore(obj, tr);
        // console.log('Deu certo')
    
    }
    saveState();
}




/////////////////////////////////
/******* Inserir coluna ********/
////////////////////////////////

function insertTdBefore() {
    saveState();
    var selecao = verifyGetTD();
    if(selecao.nodeName=='TD'){
        var tbody = selecao.parentNode.parentNode;
        let tr = selecao.parentNode;
        // console.log(',,,,,,,,,,,,,'+tbody.children[0].children.length)
        let conta = 0;
        let n = selecao.previousElementSibling
        for(let j=0; j<tbody.children[0].children.length; j++){
            if(n!=null){
                conta++;
                // console.log(conta)
            }else{
                break;
            }
            n = n.previousElementSibling
        }
        // console.log('o numero da celula é: '+conta)
        let obj = [];
        for(let i=0;i<tbody.children.length;i++){
            let tdnew = document.createElement('td')
            if(i==0){
                tdnew.setAttribute('id', 'tableTdInicialLarg');
            }else{
                tdnew.setAttribute('contenteditable', 'true');
                tdnew.setAttribute('spellcheck', 'true');
                tdnew.setAttribute('onclick', 'actionClickTd(this)');
                tdnew.innerHTML='&nbsp;'
            }
            obj.push(tdnew)
        }
        for(let i=0;i<tbody.children.length;i++){
            // console.log(tbody.children[i].children[conta])
            tbody.children[i].insertBefore(obj[i], tbody.children[i].children[conta])
        }
        // console.log('Deu certo')
    }
    saveState();
}

function insertTdAfter() {
    saveState();
    var selecao = verifyGetTD();
    if(selecao.nodeName=='TD'){
        var tbody = selecao.parentNode.parentNode;
        let tr = selecao.parentNode;
        // console.log(',,,,,,,,,,,,,'+tbody.children[0].children.length)
        let conta = 1;
        let n = selecao.previousElementSibling
        for(let j=0; j<tbody.children[0].children.length; j++){
            if(n!=null){
                conta++;
                // console.log(conta)
            }else{
                break;
            }
            n = n.previousElementSibling
        }
        // console.log('o numero da celula é: '+conta)
        let obj = [];
        for(let i=0;i<tbody.children.length;i++){
            let tdnew = document.createElement('td')
            if(i==0){
                tdnew.setAttribute('id', 'tableTdInicialLarg')
            }else{
                tdnew.setAttribute('contenteditable', 'true')
                tdnew.setAttribute('spellcheck', 'true')
                tdnew.setAttribute('onclick', 'actionClickTd(this)');
                tdnew.innerHTML='&nbsp;'
            }
            obj.push(tdnew)
        }
        for(let i=0;i<tbody.children.length;i++){
            // console.log(tbody.children[i].children[conta])
            tbody.children[i].insertBefore(obj[i], tbody.children[i].children[conta])
        }
        // console.log('Deu certo')
    }
    saveState();
}


//////////////////////////////////////
/******* Inserir célula ********/
/////////////////////////////////////

function insertCellLeft(){
    saveState();
    let td = verifyGetTD();
    if(td!=null){
        let tr = td.parentNode;
        let tdnew = document.createElement('td')
        tdnew.setAttribute('contenteditable', 'true')
        tdnew.setAttribute('spellcheck', 'true')
        tdnew.setAttribute('onclick', 'actionClickTd(this)');
        tdnew.innerHTML='&nbsp;'
        tr.insertBefore(tdnew, tr.children[(getPositionTD(td)-1)]);
    }
    saveState();
}

function insertCellRight(){
    saveState();
    let td = verifyGetTD();
    if(td!=null){
        let tr = td.parentNode;
        let tdnew = document.createElement('td')
        tdnew.setAttribute('contenteditable', 'true')
        tdnew.setAttribute('spellcheck', 'true')
        tdnew.setAttribute('onclick', 'actionClickTd(this)');
        tdnew.innerHTML='&nbsp;'
        tr.insertBefore(tdnew, tr.children[getPositionTD(td)]);
    }
    saveState();
}

function removeCell(){
    saveState();
    let td = verifyGetTD();
    if(td!=null){
        let tr = td.parentNode;
        let tbody = tr.parentNode;
        let posTD = getPositionTD(td)-1;
        let posTr = getPositionTr(tr);
        // console.log('Remove celular '+posTD)
        if(posTr>0){
            if(posTD>0 && tr.children.length>2){
                tr.removeChild(td);
            }else{
                if(tr.children.length<=2){
                    tbody.removeChild(tr);
                }
            }
            // console.log('Número de celulas na tr: '+tr.children.length)
        }
    }
    saveState();
}



function verifyGetTD(){
    let td = window.getSelection().getRangeAt(0).startContainer;
    for(let i=0; i<15; i++){
        if(td.nodeName=='TD'){
            return td;
        }else if(td.nodeName=='DIV'){
            return null;
        }else{
            td=td.parentNode;
        }
    }
}


//////////////////////////////////////
/******* Mesclagem de célula ********/
/////////////////////////////////////

function merge(tipo, type){
    saveState();
    var selecao = verifyGetTD();
    // console.log(selecao.nodeName);
    // selecao = selecao.parentNode;
    if(selecao.nodeName=='TD'){
        // console.log('entrou no primeiro '+selecao.nodeName)
        if(type=='add'){
            mergeType(tipo, selecao)
        }else{
            unMergeType(tipo, selecao)
        }
    }
    saveState();
}

function mergeType(tipo, td){
    if(tipo=='column'){
        let tr = td.parentNode;
        let tbody = tr.parentNode;
        var conta = getPositionTr(tr);
        let contaTd = getPositionTD(td)-1;
        let colspan = td.getAttribute('colspan');
        let rowspan = td.getAttribute('rowspan');
        if(rowspan!=null && rowspan!=0){
            conta=conta+(rowspan-1);
        }
        if(tbody.children[(conta+1)]!=null){
            // console.log(rowspan+'------')
            if(rowspan!=null && rowspan!=0){
                rowspan = parseInt(rowspan, 10)+1;
                // console.log('***************'+rowspan)
                td.setAttribute('rowspan', rowspan)
            }else{
                td.setAttribute('rowspan', 2)
            }
            if(colspan!=null && colspan != 0){
                conta = conta+1;
                for(let j=0; j<colspan; j++){
                    contaTd=contaTd++;
                    tbody.children[conta].removeChild(tbody.children[conta].children[contaTd]);
                }
            }else{
                tbody.children[(conta+1)].removeChild(tbody.children[(conta+1)].children[contaTd]);
            }
            // console.log(tbody.children[(conta)].children[contaTd])
            // console.log('+++++++++++++++++++++++++')
            // tbody.children[(conta+1)].removeChild(tbody.children[(conta+1)].children[contaTd]);
            // console.log(tbody.children[(conta)].children[contaTd])
        }
    }else if(tipo=='row'){
        let tr = td.parentNode;
        // let tdPrev = td.previousElementSibling;
        // let conta=0;
        // // console.log(tr)
        // // console.log(tdPrev+' anterior')
        // for(let i=0; i<tr.children.length; i++){
        //     if(tdPrev!=null){
        //         conta++;
        //     }else{
        //         break;
        //     }
        //     tdPrev = tdPrev.previousElementSibling;
        // }
        let conta = getPositionTD(td);
        // console.log(conta+' posição ******************************************')
        if(tr.children[(conta)]!=null){
            let colspan = td.getAttribute('colspan');
            let rowspan = td.getAttribute('rowspan');
            // let tdNext = tr.children[(conta+1)].getAttribute('colspan');
            let tdNext = tr.children[(conta)].getAttribute('colspan');
            let tbody = tr.parentNode;
            let posTr = getPositionTr(tr);
            let posTd = getPositionTD(td)-1;
            if(colspan!=null && colspan!=''){
                colspan++;
                // console.log(colspan)
            }else{
                colspan = 2;
            }
            if(tdNext!=null && tdNext!=''){
                for(let j=1; j<tdNext; j++){
                    colspan++;
                }
            }
            td.setAttribute('colspan', colspan)
            if(rowspan!=null && rowspan!=0){
                if(rowspan>2){
                    for(let r=0; r<rowspan; r++){
                        if(r<1){
                            tbody.children[posTr+r].removeChild(tbody.children[posTr+r].children[(conta+r)]);
                        }else if(r<2){
                            tbody.children[posTr+r].removeChild(tbody.children[posTr+r].children[(conta-r)]);
                        }else{
                            // console.log(tbody.children[posTr+r].children[(conta)])
                            // console.log(conta)
                            tbody.children[posTr+r].removeChild(tbody.children[posTr+r].children[0]);
                        }
                    }
                }else{
                    tbody.children[posTr].removeChild(tbody.children[posTr].children[conta]);
                    tbody.children[posTr+(rowspan-1)].removeChild(tbody.children[posTr+(rowspan-1)].children[conta]);
                }
            }else{
                tr.removeChild(tr.children[conta]); // alterado
            }
        }else{
            // console.log('Não existem td depois do atual')
        }
        
    }
}

function unMergeType(tipo, td){
    if(tipo=='column'){
        let colspan = td.getAttribute('colspan');
        let rowspan = td.getAttribute('rowspan');
        if(rowspan!=null && rowspan!=0){
            let tr = td.parentNode;
            let tbody = tr.parentNode;
            let positTr = getPositionTr(tr);
            let positTd = getPositionTD(td)-1;
            let newTD = document.createElement('td');
            newTD.setAttribute('contenteditable', 'true')
            newTD.setAttribute('spellcheck', 'true')
            newTD.setAttribute('onclick', 'actionClickTd(this)');
            newTD.innerHTML='&nbsp;'
            if(rowspan>2){
                let newRowSpan = rowspan-1;
                td.setAttribute('rowspan', newRowSpan);
                if(colspan!=null && colspan!=0){
                    if(colspan>2){
                        for(let k=0; k<colspan; k++){
                            tbody.children[(positTr+(rowspan-1))].insertBefore(newTD.cloneNode(true), tbody.children[(positTr+(rowspan-1))].children[(positTd+k)]);
                        }
                    }else{
                        tbody.children[(positTr+(rowspan-1))].insertBefore(newTD.cloneNode(true), tbody.children[(positTr+(rowspan-1))].children[positTd]);
                        tbody.children[(positTr+(rowspan-1))].insertBefore(newTD.cloneNode(true), tbody.children[(positTr+(rowspan-1))].children[(positTd+1)]);
                    }
                }else{
                    tbody.children[(positTr+(rowspan-1))].insertBefore(newTD.cloneNode(true), tbody.children[(positTr+(rowspan-1))].children[positTd]);
                }
            }else{
                td.removeAttribute('rowspan');
                if(colspan!=null && colspan!=0){
                    if(colspan>2){
                        for(let k=0; k<colspan; k++){
                            tbody.children[(positTr+1)].insertBefore(newTD.cloneNode(true), tbody.children[(positTr+1)].children[(positTd+k)]);
                        }
                    }else{
                        tbody.children[(positTr+1)].insertBefore(newTD.cloneNode(true), tbody.children[(positTr+1)].children[positTd]);
                        tbody.children[(positTr+1)].insertBefore(newTD.cloneNode(true), tbody.children[(positTr+1)].children[(positTd+1)]);
                    }
                }else{
                    tbody.children[(positTr+1)].insertBefore(newTD.cloneNode(true), tbody.children[(positTr+1)].children[positTd]);
                }
            }
            
        }
        
    }else if(tipo=='row'){
        let colspan = td.getAttribute('colspan');
        let rowspan = td.getAttribute('rowspan');
        // console.log('---> '+colspan)
        if(colspan!=null && colspan!=''){
            let newColSpan=0;
            if(colspan>2){
                newColSpan = colspan-1;
                td.setAttribute('colspan', newColSpan);
            }else{
                td.removeAttribute('colspan');
            }
            // let tdNew = document.createElement('td')
            // let tr = td.parentNode;
            // tr.insertBefore(tdNew, tr.children[getPositionTD(td)]);

            let tdNew = document.createElement('td')
            tdNew.setAttribute('contenteditable', 'true')
            tdNew.setAttribute('spellcheck', 'true')
            tdNew.setAttribute('onclick', 'actionClickTd(this)');
            tdNew.innerHTML = '&nbsp;'
            // let tdNew2 = document.createElement('td')
            let tr = td.parentNode;
            if(rowspan!=null && rowspan!=0){
                let tbody = tr.parentNode;
                let positionTr = getPositionTr(tr);
                if(rowspan>2){
                    for(let p = 0; p<rowspan; p++){
                        // console.log(getPositionTD(td)-p)
                        if(p<2){
                            tbody.children[(positionTr+p)].insertBefore(tdNew.cloneNode(true), tbody.children[(positionTr+p)].children[(getPositionTD(td)-p)]);
                        }else{
                            tbody.children[(positionTr+p)].insertBefore(tdNew.cloneNode(true), tbody.children[(positionTr+p)].children[(getPositionTD(td)-1)]);
                        }
                    }
                }else{
                    tbody.children[positionTr].insertBefore(tdNew.cloneNode(true), tbody.children[positionTr].children[getPositionTD(td)]);
                    tbody.children[(positionTr+1)].insertBefore(tdNew.cloneNode(true), tbody.children[(positionTr+1)].children[(getPositionTD(td)-1)]);
                }
            }else{
                tr.insertBefore(tdNew, tr.children[getPositionTD(td)]);
            }
        }
    }
}


function getNumMaxTDs(tbody){
    //Pega a quantidade padrão de TDs nas TRs (o numero máximo de tds)
    let numTdsPadrao = 0;
    for(let j=0; j<tbody.children.length; j++){
        // console.log('Numero de tds: '+tbody.children[j].children.length)
        if(tbody.children[j].children.length>numTdsPadrao){
            numTdsPadrao = tbody.children[j].children.length;
        }
    }
    // console.log('QUantidade de TDs padrão: '+numTdsPadrao)
    return numTdsPadrao;
}




////////////////////////////////////////////////
/******* Pegar a posição do TR e do TD ********/
///////////////////////////////////////////////

function getPositionTD(td){
    let tr = td.parentNode;
    let tdPrev = td.previousElementSibling;
    let conta=0;
    // console.log(tr)
    // console.log(tdPrev+' anterior')
    for(let i=0; i<tr.children.length; i++){
        if(tdPrev!=null){
            conta++;
        }else{
            break;
        }
        tdPrev = tdPrev.previousElementSibling;
    }
    return ++conta;
}

function getPositionTr(tr){
    let tbody = tr.parentNode;
    let trPrev = tr.previousElementSibling;
    let conta =0;
    for(let i=0; i<tbody.children.length; i++){
        if(trPrev!=null){
            conta++;
        }else{
            break;
        }
        trPrev = trPrev.previousElementSibling;
    }
    return conta;
}



//////////////////////////
/******* Excluir ********/
//////////////////////////


function delTr() {
    saveState();
    var selecao = verifyGetTD();
    // console.log(selecao.nodeName+"------------")
    if(selecao.nodeName=='TD'){
        var tbody = selecao.parentNode.parentNode;
        let tr = selecao.parentNode;
        tbody.removeChild(tr)
    }
    saveState();
}

function delTd() {
    saveState();
    var selecao = verifyGetTD();
    if(selecao.nodeName=='TD'){
        var tbody = selecao.parentNode.parentNode;
        let tr = selecao.parentNode;
        // console.log(',,,,,,,,,,,,,'+tbody.children[0].children.length)
        let conta = 0;
        let n = selecao.previousElementSibling
        for(let j=0; j<tbody.children[0].children.length; j++){
            if(n!=null){
                conta++;
                // console.log(conta)
            }else{
                break;
            }
            n = n.previousElementSibling
        }
        // console.log('o numero da celula é: '+conta)
        for(let i=0;i<tbody.children.length;i++){
            // console.log(tbody.children[i].children[conta])
            tbody.children[i].removeChild(tbody.children[i].children[conta])
        }
        // console.log('Deu certo')
    }
    saveState();
}




/////////////////////////////////////
/******* Selecionar células ********/
/////////////////////////////////////
var tdSel = [];
var ctrlActive = false;

// function actionClickTd(elem){
//     // console.log("ctrlActive = "+ctrlActive)
//     // console.log(tdSel)
//     if(ctrlActive==true){
//         tdSel.push(elem)
//         console.log('célula selecionada: '+elem.cellIndex)
//         elem.classList.add('selectedCel')
//         // console.log(elem)
//     }else{
//         removeSelectedCel();
//     }
// }


function actionClickTd(elem){
    // console.log("ctrlActive = "+ctrlActive)
    // console.log(tdSel)
    if(ctrlActive==true){
        let igual = false;
        let posi = 0;
        for(let i=0; i<tdSel.length; i++){
            if(tdSel[i]==elem){
                igual=true;
                posi = tdSel.indexOf(elem);
            }
            // console.log(tdSel[i])
        }
        if(igual==true){
            tdSel.splice(posi, 1);
            elem.classList.remove('selectedCel');
        }else{
            tdSel.push(elem)
            // console.log('célula selecionada: '+elem.cellIndex);
            elem.classList.add('selectedCel');
        }
        // console.log(elem)
    }else{
        removeSelectedCel();
    }
}

function keydownTable(event, elem){
    if(event.keyCode==17){
        // console.log(event.keyCode)
        // removeSelectedCel();
        // tdSel=[];
        ctrlActive=true;
        // elem.addEventListener('click', function (e){
        //     console.log(e)
        // })
    }
}

function keyupTable(event, elem){
    if(event.keyCode==17){
        ctrlActive=false;
        // console.log(tdSel)
    }
}

function removeSelectedCel(){
    // console.log('selecionados: '+tdSel.length)
    for(let i=0; i<tdSel.length; i++){
        // console.log(tdSel[i])
        tdSel[i].classList.remove('selectedCel')
    }
    tdSel=[];
}





function selectElementMoveMouse(elem){
    // console.log("ctrlActive = "+ctrlActive)
    // console.log(tdSel)
    if(ctrlActive==true){
        let igual = false;
        let posi = 0;
        for(let i=0; i<tdSel.length; i++){
            if(tdSel[i]==elem){
                igual=true;
                posi = tdSel.indexOf(elem);
            }
            // console.log(tdSel[i])
        }
        if(igual==true){
            // tdSel.splice(posi, 1);
            // elem.classList.remove('selectedCel');
        }else{
            tdSel.push(elem)
            // console.log('célula selecionada: '+elem.cellIndex);
            elem.classList.add('selectedCel');
        }
        // console.log(elem)
    }else{
        removeSelectedCel();
    }
}

function verifyElementFocus(){
    let elem = verifyGetTD();
    if(elem!=null){
        let tr = elem.parentNode;
        let tbody = tr.parentNode;
        //É uma tabela
        let listenerMov = function(event){
            // console.log(event.toElement)
            // ctrlActive=true;
            selectElementMoveMouse(event.toElement)
        }
        tbody.addEventListener('mousedown', function(event){
            // console.log(tags)
            tbody.addEventListener('mousemove', listenerMov, false);
        })
        tbody.addEventListener('mouseup', function(){
            // ctrlActive=false;
            tbody.removeEventListener('mousemove', listenerMov, false)
        })
    }else{
        //Não é uma tabela
    }
}



///////////////////////////////////////////////////////////////
/**************** Configurações de célula ********************/
///////////////////////////////////////////////////////////////


function getWindowBckgroundColorTDsel(){
    updateDirEditor();
    window.open(POSTS_RFF_DIR_EDITOR+"windowColorBackGroundTD.php", 'janela', 'height=350, width=500, top=50, left=100, scrollbar=no, fullscreen=no');
}

function backGroundColorTdSel(cor){
    if(tdSel.length>0){
        saveState();
        for(let i=0; i<tdSel.length; i++){
            // console.log(cor)
            if(cor=='limpar'){
                tdSel[i].style.backgroundColor=null;
            }else{
                // tdSel[i].style.backgroundColor='#'+cor;
                tdSel[i].style.backgroundColor=cor;
            }
        }
        saveState();
    }
}

function openConfigTdSel(){
    updateDirEditor();
    if(tdSel.length>0){
        let style = tdSel[0].getAttribute('style');
        localStorage.setItem('style', style);
        window.open(POSTS_RFF_DIR_EDITOR+'windowConfigBorderCell.php', 'janela', 'height=350, width=500, top=50, left=100, scrollbar=no, fullscreen=no');
    }else{
        alert('Nenhuma célula selecionada! Para selecionar uma célula, segure a tecla CTRL e clique em cima da célula, com isso aparecerá uma cor de seleção nela!')
    }
}

function configBorderTdSel(config){
    if(tdSel.length>0){
        saveState();
        for(let i=0; i<tdSel.length; i++){
            // console.log(config)
            if(config=='limpar'){
                tdSel[i].style.border=null;
            }else{
                // tdSel[i].style.border='3px solid red';
                tdSel[i].style.border=config;
            }
        }
        saveState();
    }
}

function configPaddingTdSel(config){
    if(tdSel.length>0){
        saveState();
        for(let i=0; i<tdSel.length; i++){
            if(config=='limpar'){
                tdSel[i].style.padding = null;
            }else{
                tdSel[i].style.padding = config+'px';
            }
        }
        saveState();
    }
}

function rotateTdSel(config){
    if(tdSel.length>0){
        saveState();
        for(let i=0; i<tdSel.length; i++){
            // console.log(tdSel[i].children[0])
            if(config=='limpar'){
                tdSel[i].style.writingMode=null;
                tdSel[i].style.textOrientation=null;
            }else{
                tdSel[i].style.writingMode='vertical-rl';
                tdSel[i].style.textOrientation='upright';
                // tdSel[i].style.transform='rotate(90deg)';
            }
        }
        saveState();
    }
}

function configBorderTable(border){
    let table = verifyGetNode('TABLE');
    if(table!=null){
        saveState();
        if(border=='limpar'){
            table.style.border=null;
            saveState();
        }else{
            border='2px solid red';
            table.style.border=border;
            saveState();
        }
    }
}

function configBackgroundTable(obj){
    let table = verifyGetNode('TABLE');
    if(table!=null){
        saveState();
        if(obj=='limpar'){
            table.style.background = null;
            saveState();
        }else{
            table.style.background = obj;
            let styleBack = table.getAttribute('style').replace('(\"', '(\'');
            styleBack = styleBack.replace('\")', '\')');
            styleBack = styleBack.replace('left ', 'left+');
            styleBack = styleBack.replace('top ', 'top+');
            // console.log(table.getAttribute('style'));
            // console.log(styleBack);
            table.setAttribute('style', styleBack);
            saveState();
        }
    }
}



function openWindowConfigBackgroundTable(){
    updateDirEditor();
    let table=verifyGetNode('TABLE');
    if(table!=null){
        saveState();
        // let style = table.getAttribute('style');
        // let charStyle = style.split(';');
        // for(let i=0;i<charStyle.length;i++){
        //     let propStyle = charStyle.split(':');
        //     if(propStyle[0]=='background' || propStyle[0]==' background'){
        //         localStorage.setItem('background', propStyle[1]);
        //     }
        // }
        localStorage.setItem('style', table.getAttribute('style'));
        window.open(POSTS_RFF_DIR_EDITOR+'windowConfigTable.php', 'janela', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes,height=350,width=500,top=50,left=100,fullscreen=no');

        saveState();
    }else{
        alert('Nenhuma Tabela selecionada! Clique em uma tabela para editar sua propriedade de background!')
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*************************************************** Cria e edita tabela FIM ***************************************************/



// function insertVideoOld() {
//     selection = window.getSelection().toString();
//     var table = '<iframe width="560" height="315" src="https://www.youtube.com/embed/dtLXZEuZbeQ?si=HdSO5bFrWUow5eNl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
//     var video = window.prompt("Insira no campo abaixo o iframe de incorporação do vídeo do youtube", "");
//     document.execCommand('insertHTML', false, video);
// }

function openWindowInsertVideo(){
    let isInDivTexto = verifyIfIsIntoDivTexto();
    if(isInDivTexto==false){
      alert('Clique na caixa de texto antes de usar esse recurso');
        return;
    }
    updateDirEditor();
    window.open(POSTS_RFF_DIR_EDITOR+"windowInsertVideo.php", 'janela', 'height=350, width=500, top=50, left=100, scrollbar=no, fullscreen=no');
}

// function insertVideo(codVideo, si, width, height) {
//     selection = window.getSelection().toString();
//     //var table = '<iframe width="560" height="315" src="https://www.youtube.com/embed/dtLXZEuZbeQ?si=HdSO5bFrWUow5eNl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
//     // var video = '<iframe width="'+width+'" height="'+height+'" src="https://www.youtube.com/embed/'+codVideo+'?si='+si+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
//     var video = '<div class="item" id="item" dragstart="dragStart(event)" drag="drag(event)" dragend="dragend(event)" draggable="true" droppable="false" ondragover="allowDrop2(event)" contenteditable="false">'
//     video += '<div id="tools" draggable="false" droppable="false">'
//     video += '<button onclick="editVideo(this, event)" draggable="false" droppable="false">Editar</button>'
//     // video += '<div id="arrastar" draggable="true" droppable="false" ondragover="allowDrop(event)" contenteditable="false"></div>'
//     // video += '<div id="arrastar" dragstart="dragStart(event)" drag="drag(event)" dragend="dragend(event)" draggable="true" droppable="false" contenteditable="false"></div>'
//     video += '<button onclick="fecharJanVid(this)" draggable="false" droppable="false">X</button>'
//     video += '</div>'
//     video += '<iframe width="'+width+'" height="'+height+'" src="https://www.youtube.com/embed/'+codVideo+'?si='+si+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
//     video += '</div>'
//     //var video = window.prompt("Insira no campo abaixo o iframe de incorporação do vídeo do youtube", "");
//     document.execCommand('insertHTML', false, video);
// }

function insertVideo(codVideo, si, width, height) {
    saveState();
    let range = window.getSelection().getRangeAt(0);
    let divPai = document.createElement('div');
    divPai.setAttribute('class', 'item');
    divPai.setAttribute('id', 'item');
    divPai.setAttribute('dragstart', 'dragStart(event)');
    divPai.setAttribute('drag', 'drag(event)');
    divPai.setAttribute('dragend', 'dragend(event)');
    divPai.setAttribute('draggable', 'true');
    divPai.setAttribute('droppable', 'false');
    divPai.setAttribute('ondragover', 'allowDrop2(event)');
    divPai.setAttribute('contenteditable', 'false');
    divPai.setAttribute('style', 'width:'+width+'; height:'+height+';');
    divPai.setAttribute('onmouseout', "videoOut(this)")
    divPai.addEventListener('mouseover', function(){
        videoOver(this);
    }, true);
    let mediaAndCaption = document.createElement('div');
    mediaAndCaption.setAttribute('id', 'mediaAndCaption');
    mediaAndCaption.setAttribute('draggable', 'false');
    mediaAndCaption.setAttribute('droppable', 'false');
    mediaAndCaption.setAttribute('contenteditable', 'false');
    let iframe = document.createElement('iframe');
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', 'auto');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/'+codVideo+'?si='+si+'');
    iframe.setAttribute('title', 'YouTube video player');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    iframe.setAttribute('allowfullscreen', true);
    mediaAndCaption.appendChild(iframe);
    divPai.appendChild(mediaAndCaption);
    // var video = ''
    // video += '<div id="tools" draggable="false" droppable="false">'
    // video += '<button onclick="editVideo(this, event, \'img\')" draggable="false" droppable="false">Editar</button>'
    // video += '<button onclick="fecharJanVid(this)" draggable="false" droppable="false">X</button>'
    // video += '</div>'
    // video += '<div id="mediaAndCaption" style="width:100%; height:90%;">'
    // video += '<iframe width="100%" height="90%" src="https://www.youtube.com/embed/'+codVideo+'?si='+si+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    // video += '</div>'
    // divPai.innerHTML = video;
    range.insertNode(divPai)
    saveState();
}

var controller =false;
function videoOver(div){
  controller=true;
  let tools = document.createElement('div');
  tools.setAttribute('id', 'tools');
  tools.setAttribute('draggable', 'false');
  tools.setAttribute('droppable', 'false');
  tools.setAttribute('contenteditable', 'false');
  tools.setAttribute('style', 'display:flex; position:absolute; left: 0; top:-20px; background-color: rgba(0,0,0,0.0); width:104%; cursor: default;')
  tools.addEventListener('dragstart', function (event) {
    event.preventDefault();
  })
  tools.addEventListener('mouseover', function(){
    controller=true;
  })
  tools.addEventListener('mouseout', function(){
    controller=false;
  })
  let bt1 = document.createElement('button');
  bt1.innerHTML='Editar';
  bt1.setAttribute('onclick', 'editVideo(this, event, \'img\')');
  bt1.setAttribute('draggable', 'false');
  bt1.setAttribute('droppable', 'false');
  bt1.addEventListener('dragstart', function (event) {
    event.preventDefault();
  })
  let bt2 = document.createElement('button');
  bt2.innerHTML='X';
  bt2.setAttribute('onclick', 'fecharJanVid(this)');
  bt2.setAttribute('draggable', 'false');
  bt2.setAttribute('droppable', 'false');
  bt2.addEventListener('dragstart', function (event) {
    event.preventDefault();
  })
  tools.appendChild(bt1);
  tools.appendChild(bt2);
  if(div.childNodes.length<=1){
    div.appendChild(tools)
    div.addEventListener('mouseout', function(e){
      controller=false;
      setTimeout(()=>{
        if(controller==false){
          tools.remove();
        }
      }, 1);
    })
  }
}

function videoOut(div){
  let first = div.firstElementChild;
  if(first.getAttribute('id')==='tools'){
    if(controller==false){
      first.replaceChildren();
      controller=true;
    }
  }
}


function insertEmotions(img){
    if(img != null){
        saveState();
        let range = window.getSelection().getRangeAt(0);
        var url = img.getAttribute("src");
        var width = 'auto';
        var height = '50';
        let image = document.createElement('img');
        image.setAttribute('src', url);
        image.setAttribute('width', width);
        image.setAttribute('height', height);
        image.setAttribute('src', url);
        image.setAttribute('onclick', 'openWindowEditImage(this)');
        image.setAttribute('style', 'margin-bottom: -5px;');
        range.insertNode(image);
        saveState();
    }else{
        // console.log("selecione uma imagem e Clique no botão Carregar e visualizar antes de inserir")
    }
}





function verifyGetNode(node){
    // if(node=='DIV'){
    //     return null
    // }
    let elem = window.getSelection().getRangeAt(0).startContainer;
    for(let i=0; i<15; i++){
        if(elem.nodeName==node){
            return elem;
        }else if(elem.nodeName=='DIV' && elem.getAttribute('id')=='texto'){
            return null;
        }else{
            elem=elem.parentNode;
        }
    }
}


function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  
//   alert(hexToRgb("#c2cc9e").r+' - '+hexToRgb("#c2cc9e").g+' - '+hexToRgb("#c2cc9e").b); // "51";








function fecharJanVid(elem){
    let tool = elem.parentNode;
    let jan = tool.parentNode;
    let geral = jan.parentNode;
    geral.removeChild(jan)
    document.getElementById('editVideo').setAttribute('style', 'display:none;')
}






function fecharJanTab(elem){
    let tool = elem.parentNode;
    let jan = tool.parentNode;
    let geral = jan.parentNode;
    geral.removeChild(jan)
    document.getElementById('editVideo').setAttribute('style', 'display:none;')
}




function getSetCaption(nodePai){
    saveState();
    let dvMedia = nodePai.children[0];
    if(dvMedia.getAttribute('id')!='mediaAndCaption'){
        dvMedia = nodePai.children[1];
    }
    if(dvMedia.children.length>1){
        let caption = dvMedia.children[1];
        dvMedia.removeChild(caption);
        document.getElementById('addCaption').innerHTML = 'Adicionar caption';
    }else{
        // let altura = parseInt(nodePai.style.height);
        let dvCaption = document.createElement('div');
        dvCaption.setAttribute('id', 'captionMedia');
        dvCaption.setAttribute('contenteditable', 'true');
        dvCaption.setAttribute('spellcheck', 'true');
        dvCaption.setAttribute('autocomplete', 'true');
        dvCaption.setAttribute('draggable', 'false');
        dvCaption.setAttribute('droppable', 'false');
        dvCaption.setAttribute('style', `
            cursor: default;
            z-index: 1001;
            border-radius: 0 0 10px 10px;
            border: 1px solid #cdcdcd;
            word-wrap: break-word;
            -ms-word-wrap: break-word;
            word-break: break-all;
            -ms-word-break: break-all;
            padding: 8px 10px;
            background-color: #f7f7f7;
            color: #333;
            font-style: italic;
            font-size: .75em;
            /* font-weight: bold; */
            position: absolute;
            /* min-width: 100% - 20px; */
            width: -webkit-fill-available;
            margin-top: 0px !important;
            text-align: center;
            min-height: 25px;
        `);
        // dvCaption.setAttribute('onclick', 'checkContentCaption(this)');
        dvCaption.classList.add('captionText');
        // dvCaption.style.padding = '3px 10px';
        // dvCaption.style.backgroundColor = '#f7f7f7';
        // dvCaption.style.color = '#333';
        // dvCaption.style.fontStyle = 'italic';
        // dvCaption.style.fontSize = '.75em';
        // dvCaption.style.fontWeight = 'bold';
        // dvCaption.style.position = 'absolute';
        // dvCaption.style.top = altura+'px';
        // dvCaption.style.left = '0px';
        // dvCaption.style.minHeight = '20px';
        // dvCaption.style.width = '100%-20px';
        dvCaption.setAttribute('onkeyup', 'checkContentCaption(this)');
        dvMedia.insertBefore(dvCaption, dvMedia.children[1]);
        document.getElementById('addCaption').innerHTML = 'Remover caption'
    }
    saveState();
}

function checkContentCaption(elem){
    let t = false;
    if(elem.innerHTML!=''){
        if(t==false){
            elem.classList.remove('captionText');
            t=true;
        }
    }else{
        elem.classList.add('captionText');
        t=false;
    }
}




/****** Adicionando o recurso de arrastar a janela de editar Media (editVideo) **************/
var dragMe = document.getElementById("editVideo"),
  /* o x inicial do drag*/
  dragOfX = 0,
  /* o y inicial do drag */
  dragOfY = 0;

/* ao segurar o elemento */
function dragStart1(e) {
    /* define o x inicial do drag */
    dragOfX = e.pageX - dragMe.offsetLeft;
    /* define o y inicial do drag */
    dragOfY = e.pageY - dragMe.offsetTop;
    
    /* adiciona os eventos */
    dragMe.addEventListener("mousemove", dragMove1);
    dragMe.addEventListener("mouseup", dragEnd1);
}
    
/* ao ser arrastado */
function dragMove1(e) {
    /* atualiza a posição do elemento */
    dragMe.style.left = (e.pageX - dragOfX) + 'px';
    dragMe.style.top = (e.pageY - dragOfY) + 'px';
}
    
/* ao terminar o drag */
function dragEnd1() {
    /* remove os eventos */
    // dragMe.removeEventListener("mousedown", dragStart1);
    dragMe.removeEventListener("mousemove", dragMove1);
    dragMe.removeEventListener("mouseup", dragEnd1);
}
    
/* adiciona o evento que começa o drag */
dragMe.addEventListener("mousedown", dragStart1);

function getEventDrag(dvd){
    dragMe.addEventListener("mousedown", dragStart1);
}
function removeDrag() {
    /* remove os eventos */
    dragMe.removeEventListener("mousedown", dragStart1);
    dragMe.removeEventListener("mousemove", dragMove1);
    dragMe.removeEventListener("mouseup", dragEnd1);
}


/****************************************** Adiionar sumario INICIO *****************************************************/



function headingCab(local) {
    // A função anônima define um escopo local 
    // Localiza o elemento contêiner TOC. 
    // Se não existe, cria um no início do documento. 
    var toc = document.getElementById("RFFTOC"); 
    if (!toc) { 
        toc = document.createElement("div"); 
        toc.id = "RFFTOC"; 
        // toc.innerHTML='<h1 id="sumario">Sumario</h1>';
        toc.innerHTML='<h2>Sumário</h2>';
        local.insertBefore(toc, local.firstChild); 
    } 
    // Localiza todos os elementos de cabeçalho de seção 
    var headings; 
    if (local.querySelectorAll) // Podemos fazer isso do modo fácil? 
        headings = local.querySelectorAll("h1,h2,h3,h4,h5,h6"); 
    else // Caso contrário, localiza os cabeçalhos da maneira difícil 
        headings = findHeadings(local, []); 
    // Percorre o corpo do documento recursivamente, procurando cabeçalhos 
    function findHeadings(root, sects) { 
        for(var c = root.firstChild; c != null; c = c.nextSibling) { 
            if (c.nodeType !== 1) continue; 
            if (c.tagName.length == 2 && c.tagName.charAt(0) == "H") 
                sects.push(c); 
            else 
            findHeadings(c, sects); 
        }
        return sects;
    }
    // Inicializa um array que monitora números de seção. 
    var sectionNumbers = [0,0,0,0,0,0]; 
    // Agora itera pelos elementos de cabeçalho de seção que encontramos. 
    for(var h = 0; h < headings.length; h++) { 
        var heading = headings[h]; 
        // Pula o cabeçalho de seção se estiver dentro do contêiner de TOC. 
        if (heading.parentNode == toc) continue; 
        // Descobre de que nível é o cabeçalho. 
        var level = parseInt(heading.tagName.charAt(1)); 
        if (isNaN(level) || level < 1 || level > 6) continue; 
        // Incrementa o número de seção para esse nível de cabeçalho 
        // e zera todos os números de nível de cabeçalho inferiores. 
        sectionNumbers[level-1]++; 
        for(var i = level; i < 6; i++) 
            sectionNumbers[i] = 0; 
        // Agora combina os números de seção de todos os níveis de cabeçalho 
        // para produzir um número de seção como 2.3.1. 
        var sectionNumber = sectionNumbers.slice(0,level).join(".") 
        // Adiciona o número de seção no título do cabeçalho de seção. 
        // Colocamos o número em um <span> para que possa ser estilizado. 
        // var span = document.createElement("span"); 
        // span.className = "TOCSectNum"; 
        // span.innerHTML = sectionNumber;
        // heading.insertBefore(span, heading.firstChild); 

        // Encerra o cabeçalho em uma âncora nomeada para que possamos nos vincular a ele. 
        var anchor = document.createElement("a"); 
        anchor.name = "RFFTOC"+sectionNumber; 
        heading.parentNode.insertBefore(anchor, heading); 
        anchor.appendChild(heading); 
        // Agora cria um link para essa seção. 
        var link = document.createElement("a"); 
        link.href = "#TOC" + sectionNumber; 
        // Destino do link 
        link.innerHTML = sectionNumber+' - '+heading.innerHTML; 
        // O texto do link é o mesmo do cabeçalho 
        // Coloca o link em um div que pode ser estilizado de acordo com o nível. 
        var entry = document.createElement("div"); 
        entry.className = "TOCEntry TOCLevel" + level; 
        entry.appendChild(link); 
        // E adiciona o div no contêiner de TOC. 
        toc.appendChild(entry); 
    }
}
// headingCab(document.getElementById("texto"));


function setOrRemoveHeading(){
    saveState();
    let texto = document.getElementById("texto");
    console.log(document.getElementById('RFFTOC'))
    if(document.getElementById("RFFTOC")==null){
        headingCab(document.getElementById("texto"));
        document.getElementById('sumario').style.backgroundColor='green';
    }else{
        // texto.removeChild(document.getElementById("RFFTOC"));
        document.getElementById('sumario').style.backgroundColor=null;
        deleteHeadingCab(texto);
    }
    saveState();
}


function deleteHeadingCab(local) {
    // A função anônima define um escopo local 
    // Localiza o elemento contêiner TOC. 
    // Se não existe, cria um no início do documento. 
    var toc = document.getElementById("RFFTOC"); 
    if (!toc) { 
        exit
    } 
    // Localiza todos os elementos de cabeçalho de seção 
    var headings; 
    if (local.querySelectorAll) // Podemos fazer isso do modo fácil? 
        headings = local.querySelectorAll("h1,h2,h3,h4,h5,h6"); 
    else // Caso contrário, localiza os cabeçalhos da maneira difícil 
        headings = findHeadings(local, []); 
    // Percorre o corpo do documento recursivamente, procurando cabeçalhos 
    function findHeadings(root, sects) { 
        for(var c = root.firstChild; c != null; c = c.nextSibling) { 
            if (c.nodeType !== 1) continue; 
            if (c.tagName.length == 2 && c.tagName.charAt(0) == "H") 
                sects.push(c); 
            else 
            findHeadings(c, sects); 
        }
        return sects;
    }
    // Inicializa um array que monitora números de seção. 
    // var sectionNumbers = [0,0,0,0,0,0]; 
    
    for(var h = 0; h < headings.length; h++) { 
        var heading = headings[h]; 
        // console.log(heading.parentNode.nodeName)
        if(heading.parentNode.nodeName=='A'){
            let tagA = heading.parentNode;
            let geral = tagA.parentNode;
            geral.insertBefore(heading, tagA);
            geral.removeChild(tagA);
            // console.log(heading)
            // console.log(tagA)
        }

    }
    local.removeChild(toc);
}


// marca o botão do sumário se o conteúdo tiver um sumário
function selectBtSumario(){
    if(document.getElementById("RFFTOC")!=null){
        document.getElementById('sumario').style.backgroundColor='green';
    }
}

/****************************************** Adiionar sumario FIM *****************************************************/


function insertBreakPage(){
    let isInDivTexto = verifyIfIsIntoDivTexto();
    if(isInDivTexto==false){
      alert('Clique na caixa de texto antes de usar esse recurso');
        return;
    }
    saveState();
    let node = verifyGetNode('DIV');
    console.log(node)
    let breakPage = document.createElement('div');
    // breakPage.setAttribute('class', 'item');
    // breakPage.setAttribute('id', 'item');
    breakPage.setAttribute('id', 'breakPage');
    breakPage.setAttribute('dragstart', 'dragStart(event)');
    breakPage.setAttribute('drag', 'drag(event)');
    breakPage.setAttribute('dragend', 'dragend(event)');
    breakPage.setAttribute('draggable', 'true');
    breakPage.setAttribute('droppable', 'true');
    breakPage.setAttribute('ondragover', 'allowDrop2(event)');
    breakPage.setAttribute('contenteditable', 'false');
    breakPage.setAttribute('title', 'Clique e arrasta para mover');
    breakPage.setAttribute('style', `
        page-break-inside: auto;
        page-break-before: always;
    `);
    breakPage.classList.add('classBreakPage');
    // breakPage.innerHTML = '<div id="viewRefBreakPage" draggable="false" droppable="false">';
    // breakPage.innerHTML+='<div id="textoBreakPageUp" draggable="false" droppable="false">Quebra de página</div><hr class="viewLineBreak" draggable="false" droppable="false">';
    // breakPage.innerHTML+='Quebra de Linha';
    // breakPage.innerHTML+='</div>';
    node.insertBefore(breakPage, node.firstChild);
    saveState();
}


// function getImgDownload(img){
//     // take any image
//     // let img = img;

//     // make <canvas> of the same size
//     let canvas = document.createElement('canvas');
//     canvas.width = img.clientWidth+500;
//     canvas.height = img.clientHeight+500;

//     let context = canvas.getContext('2d');

//     // copy image to it (this method allows to cut image)
//     context.drawImage(img, 0, 0);
//     // we can context.rotate(), and do many other things on canvas

//     // toBlob is async operation, callback is called when done
//     canvas.toBlob(function(blob) {
//         console.log(URL.createObjectURL(blob))
//     // blob ready, download it
//     let link = document.createElement('a');
//     link.download = 'example.docx';

//     link.href = URL.createObjectURL(blob);
//     link.click();

//     // // delete the internal blob reference, to let the browser clear memory from it
//     URL.revokeObjectURL(link.href);
//         return link.href;
//     }, 'image/png');
// }


// window.addEventListener('load', function(){
//     runImgReturnCanvas(document.getElementById('texto'));
// })

function pasteContentOfWeb(conteudo){
    saveState();
    let range = verifyGetNode('DIV');
    let pai = range.parentNode;
    // console.log(pai)
    console.log(conteudo)
    let position = range;
        alterLineHeight(conteudo);
    for(var c = 0; c < conteudo.children.length; c++){
        // console.log(c)
        let div = document.createElement('div');
        if(conteudo.children[c].nodeName=='DIV'){
            pai.insertBefore(conteudo.children[c].cloneNode(true), range);
        }else if(conteudo.children[c].nodeName=='P'){
            // console.log(conteudo.children[c].cloneNode(true))
            let tag = convertPToDiv(conteudo.children[c].cloneNode(true));
            // div.appendChild(tag);
            pai.insertBefore(tag, range);
        }else if(conteudo.children[c].nodeName=='TABLE'){
            console.log(conteudo.children[c].cloneNode(true))
            let tag = convertTable(conteudo.children[c].cloneNode(true));
            pai.insertBefore(tag, range);
        }else{
            div.appendChild(conteudo.children[c].cloneNode(true));
            pai.insertBefore(div, range);
        }
        position = conteudo.children[c].cloneNode(true);
        // console.log(position)
    }
    saveState();
}

function alterLineHeight(content){
    // console.log(content.firstChild.nodeName)
    for(var c = content.firstChild; c != null; c = c.nextSibling){
        // console.log('**********************')
        // console.log(c)
        if(c.nodeName != '#text' && c.nodeName != 'H1' && c.nodeName != 'H2' && c.nodeName != 'H3' && c.nodeName != 'H4' && c.nodeName != 'H5' && c.nodeName != 'H6'){
            // console.log('Entrou aqui')
            // console.log(c.nodeName)
            c.style.lineHeight = '1rem';
            alterLineHeight(c);
        }else if(c.nodeName != 'H1' && c.nodeName != 'H2' && c.nodeName != 'H3' && c.nodeName != 'H4' && c.nodeName != 'H5' && c.nodeName != 'H6'){
            // c.setAttribute('style', 'color:black;')
        }
    }
}

function openPasteContentOfWeb(){
    updateDirEditor();
    window.open(POSTS_RFF_DIR_EDITOR+'windowPasteContentOfWeb.php', 'janela', 'height=550, width=500, top=50, left=100, scrollbar=no, fullscreen=no');
}

function convertPToDiv(tag){
    if(tag.nodeName=='P'){
        let div = document.createElement('div');
        div.setAttribute('style', tag.getAttribute('style'));
        div.style.lineHeight = '1rem';
        div.innerHTML = tag.innerHTML;
        return div;
    }
    return tag;
}
//Testando a função convertPToDiv()
// let p = document.createElement('p');
// p.setAttribute('style', 'color:red;')
// p.innerHTML = 'Exemplo'
// console.log(convertPToDiv(p));

function convertTable(table){
    if(table.nodeName=='TABLE'){
        console.log(table)
        return convertTableNew(table);
    }
    return table;
}



function convertTableNew(tableOri) {
    let tbody = tableOri.children[1];
    console.log(tableOri)
    console.log(tbody)
    // numRow = table.children.length;
    // numCol = table.children[0].length;
    // let range = window.getSelection().getRangeAt(0);
    // selection = window.getSelection().toString();
    let divPai = document.createElement('div');
    divPai.setAttribute('contenteditable', 'false');
    divPai.setAttribute('spellcheck', 'false');
    divPai.setAttribute('class', 'tabelaObj');
    var table ='<div class="configTable" contenteditable="false" spellcheck="false">'
    // table+='<button id="testeSel" onclick="merge(\'row\', \'add\')"><img src="rffeditor/imgEditor/mesclar-celula.svg" width="50" title="Opções de mesclagem"></button>';
    table+='<ul id="menuTable">';
    table+='<li><img src="rffeditor/imgEditor/mesclar-celula.svg" height="40" title="Opções de mesclagem">';
    table+='<ul>';
    table+='<li><button id="testeSel" onclick="merge(\'row\', \'add\')"><img src="rffeditor/imgEditor/mesclar-lado.svg" height="40" title="Mesclar célula a direita"></button></li>';
    table+='<li><button id="testeSel" onclick="merge(\'column\', \'add\')"><img src="rffeditor/imgEditor/mesclar-abaixo.svg" height="40" title="Mesclar célula abaixo"></button></li>';
    table+='<li><button id="testeSel" onclick="merge(\'row\', \'remove\')"><img src="rffeditor/imgEditor/mesclar-remover-lado.svg" height="40" title="Remove mesclagem a direita"></button></li>';
    table+='<li><button id="testeSel" onclick="merge(\'column\', \'remove\')"><img src="rffeditor/imgEditor/mesclar-remover-abaixo.svg" height="40" title="Remover mesclagem abaixo"></button></li>';
    table+='</ul>';
    table+='</li>';

    table+='<li><img src="rffeditor/imgEditor/configRow.svg" height="40" title="Configuração de linha">';
    table+='<ul>';
    table+='<li><button id="testeSel" onclick="insertTrAfter()"><img src="rffeditor/imgEditor/inserttableRowAfter.svg" height="40" title="Inserir linha depois"></li>';
    table+='<li><button id="testeSel" onclick="insertTrBefore()"><img src="rffeditor/imgEditor/inserttableRowBefore.svg" height="40" title="Inserir linha antes"></li>';
    table+='<li><button id="testeSel" onclick="delTr()"><img src="rffeditor/imgEditor/deleteTableRowAfter.svg" height="40" title="Apagar linha"></li>';
    table+='</ul>';
    table+='</li>';

    table+='<li><img src="rffeditor/imgEditor/configColumn.svg" height="40" title="Configuração de coluna">';
    table+='<ul>';
    table+='<li><button id="testeSel" onclick="insertTdAfter()"><img src="rffeditor/imgEditor/inserttableColumnAfter.svg" height="40" title="Inserir coluna depois"></button></li>';
    table+='<li><button id="testeSel" onclick="insertTdBefore()"><img src="rffeditor/imgEditor/inserttableColumnBefore.svg" height="40" title="Inserir coluna antes"></button></li>';
    table+='<li><button id="testeSel" onclick="delTd()"><img src="rffeditor/imgEditor/deleteTableColumn.svg" height="40" title="Apagar coluna"></button></li>';
    table+='</ul>';
    table+='</li>';

    table+='<li><img src="rffeditor/imgEditor/configCell.svg" height="40" title="Configurar célula">';
    table+='<ul>';
    table+='<li><button id="testeSel" onclick="openConfigTdSel()"><img src="rffeditor/imgEditor/configCell-prop.svg" height="40" title="Configurar propriedade da célula"></button></li>';

    table+='<li><button id="testeSel" onclick="insertCellRight()"><img src="rffeditor/imgEditor/configCell-insert-after.svg" height="40" title="Inserir célula depois"></button></li>';
    table+='<li><button id="testeSel" onclick="insertCellLeft()"><img src="rffeditor/imgEditor/configCell-insert-before.svg" height="40" title="Inserir célula antes"></button></li>';
    table+='<li><button id="testeSel" onclick="removeCell()"><img src="rffeditor/imgEditor/configCell-delete.svg" height="40" title="Apagar célula"></button></li>';
    table+='</ul>';
    table+='</li>';

    table+='<li><button id="testeSel" onclick="openWindowConfigBackgroundTable()"><img src="rffeditor/imgEditor/configTable.svg" height="40" title="Configurar tabela"></button></li>';
    table+='</ul>';
    table+='<button onclick="fecharJanTab(this)" draggable="false" droppable="false">X</button>';
    table+='</div>';
    table += '<table cellspacing="0" class="tabela" id="tabelaInserida" onkeydown="keydownTable(event, this)" onkeyup="keyupTable(event, this)">';

    for(var i=0; i<=tbody.children.length; i++){
        table+='<tr contenteditable="false" spellcheck="false">';
        if(i==0){
            for(j=0;j<=returnNumCols(tbody);j++){
                if(j==0){
                    table+='<td style="" contenteditable="false" spellcheck="false" id="tableTdInicialPoint"></td>';
                }else{
                    table+='<td contenteditable="false" spellcheck="false" id="tableTdInicialLarg" style=""></td>';
                }
            }
        }else{
            console.log(i)
            console.log(tbody.children[(i-1)])
            for(j=0;j<=tbody.children[(i-1)].children.length;j++){
                if(j==0){
                    // table+='<td style="'+styleFirstColumn+'" contenteditable="false" spellcheck="false" id="tableTdInicialSmall"></td>';
                    table+='<td contenteditable="false" spellcheck="false" id="tableTdInicialSmall"></td>';
                }else{
                    table+='<td '+checkAndReturnConfigTD(tbody.children[(i-1)].children[(j-1)])+' contenteditable="true" spellcheck="true" onclick="actionClickTd(this)" class="">'+tbody.children[(i-1)].children[(j-1)].innerHTML+'</td>';
                    // table+='<td contenteditable="true" spellcheck="true">&nbsp;</td>';
                }
            }
        }
        table+='</tr>';
    }
    table+='</table>';
    divPai.innerHTML=table;
    return divPai;
}

function returnNumCols(table){
    let num=0;
    for(let i=0; i<table.children.length; i++){
        if(num < table.children[i].children.length){
            num = table.children[i].children.length;
        }
    }
    return num;
}

function checkAndReturnConfigTD(td){
    let config = ' ';
    if(td.getAttribute('colspan')!=null && td.getAttribute('colspan') != undefined){
        config += 'colspan="'+td.getAttribute('colspan')+'" ';
    }
    if(td.getAttribute('rowspan')!=null && td.getAttribute('rowspan') != undefined){
        config += 'rowspan="'+td.getAttribute('rowspan')+'" ';
    }
    // if(td.getAttribute('width')!=null && td.getAttribute('width') != undefined){
    //     config += 'width="'+td.getAttribute('width')+'" ';
    // }
    // if(td.getAttribute('height')!=null && td.getAttribute('height') != undefined){
    //     config += 'height="'+td.getAttribute('height')+'" ';
    // }
    if(td.getAttribute('style')!=null && td.getAttribute('style') != undefined){
        config += 'style="'+td.getAttribute('style')+'" ';
    }
    return config;
}