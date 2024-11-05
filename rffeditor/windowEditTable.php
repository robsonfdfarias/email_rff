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

    #cores{
        background-color: green;
        cursor: pointer;
        opacity: 0.0;
        position:absolute;
        width: 33px;
    }

    #geralInseriImagem{
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

    #inseriImagemCentro{
        width: 600px;
        height: 400px;
        background-color: #fff;
        border: 1px solid #000;
        margin: auto;
        box-shadow: 2px 2px 2px rgba(0,0,0,0.5);
        border-radius: 10px;
        padding: 40px;
        z-index: 10;
    }

    #inseriImagemCentro input, button{
        padding: 10px;
        font-size: 1.1rem;
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

    #inseriEditCentro{
        width: 600px;
        height: 400px;
        background-color: #fff;
        border: 1px solid #000;
        margin: auto;
        box-shadow: 2px 2px 2px rgba(0,0,0,0.5);
        border-radius: 10px;
        padding: 40px;
        z-index: 10;
    }

    #editImagemCentro input, button{
        padding: 10px;
        font-size: 1.1rem;
    }


    input[type="file"]{
        padding: 20px;
        border: 1px solid #cfcfcf;
        font-size: 1.1rem;
    }
    #preview{
        display:none;
    }
    #porcento{
        width:100%;
        height: 260px;
    }
    input[type="text"]{
        width:250px;
    }
    
</style>
</head>
<body>
<div id="geralInseriImagem">
    <div id="glassImageBackground"></div>
    <div id="inseriImagemCentro">
        <input type="text" placeholder="Digite o número de linhas" id="numRow">
        <input type="text" placeholder="Digite o número de colunas" id="numCol">
        <button onclick="insertTab()">Inserir tabela</button><button onclick="cancel()">Cancelar</button>
    </div>
</div>

<script src="upload.js"></script>
<script>
    let sLinhas = localStorage.getItem('linhas');
    let sColunas = localStorage.getItem('colunas');
    document.getElementById('numRow').value = sLinhas;
    document.getElementById('numCol').value = sColunas;
    function insertTab(){
        var numRow = document.getElementById("numRow").value;
        if(numRow<=0 || numRow==null || numRow==''){
            numRow=1;
        }
        var numCol=document.getElementById("numCol").value;
        if(numCol<=0 || numCol==null || numCol==''){
            numCol=1;
        }

        top.opener.insertTableNovo(numRow, numCol);
        window.close();
    }

    function cancel(){
        window.close();
    }
</script>
</body>
</html>