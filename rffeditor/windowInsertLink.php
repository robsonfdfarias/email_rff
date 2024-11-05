<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
<style>
    body{
        background-image: url("imgs/fundo.jpg");
        background-size: 100vw 100vh;
        background-repeat: no-repeat;
        background-position: center top;
    }
    .tabela tr td{
        padding: 10px;
    }
    .table{
        margin:0px;
    }

    #texto{
        min-height: 300px;
        width: 90%;
        box-shadow: 0 0 2px rgba(0,0,0,0.5);
        border:0px solid #000;
        padding: 15px;
    }


    #glassImageBackground{
        background: rgba( 255, 255, 255, 0.35 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 9.5px );
        -webkit-backdrop-filter: blur( 9.5px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        position: absolute;
        left: 0;
        top:0;
        width: 100%;
        height: 100%;
        z-index:5;
    }

    

    #geralEditImagem{
        width:100%;
        height: 100%;
        /*display:flex;*/
        display:flex;
        text-align: center;
        position: absolute;
        top:0;
        left:0;
        background: rgba(0,0,0,0.0);
    }

    #insertLinkCentro{
        max-width: 600px;
        min-height: 150px;
        background-color: #fff;
        border: 1px solid #000;
        margin: auto;
        box-shadow: 2px 2px 2px rgba(0,0,0,0.5);
        border-radius: 10px;
        padding: 40px;
        z-index: 10;
        font-size: 1.5rem;
        font-weight: bold;
        display: grid;
        grid-template-columns: 1fr;
        place-items: end center;
    }
    #ferramentas{
        place-items: end center;
    }
    #titleSpan{
        place-items: start center;
    }
    #imgEditPrev{
        place-items: center center;
    }

    #insertLinkCentro input, button{
        padding: 10px;
        font-size: 1.1rem;
    }

    #inserir{
        color: #fff;
        background-color: #0c582c;
    }

    #inserir:hover{
        color: #fff;
        background-color: green;
        font-weight: bold;
    }

    input[type="url"]{
        width: 100%;
        padding: 20px;
        border: 1px solid #cfcfcf;
        font-size: 1.1rem;
        margin-bottom: 10px;
    }

    input[type="text"]{
        width: 50%;
        padding: 20px;
        border: 1px solid #cfcfcf;
        font-size: 1.1rem;
    }
    #preview{
        display:flex;
    }
    #porcento{
        width:100%;
        height: 260px;
    }
    #ferramentas{
        margin-top: 10px;
    }
    
</style>
</head>
<body>
<div id="geralEditImagem">
    <div id="glassImageBackground"></div>
    <div id="insertLinkCentro">
        <span id="titleSpan">Linserir link na seleção</span>
        <div id="ferramentas">
            <input type="url" placeholder="Insira aqui o link" id="link" required>
            <input type="text" placeholder="digite _blank para abrir em outra janela" id="targets">
            <button onclick="inserirLink()" id="inserir">Inserir link</button><button onclick="cancel()" id="cancelar">Cancelar</button>
        </div>
    </div>
</div>

<script src="upload.js"></script>
<script>
    function inserirLink(){
        var link = document.getElementById("link");
        
        if(link != null && link != ''){
            var targets = document.getElementById("targets");
            if(targets!=null && targets.value=='_blank'){
                targets= ' target="'+targets.value+'"';
            }else{
                targets = ' target="_self"';
            }
            top.opener.link(link.value, targets);
            window.close();
        }else{
            console.log("selecione uma imagem e Clique no botão Carregar e visualizar antes de inserir")
        }
        //top.opener.document.getElementById("porcento").innerHTML = "UHUUUUUUUUUUUUUUUUUUU"
        //top.opener.insertImg();
    }

    function cancel(){
        window.close();
    }
</script>
</body>
</html>