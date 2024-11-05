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

    setBookName(name){
        this.bookName = name;
    }

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
    
    header(conteudo){
        if(conteudo==undefined || conteudo==''){
            conteudo = '';
        }
        let div = '<div id="header" style="place-content: center; place-items: center; position: absolute; top: 35px; left: 35px; width: 100%; min-height: 25px; padding: 20px 15px 0px; color:'+this.color+';">';
        div += conteudo;
        div += '</div>';
        this.headerPage = div;
    }
    toGeneratePage(content){
        let page = document.createElement('div');
        page.setAttribute('id', 'page');
        page.setAttribute('style', this.stylePage);
        page.innerHTML = this.headerPage;
        page.innerHTML += content;
        // page.innerHTML += this.footerPage;
        this.pages.push(page);
    }
    footer(conteudo){
        for(let i = 0; i<this.pages.length; i++){
            if(this.jumpPages>0){
                this.jumpPages-=1;
            }else{
                let div = '<div id="footer" style="position:absolute; box-sizing: border-box; bottom: 35px; left: 0px; width: 100%; min-height: 25px; padding: 0px 15px 0px 15px; color:'+this.color+';">';
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

    toGeneratePDF(){
        let div = document.createElement('div');
        div.setAttribute('id', 'pages');
        div.style.position = 'absolute';
        div.style.top = 0;
        div.style.left = 0;
        div.style.zIndex = '10025';
        for(let i=0; i<this.pages.length; i++){
            div.appendChild(this.pages[i]);
        }
        document.body.appendChild(div)
        window.print();
        // window.onafterprint = function(){
        //     document.head.removeChild(this.script);
        //     document.body.removeChild(document.getElementById('pages'));
        // }
            document.head.removeChild(this.script);
            document.body.removeChild(document.getElementById('pages'));
    }
}