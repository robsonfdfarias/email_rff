var formUpload = document.getElementById('upload');
var preview = document.getElementById('preview');
var porcentagem = document.getElementById("porcento");
var i = 0;

var posicao;
var range;
var index;
var editor;


var width;
var height;
var srcImg;
var objImg;
var json;

formUpload?.addEventListener('submit', async function(event){
  event.preventDefault();

  var xhr = new XMLHttpRequest();

  //xhr.open("POST", formUpload.getAttribute('action'));
  xhr.open("POST", "ex2.class.php");

  xhr.upload.addEventListener('onprogress', function(e) {
        var perc = (e.loaded/e.total)*100;
        porcentagem.innerHTML = perc;
	});

  var formData = new FormData(formUpload);
  formData.append("i", i++);
  await xhr.send(formData);
console.log(i)
  xhr.addEventListener('readystatechange', function() {
    if (xhr.readyState === 4 && xhr.status == 200) {
      // console.log(xhr.responseText+'------------************');
      preview.innerHTML = xhr.status;
      json = JSON.parse(xhr.responseText);

      if (json.status!=='no_file' && json.status === 'ok') {
        porcentagem.innerHTML = '<img id="previewImage" src="'+json.img+'" width="300">';
        preview.innerHTML = '<img id="previewImage" src="'+json.img+'" width="300">';
      } else {
        preview.innerHTML = 'Arquivo não enviado';
      }
    } else {
      console.log('Erro robson')
      preview.innerHTML = xhr.statusText+' ------------------';
    }
  });
/*
  xhr.upload.addEventListener("progress", function(e) {
        var perc = (e.loaded/e.total)*100;
        porcentagem.innerHTML = perc;
    if (e.lengthComputable) {
      var percentage = Math.round((e.loaded * 100) / e.total);
      $preview.innerHTML = String(percentage) + '%';
    }
  }, false);*/

  xhr.upload.addEventListener("load", function(e){
    porcentagem.innerHTML = String(100) + '%';
  }, false);

}, false);



// function insertImg() {
//   var img = document.getElementById("previewImage");
//   srcImg = img.getAttribute("src");
//   width = img.getAttribute("width");
//   height = img.getAttribute("height");
//   selection = window.getSelection().toString();
//   var media = '<div class="item" id="item" dragstart="dragStart(event)" drag="drag(event)" dragend="dragend(event)" draggable="true" droppable="false" ondragover="allowDrop2(event)" contenteditable="false">'
//   media += '<div id="tools" draggable="false" droppable="false">'
//   media += '<button onclick="editVideo(this, event)" draggable="false" droppable="false">Editar</button>'
//     // media += '<div id="arrastar" dragstart="dragStart(event)" drag="drag(event)" dragend="dragend(event)" draggable="true" droppable="false" contenteditable="false"></div>'
//     media += '<button onclick="fecharJanVid(this)" draggable="false" droppable="false">X</button>'
//     media += '</div>'
//     media += '<img src="'+srcImg+'" width="'+width+'" height="'+height+'" onclick="openWindowEditImage(this)" class="imagem">';
//     media += '</div>'
//   // var imagem = '<img src="'+srcImg+'" width="'+width+'" height="'+height+'" onclick="openWindowEditImage(this)" class="imagem">';
//   document.execCommand('insertHTML', false, media);
// }



