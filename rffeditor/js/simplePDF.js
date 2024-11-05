// Esse código foi criado por Robson Ferreira de Farias
// Por favor, mantenha os créditos.
// Espero que lhe ajude.
// Contato: robsonfdfarias@gmail.com
class SimplePDF{
    pages = [];
    headerPage = '';
    stylePage = '';
    footerPage = '';
    color='#848484';
    jumpPages = 0;
    bookName = 'Nome do Livro';
    script=document.createElement('link');

    constructor(){
        this.stylePages('background-color:white;');
        this.script.rel = 'stylesheet';
        this.script.href = 'print.css';
        document.head.appendChild(this.script);
    }

    /*********** definir o nome do livro */
    setBookName(name){
        this.bookName = name;
    }

    /************ definir a configuração das páginas, como margem, cor da fonte, background da página, entre outros */
    stylePages(prop){
        console.log(prop)
        let width = '100vw';
        let height = '100vh';
        let position = 'relative';
        let boxSizing = 'border-box';
        let pageBreakInside = 'avoid';
        let pageBreakAfter = 'always';
        let border = '1px solid #cdcdcd';
        let padding = '25mm 15mm 15mm 15mm';
        let backgroundColor = null;
        let color = '#000';
        if(prop!==null && prop!=='' && prop!=='undefined' && prop!==undefined){
            let ops = prop.split(';');
            for(let i=0; i<ops.length;i++){
                let ele = ops[i].split(':');
                if(ele[0]=='padding' || ele[0]==' padding')
                    padding=ele[1];
                if(ele[0]=='border' || ele[0]==' border')
                    border=ele[1];
                if(ele[0]=='background-color' || ele[0]==' background-color')
                    backgroundColor=ele[1];
                if(ele[0]=='color' || ele[0]==' color')
                    color=ele[1];
            }
        }
        this.stylePage = 'width: '+width+';';
        this.stylePage += ' height: '+height+';';
        this.stylePage += ' position: '+position+';';
        this.stylePage += ' box-sizing: '+boxSizing+';';
        this.stylePage += ' page-break-inside: '+pageBreakInside+';';
        this.stylePage += ' page-break-after: '+pageBreakAfter+';';
        this.stylePage += ' border: '+border+';';
        this.stylePage += ' padding: '+padding+';';
        this.stylePage += ' background-color: '+backgroundColor+';';
        this.stylePage += ' color: '+color+';';
        this.stylePage += ' z-index: 10008;';
        this.stylePage += ' margin: auto auto;';
    }


    /***************** inserir uma página que não terá cabeçalho nem rodapé, serve para capa, contra capa, sumário entre outros */
    toGenerateCleanPage(content, background){
        let page = document.createElement('div');
        page.setAttribute('id', 'page');
        page.setAttribute('style', this.stylePage);
        if(background!=undefined){
            page.style.background = 'url("'+background+'")';
            page.style.backgroundSize = 'cover';
            page.style.backgroundPosition = 'center center';
        }else{
            console.log('Indefinido...')
        }
        page.innerHTML += content;
        this.pages.push(page);
        this.jumpPages+=1;
    }
    
    /***************** configurar o cabeçalho das página ********************/
    header(conteudo){
        if(conteudo==undefined || conteudo==''){
            conteudo = '';
        }
        let div = '<div id="header" style="place-content: center; place-items: center; position: absolute; top: 35px; left: 35px; width: 100%; min-height: 25px; padding: 20px 15px 0px; color:'+this.color+';">';
        div += conteudo;
        div += '</div>';
        this.headerPage = div;
    }
    header(conteudo, padding){
        if(conteudo==undefined || conteudo==''){
            conteudo = '';
        }
        let div = '<div id="header" style="place-content: center; place-items: center; position: absolute; top: 35px; left: 35px; width: 100%; min-height: 25px; padding: '+padding+'; color:'+this.color+';">';
        div += conteudo;
        div += '</div>';
        this.headerPage = div;
    }


