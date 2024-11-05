// select the item element
// const item = document.querySelector('.item');

var obj = '';

// const item = document.querySelectorAll('.item');
// const barra = document.querySelectorAll('.barra');

// // attach the dragstart event handler
// // item.addEventListener('dragstart', dragStart);
// item.forEach(elem => {
//     console.log(elem)
//     elem.addEventListener('dragstart', dragStart);
//     elem.addEventListener('drag', drag);
//     elem.addEventListener('dragend', dragEnd);
// });

// barra.forEach(elem => {
//     console.log(elem)
//     elem.addEventListener('dragstart', dragStart);
//     elem.addEventListener('drag', drag);
//     elem.addEventListener('dragend', dragEnd);
// });

// handle the dragstart 

function dragStart(e) {
    // console.log(e.target.getAttribute('id')+'3333333333333333')
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
//    console.log('drag starts...'+e);
}
function drag(e) {
    // console.log(e.target.getAttribute('id')+'3333333333333333')
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
//    console.log('drag...'+e);
}
//Aqui ele mostra o bloco, se ele foi arrastado para um lugar não válido, ele mostra o elemento no lugar original
function dragEnd(e) {
    // console.log(e.target.id+'+++++++++++++++++++')
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.remove('hide');
    }, 0);
//    console.log('drag END...'+e);
}


// const boxes = document.querySelectorAll('.box');

// boxes.forEach(box => {
//     box.addEventListener('dragenter', dragEnter)
//     box.addEventListener('dragover', dragOver);
//     box.addEventListener('dragleave', dragLeave);
//     box.addEventListener('drop', drop);
// });


const texto = document.getElementById('texto');


texto.addEventListener('dragenter', dragEnter)
texto.addEventListener('dragover', dragOver);
texto.addEventListener('dragleave', dragLeave);
texto.addEventListener('drop', drop);

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.preventDefault();
    e.target.classList.remove('drag-over');
}

function drop(e) {
    // e.preventDefault();
    // get the draggable element
    // const id = e.dataTransfer.getData('text/plain');
    // e.dataTransfer.effectAllowed = 'move';
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    // e.dataTransfer.setData('text/html', this.innerHTML);
    // console.log(draggable+'***************')
    // console.log(id+'-------------')
    e.target.classList.remove('drag-over');

    // add it to the drop target
    // e.target.appendChild(draggable);
    e.target.appendChild(obj);
    // console.log(obj)

    // display the draggable element
    // draggable.classList.remove('hide');
}


//Aqui eu verifico se ele tem permissão para o drop
function allowDrop(ev){    
    let pa = ev.target.parentNode;
    let pai = pa.parentNode;
    // console.log(ev.target.getAttribute("id")+'--*-*-*-*-*--*-**-')
    // console.log(ev.target.id+'//*/*/*/*/*/*/*/*/*//')
    // console.log(pa.target.getAttribute("id")+'//*/*/*/*/*/*/*/*/*//')
    // console.log(pai.target.getAttribute("id")+'000000000000000000000000000000')
    // console.log('--------------------------------------------------')
    // console.log(ev)
    // console.log(pa)
    // console.log(pai)
    if(pai!=null){
        obj=pai;
        // console.log(obj)
    }
    if (ev.target.getAttribute("droppable") == "false"){
        ev.dataTransfer.dropEffect = "none"; // dropping is not allowed
                            ev.preventDefault();
    }
    else{
        ev.dataTransfer.dropEffect = "all"; // drop it like it's hot
                            ev.preventDefault();
    }
}
function allowDrop2(ev){
    if(ev.target!=null){
        obj=ev.target;
        // console.log(obj)
    }
    if (ev.target.getAttribute("droppable") == "false"){
        ev.dataTransfer.dropEffect = "none"; // dropping is not allowed
                            ev.preventDefault();
    }
    else{
        ev.dataTransfer.dropEffect = "all"; // drop it like it's hot
                            ev.preventDefault();
    }
}



async function download(data, filename, type) {
    const file = new Blob([data], {type: type});
    
    // if (window.navigator.msSaveOrOpenBlob) {
    //     await window.navigator.msSaveOrOpenBlob(file, filename);
    //     return
    // }
    
    // const a = document.createElement("a");
    // const url = URL.createObjectURL(file);

    var isIE = false || !!document.documentMode;
    if (isIE) {
        window.navigator.msSaveBlob(file, filename);
    } else {
        var url = window.URL || window.webkitURL;
        link = url.createObjectURL(file);
        var a = document.createElement("a");
        a.setAttribute("download", filename);
        a.setAttribute("href", link);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}


function getImgDownloadOriginal(){
    // take any image
    let img = document.querySelector('img');

    // make <canvas> of the same size
    let canvas = document.createElement('canvas');
    canvas.width = img.clientWidth+500;
    canvas.height = img.clientHeight+500;

    let context = canvas.getContext('2d');

    // copy image to it (this method allows to cut image)
    context.drawImage(img, 0, 0);
    // we can context.rotate(), and do many other things on canvas

    // toBlob is async operation, callback is called when done
    canvas.toBlob(function(blob) {
    // blob ready, download it
    let link = document.createElement('a');
    link.download = 'example.docx';

    link.href = URL.createObjectURL(blob);
    link.click();

    // delete the internal blob reference, to let the browser clear memory from it
    URL.revokeObjectURL(link.href);
    }, 'application/word');
}


/******************* Processo de conversão da imagem de todo o texto em Canvas ***************************************/

function convertImageToCanvas(img){
    let canvas = document.createElement('canvas');
    canvas.width=img.clientWidth;
    canvas.height=img.clientHeight;
    let context = canvas.getContext('2d');
    context.drawImage(img, 0, 0, img.clientWidth, img.clientHeight)
    canvas.setAttribute('class', 'imagem');
    return canvas;
}



function convertImages(local) {
    var imgs; 
    if (local.querySelectorAll) // Podemos fazer isso do modo fácil? 
        imgs = local.querySelectorAll("img"); 
    else // Caso contrário, localiza os cabeçalhos da maneira difícil 
        imgs = findImages(local, []); 
    // Percorre o corpo do documento recursivamente, procurando cabeçalhos 
    function findImages(root, sects) { 
        for(var c = root.firstChild; c != null; c = c.nextSibling) { 
            if (c.nodeType !== 1) continue; 
            if (c.tagName.length == 3 && c.tagName == "IMG") 
                sects.push(c); 
            else 
            findImages(c, sects); 
        }
        return sects;
    }
    for(var h = 0; h < imgs.length; h++) { 
        var getImage = imgs[h]; 
        let canvasImg = convertImageToCanvas(getImage);
        getImage.parentNode.insertBefore(canvasImg, getImage); 
        getImage.parentNode.removeChild(getImage); 
    }
}