
var quadro = document.getElementById('texto')
quadro.addEventListener('keydown', function(e){
    //se apertar o crtl+v
    // if ((e.ctrlKey || e.metaKey) && e.key === 'v') {
    //     saveState();
    //     console.log('Ctrl + V foi pressionado!');
    // }
    // console.log(e.key)
    if ((e.ctrlKey || e.metaKey) && e.altKey && e.key === '1') {
        console.log('Ctrl + V foi pressionado!');
        saveState();
        insertH('h1');
        saveState();
    }
    if ((e.ctrlKey || e.metaKey) && e.altKey && e.key === '2') {
        console.log('Ctrl + V foi pressionado!');
        saveState();
        insertH('h2');
        saveState();
    }
    if ((e.ctrlKey || e.metaKey) && e.altKey && e.key === '3') {
        console.log('Ctrl + V foi pressionado!');
        saveState();
        insertH('h3');
        saveState();
    }
    if ((e.ctrlKey || e.metaKey) && e.altKey && e.key === '4') {
        console.log('Ctrl + V foi pressionado!');
        saveState();
        insertH('h4');
        saveState();
    }
    if ((e.ctrlKey || e.metaKey) && e.altKey && e.key === '5') {
        console.log('Ctrl + V foi pressionado!');
        saveState();
        insertH('h5');
        saveState();
    }
    if ((e.ctrlKey || e.metaKey) && e.altKey && e.key === '6') {
        console.log('Ctrl + V foi pressionado!');
        saveState();
        insertH('h6');
        saveState();
    }
    if (e.altKey && e.key === 's') {
        console.log('Ctrl + V foi pressionado!');
        saveState();
        insertTag('rffTextShadow');
        saveState();
    }
    if (e.altKey && e.key === 'n') {
        console.log('Ctrl + V foi pressionado!');
        saveState();
        insertTag('rffNeonText');
        saveState();
    }
    if (e.altKey && e.key === 't') {
        console.log('Ctrl + V foi pressionado!');
        saveState();
        insertTag('rffNeonTextEColorWhite')
        saveState();
    }
    selectElem();
})
quadro.addEventListener('paste', function(event){
    event.preventDefault();
    saveState()
    updateDirEditor();
    // console.log('Ação de colar...')
    const pastedData = event.clipboardData.getData('text/html');//htmlContent.replace(/<script.*?>.*?<\/script>/g, '');
    let div = document.createElement('div');
    let div2 = document.createElement('div');
    div.innerHTML = pastedData;
    for(let i=0; i<div.children.length; i++){
        if(div.children[i].nodeName==='SPAN'){
            div2.append(document.createTextNode(div.children[i].innerText))
        }else if(div.children[i].nodeName==='B' || div.children[i].nodeName==='I' || div.children[i].nodeName==='U'){
            div.children[i].removeAttribute('style')
            div2.append(div.children[i].cloneNode(true))
        }else{
            div2.append(div.children[i].cloneNode(true))//.replace('url("imgs', 'url("'+POSTS_RFF_DIR_EDITOR+'/imgs')
        }
    }
    div = div2
    let selection = window.getSelection();
    let rangeOrigin = selection.getRangeAt(0);
    let pai = rangeOrigin.startContainer;
    // console.log(pai)
    if(pai.nodeType===Node.TEXT_NODE){
        // console.log('tem conteudo')
        rangeOrigin.deleteContents();
        // rangeOrigin.insertNode(...Array.from(div.childNodes));
        console.log('Quantidade de filhos da div: '+div.lastChild)
        console.log(div.firstChild)
        for(let r=div.lastChild; r!=null; r=r.previousSibling){
            console.log(r)
            if(r.nodeType===Node.TEXT_NODE){
                rangeOrigin.insertNode(r.cloneNode(true));
            }else{
                let tag = document.createElement(r.nodeName.toLocaleLowerCase());
                tag.innerHTML = r.innerHTML.replace('url("imgs', 'url("'+POSTS_RFF_DIR_EDITOR+'/imgs');
                rangeOrigin.insertNode(tag);
            }
        }
        // rangeOrigin.insertNode(div);
        selection.removeAllRanges();
        selection.addRange(rangeOrigin);
        console.log(pastedData)
    }else{
        // console.log('vazio')
        let paiOri = getTagFather(pai);
        // console.log(paiOri)
        if(paiOri.getAttribute('id')=='texto'){
            if(div.children[0].nodeName!='DIV'){
                let divNew = document.createElement('div');
                // divNew.innerHTML = div.innerHTML.replace('url("imgs', 'url("'+POSTS_RFF_DIR_EDITOR+'/imgs');
                for(let r=div.firstChild; r!=null; r=r.nextSibling){
                    if(r.nodeType===Node.TEXT_NODE){
                        divNew.append(document.createTextNode(r.textContent.replace('&nbsp;', ' ')));
                        // divNew.append(r.innerText);
                    }else{
                        let tag = document.createElement(r.nodeName.toLocaleLowerCase());
                        tag.innerHTML = r.innerHTML.replace('url("imgs', 'url("'+POSTS_RFF_DIR_EDITOR+'/imgs');
                        divNew.append(tag)
                    }
                }
                paiOri.insertBefore(divNew, pai);
                // console.log(divNew)
            }else{
                for(let i=0;i<div.childNodes.length;i++){
                    if(div.children[i].nodeName=='DIV'){
                        paiOri.insertBefore(div.children[i].cloneNode(true), pai);
                    }else{
                        let dd = document.createElement('div');
                        dd.append(div.children[i].cloneNode(true));
                        paiOri.insertBefore(dd, pai);
                    }
                }
            }
            pai.remove();
        }
    }
    saveState()
})
quadro.addEventListener('mouseup', function(){
    // console.log(tags)
    selectElem();
    verifyElementFocus();
})