    /**************** Essa função gera uma página com o conteúdo inserido, mas diferente do getContent(content), essa função inseri em uma página só todo o conteúdo de CONTENT */
    toGeneratePage(content){
        let page = document.createElement('div');
        page.setAttribute('id', 'page');
        page.setAttribute('style', this.stylePage);
        page.innerHTML = this.headerPage;
        page.innerHTML += content;
        // page.innerHTML += this.footerPage;
        this.pages.push(page);
    }

    /******************* Configurar o radapé das páginas *******************/
    footer(conteudo){
        for(let i = 0; i<this.pages.length; i++){
            if(this.jumpPages>0){
                this.jumpPages-=1;
            }else{
                let div = '<div id="footer" style="position:absolute; box-sizing: border-box; position: absolute; bottom: 35px; left: 0px; width: 100%; min-height: 25px; padding: 0px 15px 0px 15px; color:'+this.color+';">';
                div += '<center>';
                div += conteudo;
                div += ' - página: <strong>';
                div += (i+1)+'/'+this.pages.length;
                div += '</strong></center>';
                div += '</div>';
                this.pages[i].innerHTML += div;
            }
        }
    }
    footer(conteudo, padding){
        for(let i = 0; i<this.pages.length; i++){
            if(this.jumpPages>0){
                this.jumpPages-=1;
            }else{
                let div = '<div id="footer" style="position:absolute; box-sizing: border-box; bottom: 35px; left: 0px; width: 100%; min-height: 25px; padding: '+padding+'; color:'+this.color+';">';
                div += '<center>';
                div += conteudo;
                div += ' - página: <strong>';
                div += (i+1)+'/'+this.pages.length;
                div += '</strong></center>';
                div += '</div>';
                this.pages[i].innerHTML += div;
            }
        }
    }
    //position pode ser:
    //alternado = vai colocar a paginação do lado direito nas páginas pares e do lado esquerdo nas ímpares
    //center = coloca a páginação no centro da página
    footer(conteudo, padding, position){
        for(let i = 0; i<this.pages.length; i++){
            if(this.jumpPages>0){
                this.jumpPages-=1;
            }else{
                if(position=='alternado'){
                    let div='';
                    console.log('é par? ')
                    console.log((i+1)%2==0)
                    let array = [];
                    if((i+1)%2!=0){
                        div = '<div id="footer" style="position:absolute; box-sizing: border-box; bottom: 35px; right: 0; min-height: 25px; padding: '+padding+'; color:'+this.color+';">';
                        array.push(conteudo);
                        array.push('<strong>'+(i+1)+'/'+this.pages.length+'</strong>');
                    }else{
                        array.push('<strong>'+(i+1)+'/'+this.pages.length+'</strong>');
                        array.push(conteudo);
                        div = '<div id="footer" style="position:absolute; box-sizing: border-box; bottom: 35px; left: 0px; width: 100%; min-height: 25px; padding: '+padding+'; color:'+this.color+';">';
                    }
                    // div += '<center>';
                    div += array[0]+' - '+array[1];
                    // div += ' - página: <strong>';
                    // div += (i+1)+'/'+this.pages.length;
                    // div += '</strong>';
                    // div += '</center>';
                    div += '</div>';
                    this.pages[i].innerHTML += div;
                }else{
                    let div = '<div id="footer" style="position:absolute; box-sizing: border-box; bottom: 35px; left: 0px; width: 100%; min-height: 25px; padding: '+padding+'; color:'+this.color+';">';
                    div += '<center>';
                    div += conteudo;
                    div += ' - página: <strong>';
                    div += (i+1)+'/'+this.pages.length;
                    div += '</strong>';
                    div += '</center>';
                    div += '</div>';
                    this.pages[i].innerHTML += div;
                }
            }
        }
    }

