<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h2>Configuração da célula</h2>
<div>
    <button onclick="window.open('windowInsertImageBackgroundTable.php', '_blank', 'height=600, width=800, top=50, left=100, scrollbar=no, fullscreen=no')">Selecionar Imagem</button><div id="viewImage"></div>
</div>
<div>Tamanho da imagem: 
<input type="range" list="tickmarks" min="0" max="100" step="1" value="1" id="size" name="size">
<datalist id="tickmarks">
<option value="0" label="0%">
<option value="5">
<option value="10">
<option value="15">
<option value="20">
<option value="25">
<option value="30">
<option value="35">
<option value="40">
<option value="45">
<option value="50" label="50%">
<option value="55">
<option value="60">
<option value="65">
<option value="70">
<option value="75">
<option value="80">
<option value="85">
<option value="90">
<option value="95">
<option value="100" label="100%">
</datalist><span id="valueSize"></span>
</div><br>
<div>Margem esquerda: 
<input type="range" list="listMarginLeft" min="0" max="100" step="1" value="1" id="marginLeft" name="marginLeft">
<datalist id="listMarginLeft">
<option value="0" label="0%">
<option value="5">
<option value="10">
<option value="15">
<option value="20">
<option value="25">
<option value="30">
<option value="35">
<option value="40">
<option value="45">
<option value="50" label="50%">
<option value="55">
<option value="60">
<option value="65">
<option value="70">
<option value="75">
<option value="80">
<option value="85">
<option value="90">
<option value="95">
<option value="100" label="100%">
</datalist><span id="valueMarginLeft"></span>
</div><br>
<div>Margem topo: 
<input type="range" list="listMarginTop" min="0" max="100" step="1" value="1" id="marginTop" name="marginTop">
<datalist id="listMarginTop">
<option value="0" label="0%">
<option value="5">
<option value="10">
<option value="15">
<option value="20">
<option value="25">
<option value="30">
<option value="35">
<option value="40">
<option value="45">
<option value="50" label="50%">
<option value="55">
<option value="60">
<option value="65">
<option value="70">
<option value="75">
<option value="80">
<option value="85">
<option value="90">
<option value="95">
<option value="100" label="100%">
</datalist><span id="valueMarginTop"></span>
</div><br>
Repetir imagem: 
<select name="typeBorder" id="repeatImage" required="repeatImage">
    <option value="no-repeat">Não repetir</option>
    <option value="repeat-y">Repetir na vertial</option>
    <option value="repeat-x">Repetir na horizontal</option>
</select>
<br><br>
Começar imagem: 
<select name="typeBorder" id="originImage" required="originImage">
    <option value="padding-box">Começar da margem da tabela</option>
    <option value="border-box">Começar da borda da tabela</option>
    <option value="content-box">Começar do limite da janela</option>