function insertImg() {
  let range = window.getSelection().getRangeAt(0);
  var img = document.getElementById("previewImage");
  srcImg = img.getAttribute("src");
  width = img.getAttribute("width");
  height = img.getAttribute("height");
  selection = window.getSelection().toString();
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
  divPai.setAttribute('style', 'width:'+width+'px; height:'+height+'px; position:relative;');
  // divPai.setAttribute('onmouseover', "imgOver(this)")
  divPai.setAttribute('onmouseout', "imgOut(this)")
  divPai.setAttribute('onmouseover', "imgOver(this)")
  // divPai.addEventListener('mouseover', function(){
  //   imgOver(this);
  // }, true);
  let mediaAndCaption = document.createElement('div');
  mediaAndCaption.setAttribute('id', 'mediaAndCaption');
  mediaAndCaption.setAttribute('draggable', 'false');
  mediaAndCaption.setAttribute('droppable', 'false');
  mediaAndCaption.setAttribute('contenteditable', 'false');
  let image = document.createElement('img');
  image.src=srcImg;
  image.setAttribute('width', '100%');
  image.setAttribute('height', 'auto');
  image.setAttribute('class', 'imagem');
  image.setAttribute('draggable', 'false');
  image.setAttribute('droppable', 'false');
  image.setAttribute('contenteditable', 'false');
  image.addEventListener('dragstart', function (event) {
    event.preventDefault();
  })
  mediaAndCaption.appendChild(image);
  // mediaAndCaption.innerHTML = '<img src="'+srcImg+'" width="100%" height="auto" class="imagem">';
  divPai.appendChild(mediaAndCaption);
  range.insertNode(divPai);
}
var controller =false;
function imgOver(div){
  controller=true;
  let tools = document.createElement('div');
  tools.setAttribute('id', 'tools');
  tools.setAttribute('draggable', 'false');
  tools.setAttribute('droppable', 'false');
  tools.setAttribute('contenteditable', 'false');
  tools.setAttribute('style', 'display:flex; position:absolute; left: 0; top:-20px; background-color: rgba(0,0,0,0.0); width:80%; cursor: default;')
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

function imgOut(div){
  let first = div.firstElementChild;
  if(first.getAttribute('id')==='tools'){
    if(controller==false){
      first.replaceChildren();
      controller=true;
    }
  }
}


/*
window.addEventListener("click", function(){
  setTimeout(function () {
    setCursor(editor, posicao);
  }, 200);
  //insertImg();
})*/


function editImg(img) {
  var larg = window.prompt("Insira a largura", "");
  if(larg!='' && larg!=null){
      img.setAttribute("width", larg);
  }
  /*
  var configStyle = img.getAttribute("style");
  console.log(configStyle)
      var opcoes = "";
  if(configStyle==null || configStyle==''){
      //configStyle+="border: 3px solid red;";
      configStyle="border: 3px solid red;";
  }else{
      //opcoes="border: 3px solid red;";
  }*/

  //testa(configStyle, "border: 3px solid red", "border");
  //testa(configStyle, larg, "width");
  //configStyle = opcoes;
  //img.setAttribute("style", configStyle);

  /*if(larg!=null && larg!=''){
      configStyle+="width: "+larg+"px;";
      img.setAttribute("style", configStyle)
  }*/
}

function testa(configStyle2, valor, arg){
  var op = configStyle2.split(";");
      var opcoes = "";
      console.log(op)
      for(i=0; i<(op.length-1); i++){
          console.log(op[i])
          var opInterno = op[i].split(":")
          if(arg!=null){
              if(opInterno[0]==arg){
                      op[i]=valor;
                  }else{
                      if(i==(op.length-2)){
                          opcoes+=valor;
                      }
                  }
          }
          /*if(opInterno=="border"){
              op[i]="border: 3px solid red";
          }
          
          if(larg!=null && larg!=''){
              if(opInterno=="width"){
                  op[i]="width: "+larg+"px";
              }
          }*/
          opcoes+=op[i]+";";
      }
      console.log(opcoes);
      return opcoes;
}


var statePaneImage = false;
function togglePaneImage(){
  /*const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const startOffset = range.startOffset;
  const endOffset = range.endOffset;
  //var posicao = selection.focusOffset
  var posicao = selection.focusNode;
  console.log(posicao)*/
  const selection = window.getSelection();
  posicao = selection.focusNode;
  if(statePaneImage==false){
      document.getElementById("geralInseriImagem").setAttribute("style", "display:flex; transition:ease-in-out 0.5s;");
      statePaneImage=true;
  }else{
      document.getElementById("geralInseriImagem").setAttribute("style", "display:none; transition:ease-in-out 0.5s;");
      statePaneImage=false;
      document.getElementById("porcento").innerHTML=''
      posicao=''
      funcBtImg();
  }
}


function setCursor(node, cursorElement) {
  var range = document.createRange();
  range.setStart(cursorElement, 0);
  range.collapse(true);
  if (window.getSelection) {
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      node.focus();
  } else if (document.selection && range.select) {
      range.select();
  }
}

editor = document.querySelector("#texto");

function funcBtImg(){
  // var imG = document.getElementsByClassName("imagem");
  var imG = document.getElementsByTagName('img');
  for(i=0;i<imG.length;i++){
      imG[i].setAttribute("onclick", "openWindowEditImage(this)")
  }
}

function onDragStart(event, elem) {
  elem.setAttribute("onclick", "openWindowEditImage(this)")
  funcBtImg()
  event
    .dataTransfer
    .setData('text/plain', event.target.id);

  event
    .currentTarget
    .style
    .backgroundColor = 'yellow';

}

function openWindowInsertImage(){
  let isInDivTexto = verifyIfIsIntoDivTexto();
  if(isInDivTexto==false){
    alert('Clique na caixa de texto antes de usar esse recurso');
      return;
  }
  updateDirEditor();
  // window.open("rffeditor/windowInsertImage.php");
  window.open(POSTS_RFF_DIR_EDITOR+"windowInsertImage.php", 'janela', 'top=50, left=100, scrollbar=no, fullscreen=no');
}

function openWindowEditImage(img){
  updateDirEditor();
  objImg = img;
  localStorage.setItem('endImg', img.src);
  localStorage.setItem('widImg', width);
  localStorage.setItem('heigImg', height);
  // window.open(POSTS_RFF_DIR_EDITOR+"windowEditImage.php", 'janela', 'height=100%, width=100%, top=50, left=100, scrollbar=no, fullscreen=no');
  window.open(POSTS_RFF_DIR_EDITOR+"windowEditImage.php", 'janela', 'top=50, left=100, scrollbar=no, fullscreen=no');
}

function editImgNovo(width, height) {
  //alert('chegou aqui tbm');
  if(width=='' || width==null){
      width='auto'
  }
  if(height=='' || height==null){
    height='auto'
  }
  objImg.setAttribute("width", width);
  objImg.setAttribute("height", height);
}