    /**************** Essa função pega o conteúdo, que pode estar em uma DIV, e separa ele nas páginas automáticamente, respeitando o limite das páginas *********/
    getContent(conteudo){
        // let div = document.getElementById('content');
        let content = document.createElement('div');
        content.setAttribute('id', 'contentCopy');
        content.setAttribute('style', 'position: absolute; top: 0; left: -166mm; width: 160mm;');
        content.innerHTML = conteudo.innerHTML;
        document.body.appendChild(content);
        let div = document.createElement('div');
        div.setAttribute('id', 'content');
        div.style.position = 'absolute';
        div.style.width = '180mm';
        div.style.left = '-160mm';
        document.body.appendChild(div);
        for(let i=0; i<content.children.length; i++){
            if((div.getBoundingClientRect().height+content.children[i].getBoundingClientRect().height)<950){//Não pode passar de 5551
                // div.appendChild(content.children[i]);
                if(this.getBreakPage(content.children[i])){
                    div.appendChild(content.children[i].cloneNode(true));
                    this.toGeneratePage(div.innerHTML);
                    div.innerHTML='';
                }else{
                    div.appendChild(content.children[i].cloneNode(true));
                }
            }else{
                this.toGeneratePage(div.innerHTML);
                div.innerHTML='';
                div.appendChild(content.children[i].cloneNode(true));
            }
            if(i==(content.children.length-1)){
                this.toGeneratePage(div.innerHTML);
                div.innerHTML='';
            }
        }
        content.style.display = 'none';
        document.body.removeChild(document.getElementById('contentCopy'));
        document.body.removeChild(document.getElementById('content'));
    }

    /*********************** O objetivo dessa função é identificar as quebras de páginas inseridas manualmente no conteúdo para criar uma próxima página ************/
    getBreakPage(div){
        if(div==undefined){
            return false;
        }
        for(var i = div.firstChild; i != null; i = i.nextSibling){
            if(i.nodeName.length==3 && i.nodeName == 'DIV'){
                if(i.id=="breakPage" && i.className=='classBreakPage'){
                    return true;
                }
            }else{
                this.getBreakPage(i);
            }
        }
        return false;
    }

    /********************** Aqui é feita a configuração final para imprimir o conteúdo do PDF ********************/
    toGeneratePDF(){
        let body = document.body.innerHTML;
        document.body.innerHTML = ''
        let div = document.createElement('div');
        div.setAttribute('id', 'pages');
        div.style.position = 'absolute';
        div.style.top = 0;
        div.style.left = 0;
        div.style.zIndex = '10025';
        for(let i=0; i<this.pages.length; i++){
            div.appendChild(this.pages[i]);
        }
        document.body.appendChild(div);
        window.print();
        // window.onafterprint = function(){
        //     document.head.removeChild(this.script);
        //     document.body.removeChild(document.getElementById('pages'));
        // }
            document.head.removeChild(this.script);
            document.body.removeChild(document.getElementById('pages'));
            document.body.innerHTML = body;
    }

    /*************************************************************************************************/
    /*************************************** COMO USAR ***********************************************/
    /********************** Instancie o SimplePDF usando o new SimplePDF() ***************************/
    /************************** Defna o nome do livro em setBookName() *******************************/
    /***** Se for o caso, gere a capa, contra capa, sumário e etc usando o toGenerateCleanPage() *****/
    /** Se precisar criar uma página específica com um conteúdo específica, use o toGeneratePage() ***/
    /********* Use o getContent() para inserir o conteúdo para ser distribuido nas páginas ***********/
    /************** Use o footer() para definir as própriedades do radapé das páginas ****************/
    /******* Por fim, use o toGeneratePDF() para finalizar a configuração e chamar a impressão *******/
    /************************************** Na impressão *********************************************/
    /************************************ usar a folha A4 ********************************************/
    /*********************************** Margens = Nenhuma *******************************************/
    /*********************** Marque a opção = Gráficos de segundo plano ******************************/
    /*************************************************************************************************/
    /******************** Para mais informações, acesso o meu canal no youtube ***********************/
    /************************ https://www.youtube.com/@RobsonFarias-os2di ****************************/
    /*************************************************************************************************/

}