</select>
<br><br>
<div><button id="aplicar" onclick="insertConfig()">Aplicar</button>
<button id="removeCor" onclick="removeConfig()">Remover Configurações</button></div><br>
</div>
<script>
    var originChar = [['padding-box', 'Começar da margem da tabela'], ['border-box', 'Começar da borda da tabela'], ['content-box', 'Começar do limite da janela']];
    var repeatChar = [['no-repeat', 'Não repetir'], ['repeat-y', 'Repetir na vertial'], ['repeat-x', 'Repetir na horizontal']];
    console.log(localStorage.getItem('style'))
    const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
    }).join('');
    // console.log(rgbToHex(255, 5, 255));
    if(localStorage.getItem('style')!=null){
        let style = localStorage.getItem('style');
        let styleChar = style.split(';');
        let dirText = '';
        for(let i =0; i<styleChar.length; i++){
            let attrib = styleChar[i].split(':');
            if(attrib[0]==' background' || attrib[0]=='background'){
                let urlG = attrib[2].split(' ');
                console.log(urlG)
                //Imagem url
                let url = urlG[0].replace('url(\'', '');
                url = url.replace('\')', '');
                url=url.substring(url.indexOf('/imagens') + 3);
                url='../../im'+url;
                console.log('URL: '+url)
                let divIm = document.getElementById('viewImage');
                divIm.innerHTML = '<img src="'+url+'" width="50" height="50">';
                //Alinhamento LEFT
                let leftAl = urlG[1].split('+');
                leftAl=leftAl[1].replace('px', '');
                console.log('Left: '+leftAl)
                document.getElementById('marginLeft').value = leftAl;
                //Alinhamento TOP
                let topAl = urlG[2].split('+');
                topAl=topAl[1].replace('px', '');
                console.log('Topo: '+topAl)
                document.getElementById('marginTop').value = topAl;
                //Imagem SIZE
                let sizeImg = urlG[4].replace('%', '');
                console.log('SIze: '+sizeImg)
                document.getElementById('size').value = sizeImg;
                //REPEAT image
                let repeat = urlG[5];
                console.log('Repeat: '+repeat);
                let nomeRep = '';
                for(let i=0; i<repeatChar.length; i++){
                    if(repeatChar[i][0]==repeat){
                        nomeRep = repeatChar[i][1];
                    }
                }
                let option = new Option('-> Atual - '+nomeRep, repeat);
                option.setAttribute('selected', 'selected');
                document.getElementById('repeatImage').add(option);
                //ORIGIN image
                let origin = urlG[6];
                console.log('Origin: '+origin);
                let nomeOrig = '';
                for(let i=0; i<originChar.length; i++){
                    if(originChar[i][0]==origin){
                        nomeOrig = originChar[i][1];
                    }
                }
                let option2 = new Option('-> Atual - '+nomeOrig, origin);
                option2.setAttribute('selected', 'selected');
                document.getElementById('originImage').add(option2);
                // document.getElementById('expessura').value = exp;
                // let option = new Option(borderAtt[2]+' -> Atual', borderAtt[2]);
                // option.setAttribute('selected', 'selected');
                // document.getElementById('typeBorder').add(option);

                // let rr = borderAtt[3].split('(')[1];
                // rr= rr.replace(',', '');
                // let gg = borderAtt[4].replace(',', '');
                // let bb = borderAtt[5].replace(')', '');
                // document.getElementById('colorBorder').value = rgbToHex(parseInt(rr), parseInt(gg), parseInt(bb));
                //
            }
            // if(attrib[0]==' padding' || attrib[0]=='padding'){
            //     let val = attrib[1].replace(' ', '');
            //     val = val.replace('px', '');
            //     // console.log(val)
            //     document.getElementById('paddingBorder').value = val;
            // }
            // if(attrib[0]==' background-color' || attrib[0]=='background-color'){
            //     let ops = attrib[1].split(' ');
            //     let rr = '';
            //     rr = ops[1].replace('rgb(', '');
            //     rr = rr.replace(',', '');
            //     let gg = ops[2].replace(',', '');
            //     let bb = ops[3].replace(')', '');
            //     console.log(rr+' - '+gg+' - '+bb)
            //     document.getElementById('colorbackg').value = rgbToHex(parseInt(rr), parseInt(gg), parseInt(bb));
            // }
            // if(attrib[0]==' writing-mode' || attrib[0]=='writing-mode'){
            //     dirText+= attrib[1].replace(' ', '');
            // }
            // if(attrib[0]==' text-orientation' || attrib[0]=='text-orientation'){
            //     dirText+= attrib[1].replace(' ', '');
            // }
        }
        if(dirText!=''){
            let option = new Option('Opção atual', dirText);
            option.setAttribute('selected', 'selected');
            document.getElementById('textDirection').add(option);
        }
    }
    document.getElementById('size').addEventListener('input', function(){
        let valor = document.getElementById('size').value;
        if(valor == 0 && valor == '0'){
            valor = 'contain';
        }else{
            valor +='%';
        }
        document.getElementById('valueSize').innerHTML = '<strong>'+valor+'</strong>';
    })
    document.getElementById('marginLeft').addEventListener('input', function(){
        let valor = document.getElementById('marginLeft').value;
        if(valor == 0 && valor == '0'){
            valor = '0px';
        }else{
            valor +=' px';
        }
        document.getElementById('valueMarginLeft').innerHTML = '<strong>'+valor+'</strong>';
    })
    document.getElementById('marginTop').addEventListener('input', function(){
        let valor = document.getElementById('marginTop').value;
        if(valor == 0 && valor == '0'){
            valor = '0px';
        }else{
            valor +=' px';
        }
        document.getElementById('valueMarginTop').innerHTML = '<strong>'+valor+'</strong>';
    })
    function insertConfig(){

        let divImg = document.getElementById('viewImage');
        if(divImg.innerHTML==''){
            alert('Nenhuma imagem selecionada. Selecione uma imagem ou clique em cancelar.')
            return false;
        }
        let img = divImg.children[0];
        if(img.src!='' && img.src!=null && img.src!='undefined'){
            let size = document.getElementById('size').value;
            size=size+'%';
            let repeatImage = document.getElementById('repeatImage').value;
            let originImage = document.getElementById('originImage').value;
            let marginLeft = document.getElementById('marginLeft').value;
            marginLeft='left+'+marginLeft+'px';
            let marginTop = document.getElementById('marginTop').value;
            marginTop='top+'+marginTop+'px';
            if(size==0 && size=='0'){
                size = 'contain';
            }
            let config = 'url(\''+img.src+'\') '+marginLeft+' '+marginTop+' / '+size+' '+repeatImage+' '+originImage;
            console.log(config)
            top.opener.configBackgroundTable(config);
            localStorage.setItem('style', null);
            window.close();
        }
    }
    function removeConfig(){
        let remove = 'limpar';
        top.opener.configBackgroundTable(remove);
            localStorage.setItem('style', null);
        window.close();
    }
</script>
</body>
</html>