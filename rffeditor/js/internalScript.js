var janEfeitoTexto = document.getElementById("efeitosTexto");
var fundoEfeitoTexto = document.getElementById("fundoEfeitoTexto");
    function fechaJanEfeitosTexto(){
        janEfeitoTexto.setAttribute("style", "display:none;");
        fundoEfeitoTexto.setAttribute("style", "display:none;");
    }
    function abreJanEfeitosTexto(){
        janEfeitoTexto.setAttribute("style", "display:flex;");
        fundoEfeitoTexto.setAttribute("style", "display:flex;");
    }

    
    var emotions = document.getElementById("emotions");
    var fundoEmotions = document.getElementById("fundoEmotions");
    function fechaJanEmotions(){
        emotions.setAttribute("style", "display:none;");
        fundoEmotions.setAttribute("style", "display:none;");
    }
    function abreJanEmotions(){
        let isInDivTexto = verifyIfIsIntoDivTexto();
        if(isInDivTexto==false){
          alert('Clique na caixa de texto antes de usar esse recurso');
            return;
        }
        emotions.setAttribute("style", "display:flex;");
        fundoEmotions.setAttribute("style", "display:flex;");
    }

    var divCorText = document.getElementById('divCorText');
    function openWindowsColorText(){
        divCorText.setAttribute('style', 'display:flex;');
    }
    function closeWindowsColorText(){
        divCorText.setAttribute('style', 'display:none;');
    }

    var divCorDestText = document.getElementById('divCorDestText');
    function openWindowsColorDestText(){
        divCorDestText.setAttribute('style', 'display:flex;');
    }
    function closeWindowsColorDestText(){
        divCorDestText.setAttribute('style', 'display:none;');
    }

    var nodePai = '';    

    function editVideo(ob, event, tipoObj){
        let resourceAlt = document.getElementById('resourceAlt');
        let resourceTitle = document.getElementById('resourceTitle');
        document.getElementById('tipoObj').innerHTML = tipoObj;
        const janVideoEdit = document.getElementById('editVideo');
        // console.log(ob)
        let pai = ob.parentNode;
        // console.log(pai)
        let paipai = pai.parentNode;
        // console.log(paipai)
        let position = paipai.getBoundingClientRect();
        // console.log(position)
        janVideoEdit.setAttribute('style', 'display:block; top:'+position.y+'px; left:'+position.x+'px;');
        resourceAlt = paipai.getAttribute('alt');
        resourceTitle = paipai.getAttribute('title');
        // let ifr = paipai.children[1]
        // console.log(paipai.getAttribute('style'))
        let valores = paipai.getAttribute('style');
        valores = valores.split(';');
        let l='';
        let a='';
        // console.log('------------'+valores)
        for(let i=0; i<valores.length;i++){
            let item = valores[i].split(':');
            // console.log(item)
            if(item[0].includes("width")){
                l=item[1].replace(' ', '').replace('px', '');
            }else if(item[0].includes("height")){
                a=item[1].replace(' ', '').replace('px', '');
            }
            if(item[0].includes("float")){
                if(item[1].includes('left')){
                    document.getElementById('esquerda').checked = true;
                }else if(item[1].includes('right')){
                    document.getElementById('direita').checked = true;
                }
            }
            if(item[0].includes('margin')){
                if(item[1].includes('auto')){
                    document.getElementById('breakTextCenter').checked = true;
                }else if(item[1].includes('0px')){
                    document.getElementById('breakTextLeft').checked = true;
                }else if(item[1].includes('0px 0px 0px auto')){
                    document.getELementById('breakTextRight').checked = true;
                }
            }
        }
        let mediaAndCaption = paipai.children[1];
        let captionMedia = mediaAndCaption.children[1];
        // console.log(captionMedia.nodeName);
        // if(captionMedia!=null){
        //     document.getElementById('addCaption').innerHTML = 'Remover caption';
        // }else{
        //     document.getElementById('addCaption').innerHTML = 'Adicionar caption';
        // }
        document.getElementById('larg').value = l;
        document.getElementById('alt').value = a;
        nodePai = paipai;
    }

    function cancelEditMedia(){
        document.getElementById('editVideo').setAttribute('style', 'display:none;');
    }

    function salveUpdateIframe(){
        saveState();
        // console.log('....................................................................')
        let larg = document.getElementById('larg').value;
        let alt = document.getElementById('alt').value;
        if(document.getElementById('tipoObj').innerHTML=='img'){
            if(alt==''){
                alt='auto'
            }else{
                alt=alt+'px'
            }
            if(larg==''){
                larg='auto'
            }else{
                larg=larg+'px'
            }
        }else{
            larg=larg+'px'
            alt=alt+'px'
        }
        nodePai.setAttribute('style', 'width: '+larg+'; height: '+alt+';');
        let esquerda = document.getElementById('esquerda');
        let breakTextLeft = document.getElementById('breakTextLeft');
        let breakTextRight = document.getElementById('breakTextRight');
        let breakTextCenter = document.getElementById('breakTextCenter');
        let direita = document.getElementById('direita');
        let resourceAlt = document.getElementById('resourceAlt');
        let resourceTitle = document.getElementById('resourceTitle');
        let direcao = null;
        let margin = null;
        let order = null;
        if(esquerda.checked){
            direcao='left';
            // nodePai.style.marginRight='20px';
            margin='0 20px 0 0';
            order='none';
        }else if(direita.checked){
            direcao='right';
            // nodePai.style.marginLeft='20px';
            margin='0 0 0 20px';
            order='none';
        }else if(breakTextLeft.checked){
            direcao='none';
            // nodePai.style.margin='0';
            margin='0';
            order='none';
        }else if(breakTextCenter.checked){
            direcao='none';
            // nodePai.style.margin='auto';
            margin='auto';
            order='none';
        }else if(breakTextRight.checked){
            direcao='none';
            // nodePai.style.margin='0';
            margin='0 0 0 auto';
            order=1;
        }
        nodePai.style.margin=margin;
        nodePai.style.order=order;
        nodePai.style.width=larg;
        nodePai.style.height=alt;
        nodePai.style.float=direcao;
        nodePai.setAttribute('alt', resourceAlt.value);
        nodePai.setAttribute('title', resourceTitle.value);
        document.getElementById('editVideo').setAttribute('style', 'display:none;')
        cancelEditMedia()
        saveState();
    }
    window.addEventListener('load', function(){
        selectBtSumario();
    })

    function pdf(){
        let pdf = new SimplePDF();
        pdf.setBookName('Meu primeiro livro');
        console.log(pdf.bookName)
        pdf.toGenerateCleanPage('<center><h1>Livro Show de bola</h1></center>')
        pdf.toGenerateCleanPage('<center><h2>SUMMARY</h2></center>')
        pdf.header(pdf.bookName+' - Cabeçalho da página', '25px 25px 10px 25px');
        pdf.getContent(document.getElementById('texto'));
        pdf.footer('rodapé das páginas', '10px 70px 35px 70px', 'alternado');
        pdf.toGeneratePDF();
    }