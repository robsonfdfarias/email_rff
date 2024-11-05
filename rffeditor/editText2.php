<!DOCTYPE html>
<html lang="en">

<head>

<title>Editor de Texto JavaScript ::: Linha de Código (Robson Farias)</title>
    <link rel="stylesheet" type="text/css" href="<?php echo POSTS_RFF_URL_EDITOR; ?>editorRobsonFarias.css" />
    <link rel="stylesheet" type="text/css" href="<?php echo POSTS_RFF_URL_EDITOR; ?>janMovEdiExc.css" />
<style>
    .tabela tr td{
        padding: 10px;
    }
    .table{
        margin:0px;
    }
 

    #typefontface option:nth-child(2){
        font-family: 'monospace';
    }

    #typefontface option:nth-child(3){
        font-family: 'Arial';
    }

    #typefontface option:nth-child(4){
        font-family: 'Courier';
    }

    #typefontface option:nth-child(5){
        font-family: 'Verdana';
    }

    #typefontface option:nth-child(6){
        font-family: 'Tahoma';
    }

    #typefontface option:nth-child(7){
        font-family: 'Inter';
    }

    #typefontface option:nth-child(8){
        font-family: 'Bebas Neue';
    }

    #texto{
        /* min-height: 300px; */
        height: 300px;
        width: calc(100%-20px);
        box-shadow: 0 0 2px rgba(0,0,0,0.5);
        border:0px solid #000;
        padding: 15px;
        border-radius: 10px;
        resize: vertical;
        overflow: auto;
        box-sizing: border-box;
    }
    

    #cores{
        background-color: green;
        cursor: pointer;
        /*opacity: 0.0;*/
        position:relative !important;
        opacity: 1;
        width: 35px !important;
        height: 35px !important;
        margin-top: 25px;
    }
    #divCorText{
        display:none;
        flex-direction: column;
        position: absolute;
        width: 300px;
        min-height: 200px;
        top: 50px;
        background-color: white;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
    #topCorText{
        display:flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
    }
    #fecharDivCorText{
        padding: 5px 10px;
        background-color: #0c852c;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
    }
    #fecharDivCorText:hover{
        background-color: rgb(32, 254, 47);
        color: #000;
    }


    #coresDestaque{
        background-color: green;
        cursor: pointer;
        /*opacity: 0.0;*/
        position:relative !important;
        opacity: 1;
        width: 35px !important;
        height: 35px !important;
        margin-top: 25px;
    }
    #divCorDestText{
        display:none;
        flex-direction: column;
        position: absolute;
        width: 300px;
        min-height: 200px;
        top: 50px;
        background-color: white;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
    #topCorDestText{
        display:flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
    }
    #fecharDivCorDestText{
        padding: 5px 10px;
        background-color: #0c852c;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
    }
    #fecharDivCorDestText:hover{
        background-color: rgb(32, 254, 47);
        color: #000;
    }


    #geralInseriImagem{
        width:100%;
        height: 100%;
        /*display:flex;*/
        display:none;
        text-align: center;
        position: absolute;
        top:0;
        left:0;
        background: rgba(0,0,0,0.0);
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
        display: none;
    }
    input[type="text"]{
        width:150px;
    }

    .p::first-letter {
        font-size: 2.5rem;
        font-weight: bold;
        color: #0c582c;
        float: left;
        margin: -5px 5px;
    }

    #fundoEfeitoTexto{
        width: 100%;
        position: absolute;
        margin: auto;
        left:-20px;
        top: -10px;
        background-color: rgba(0,0,0,0.5);
        padding: 20px;
        height: 100%;
        /* overflow-y: auto; */
        display: none;
    }

    #efeitosTexto {
        width: 90%;
        position: relative;
        margin: auto;
        background-color: white;
        padding: 20px;
        height: 86%;
        /* overflow-y: auto; */
        display: none;
        flex-direction: column;
        border: 1px solid #dfdfdf;
        box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
        border-radius: 8px;
    }
    #topEfeitoTexto{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        border-bottom: 1px solid #dfdfdf;
    }
    #listaEfeitoTexto{
        overflow-y: auto;
        display: flex;
        flex-direction: column;
    }
    #listaEfeitoTexto button{
        background-color: white;
        border: none;
    }
    #tituloEfeitoTexto{
        font-size: 40px;
        font-weight: 900;
    }
    #fecharEfeitosTexto{
        padding: 10px 15px;
        font-size: 20px;
        font-weight: 900;
        background-color: #0c852c;
        margin-bottom: 10px;
        border-radius: 4px;
        color: white;
        cursor: pointer;
    }
    #fecharEfeitosTexto:hover{
        background-color: rgb(21, 206, 77);
    }
    
    #ferramentas {
        /* align-items: center; */
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        /* justify-content: center; */
        margin-bottom: 10px;
    }
    #ferramentas select{
        padding: 5px;
        border: 1px solid #dfdfdf;
        border-radius: 4px;
        font-size: 20px;
    }

    

    #fundoEmotions{
        width: 100%;
        position: absolute;
        margin: auto;
        left:-20px;
        top: -10px;
        background-color: rgba(0,0,0,0.5);
        padding: 20px;
        height: 100%;
        /* overflow-y: auto; */
        display: none;
    }
    

    #emotions {
        width: 90%;
        position: relative;
        margin: auto;
        background-color: white;
        padding: 20px;
        height: 84%;
        /* overflow-y: auto; */
        display: none;
        flex-direction: column;
        border: 1px solid #dfdfdf;
        box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
        border-radius: 8px;
    }
    #topEmotions{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        border-bottom: 1px solid #dfdfdf;
    }
    #listaEmotions{
        overflow-y: auto;
        display: flex;
        flex-direction: column;
    }
    #listaEmotions button{
        background-color: white;
        border: none;
    }
    #tituloEmotions{
        font-size: 40px;
        font-weight: 900;
    }
    #fecharEmotions{
        padding: 10px 15px;
        font-size: 20px;
        font-weight: 900;
        background-color: #0c852c;
        margin-bottom: 10px;
        border-radius: 4px;
        color: white;
        cursor: pointer;
    }
    #fecharEmotions:hover{
        background-color: rgb(21, 206, 77);
    }

    .emotionsList{
        padding:20px;
        word-break: break-all;
        margin: 0 5px;
    }
    
    .emotionsList img{
            max-width:50px;
            max-height: 50px;
            cursor: pointer;
            transition: ease all 0.3s;
        }
    .emotionsList img:hover{
            transform: scale(1.2);
            transition: ease all 0.3s;
        }

    @media screen and (max-width: 500px){
        .emotionsList{
            width:auto;
            padding:5px;
            word-break: break-all;
            margin: 0 3px;
        }
        #emotions{
            margin: 0;
        }
        #tituloEmotions{
            font-size: 30px;
        }
        .emotionsList img{
            width:40px;
        }
    }





    .payment-methods {
        list-style: none;
        margin: 10px 0;
        padding: 0;
        padding-bottom: 30px;
    }

    .payment-methods:after {
        content: "";
        clear: both;
    }

    .payment-method {
        border: 1px solid #ccc;
        box-sizing: border-box;
        float: left;
        height: 50px;
        position: relative;
        width: 50px;
    }

    .payment-method label {
        background: #fff no-repeat center center;
        bottom: 1px;
        cursor: pointer;
        display: block;
        font-size: 0;
        left: 1px;
        position: absolute;
        right: 1px;
        text-indent: 100%;
        top: 1px;
        white-space: nowrap;
    }

    .payment-method + .payment-method {
        margin-left: 8px;
        display: inline-flex;
    }

    .breakTextLeft label {
        color: #000;
        /* background-image: url(https://dl.dropbox.com/s/yvzrr9o54s2llkr/uol.png); */
        background-image: url(<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/alignMedia-breakText-left.svg);
    }

    .breakTextCenter label {
        color: #000;
        /* background-image: url(https://dl.dropbox.com/s/yvzrr9o54s2llkr/uol.png); */
        background-image: url(<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/alignMedia-breakText-center.svg);
    }

    .breakTextRight label {
        color: #000;
        /* background-image: url(https://dl.dropbox.com/s/yvzrr9o54s2llkr/uol.png); */
        background-image: url(<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/alignMedia-breakText-right.svg);
    }

    .esquerda label {
        /* background-image: url(https://dl.dropbox.com/s/i4z39zy2mtb7xq1/paypal.png); */
        background-image: url(<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/alignMedia-float-left.svg);
    }

    .direita label {
        /* background-image: url(https://dl.dropbox.com/s/myj41602bom0g8p/bankslip.png); */
        background-image: url(<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/alignMedia-float-right.svg);
    }

    .payment-methods input:focus + label {
        outline: 2px dotted #21b4d0;
    }

    .payment-methods input:checked + label {
        outline: 4px solid #21b4d0;
    }

    .payment-methods input:checked + label:after {
        background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+Y2hlY2tlZDwvdGl0bGU+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iY2hlY2tlZCIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTEwLjAwNDkyODUsMjAgQzE1LjQ5NTMxNzksMjAgMjAsMTUuNDkzMDk2NiAyMCwxMCBDMjAsNC40OTcwNDE0MiAxNS40OTUzMTc5LDAgOS45OTUwNzE0NiwwIEM0LjUwNDY4MjExLDAgMCw0LjQ5NzA0MTQyIDAsMTAgQzAsMTUuNDkzMDk2NiA0LjUwNDY4MjExLDIwIDEwLjAwNDkyODUsMjAgWiIgZmlsbD0iIzIxQjREMCI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNOS4wNDQ0MDE1NCwxNiBDOC41OTA3MzM1OSwxNiA4LjIzMzU5MDczLDE1Ljc3NDM1OSA3Ljk1MzY2Nzk1LDE1LjQyNTY0MSBMNS4zMzc4Mzc4NCwxMi4xNjQxMDI2IEM1LjA5NjUyNTEsMTEuODc2OTIzMSA1LDExLjYxMDI1NjQgNSwxMS4yOTIzMDc3IEM1LDEwLjYyNTY0MSA1LjUzMDg4ODAzLDEwLjA5MjMwNzcgNi4xNDg2NDg2NSwxMC4wOTIzMDc3IEM2LjUwNTc5MTUxLDEwLjA5MjMwNzcgNi43ODU3MTQyOSwxMC4yNTY0MTAzIDcuMDM2Njc5NTQsMTAuNTUzODQ2MiBMOS4wMjUwOTY1MywxMy4wNTY0MTAzIEwxMi44MTg1MzI4LDYuNjg3MTc5NDkgQzEzLjA5ODQ1NTYsNi4yMzU4OTc0NCAxMy40MTY5ODg0LDYgMTMuODMyMDQ2Myw2IEMxNC40NDAxNTQ0LDYgMTUsNi40ODIwNTEyOCAxNSw3LjE0ODcxNzk1IEMxNSw3LjQwNTEyODIxIDE0LjkwMzQ3NDksNy42OTIzMDc2OSAxNC43MzkzODIyLDcuOTU4OTc0MzYgTDEwLjEyNTQ4MjYsMTUuMzY0MTAyNiBDOS44NjQ4NjQ4NiwxNS43NTM4NDYyIDkuNDY5MTExOTcsMTYgOS4wNDQ0MDE1NCwxNiBaIiBpZD0iUGF0aCIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);
        bottom: -10px;
        content: "";
        display: inline-block;
        height: 20px;
        position: absolute;
        right: -10px;
        width: 20px;
    }

    @-moz-document url-prefix() {
        .payment-methods input:checked + label:after {
            bottom: 0;
            right: 0;
            background-color: #21b4d0;
        }
    }



    


    #editVideo {
        min-width: 200px;
        max-width: 400px;
        position: fixed;
        /* position: sticky; */
        /* position: absolute; */
        top: 100px;
        left: 0px;
        margin: auto;
        background-color: white;
        padding: 20px;
        /* height: 70%; */
        /* overflow-y: auto; */
        display: none;
        flex-direction: column;
        border: 1px solid #dfdfdf;
        box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
        border-radius: 8px;
        z-index: 10001;
        padding-top: 50px;
        background-image: url('<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/arrastar.png');
        background-size: 100% 8%;
        background-repeat: repeat-x;
    }

    #editVideo input[type="number"]{
        width: calc(100% - 20px) !important;
        /* margin-bottom: 10px; */
    }
    #editVideo #addCaption{
        /* margin-top: 10px; */
    }

    #editVideo table tr td{
        justify-content: center;
        padding-bottom: 10px;
    }


    #editVideo {
        -webkit-user-select: none;
        -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;
        /* position: absolute; */
    }

    #pages #footer{
        background-color: white;
    }
    

    
@media print{
    .configTable{
        visibility: hidden;
        display: none;
    }
}


#ferramentas #tamFont{
    padding-right: 20px;
}

</style>

</head>

<body>
    
<script src="<?php echo POSTS_RFF_URL_EDITOR; ?>js/historyStack.js"></script>
<div id="editVideo" onmousedown="getEventDrag(this)">
    <table width="100%" onmousedown="removeDrag()">
        <tr style="margin">
            <td width="50"><img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/config-tam-width.svg" alt="Largura" title="Largura" width="100%" hieght="100%"></td>
            <td style="width: calc(100% - 50px);"><input type="number" name="larg" id="larg"></td>
        </tr>
        <tr>
            <td width="50"><img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/config-tam-height.svg" alt="Altura" title="Altura" width="100%" hieght="100%"></td>
            <td style="width: calc(100% - 50px);"><input type="number" name="alt" id="alt"></td>
        </tr>
        <tr>
            <td width="50"><img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/config-resource-alt.svg" alt="Recurso alt" title="Recurso alt" width="100%" hieght="100%"></td>
            <td style="width: calc(100% - 50px);"><input type="text" name="resourceAlt" id="resourceAlt" title="Adicionar recurso de alt" alt="Adicionar recurso de alt"></td>
        </tr>
        <tr>
            <td width="50"><img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/config-resource-title.svg" alt="Recurso title" title="Recurso title" width="100%" hieght="100%"></td>
            <td style="width: calc(100% - 50px);"><input type="text" name="resourceTitle" id="resourceTitle" title="Adicionar recurso de title" alt="Adicionar recurso de title"></td>
        </tr>
    </table>
    
    <button onclick="getSetCaption(nodePai)" id="addCaption" onmousedown="removeDrag()">Adicionar Caption</button>
    <ul class="payment-methods" onmousedown="removeDrag()">
        <li class="payment-method esquerda">
            <input name="payment_methods" type="radio" id="esquerda">
            <label for="esquerda">esquerda</label>
        </li>

        <li class="payment-method direita">
            <input name="payment_methods" type="radio" id="direita">
            <label for="direita">direita</label>
        </li>

        <li class="payment-method breakTextLeft">
            <input name="payment_methods" type="radio" id="breakTextLeft">
            <label for="breakTextLeft">solto</label>
        </li>

        <li class="payment-method breakTextCenter">
            <input name="payment_methods" type="radio" id="breakTextCenter">
            <label for="breakTextCenter">breakTextCenter</label>
        </li>

        <li class="payment-method breakTextRight">
            <input name="payment_methods" type="radio" id="breakTextRight">
            <label for="breakTextRight">breakTextRight</label>
        </li>
    </ul><br>
    <span id="tipoObj" style="display:none;"></span>
    <button onclick="salveUpdateIframe()" onmousedown="removeDrag()">alterar</button>
    <button onclick="cancelEditMedia()" onmousedown="removeDrag()">Cancelar</button>
</div>

<div id="fundoEfeitoTexto">
    <div id="efeitosTexto">
        <div id="topEfeitoTexto">
            <div id="tituloEfeitoTexto">Efeitos de texto</div>
            <div id="fecharEfeitosTexto" onclick="fechaJanEfeitosTexto()">X</div>
        </div>
            <button id="testeSel" onclick="fechaJanEfeitosTexto(), delElement()">Remover efeito</button>
        <div id="listaEfeitoTexto">
            <button onClick="insertTag('rffEfeitoBGText'), fechaJanEfeitosTexto()"><rffEfeitoBGText>rff Efeito BG Text 1</rffEfeitoBGText></button><br>
            <button onClick="insertTag('rffEfeitoBGText2'), fechaJanEfeitosTexto()"><rffEfeitoBGText2>rff Efeito BG Text 2</rffEfeitoBGText2></button><br>
            <button onClick="insertTag('rffEfeitoBGText3'), fechaJanEfeitosTexto()"><rffEfeitoBGText3>rff Efeito BG Text 3</rffEfeitoBGText3></button><br>
            <button onClick="insertTag('rffEfeitoBGText4'), fechaJanEfeitosTexto()"><rffEfeitoBGText4>rff Efeito BG Text 4</rffEfeitoBGText4></button><br>
            <button onClick="insertTag('rffEfeitoBGText5'), fechaJanEfeitosTexto()"><rffEfeitoBGText5>rff Efeito BG Text 5</rffEfeitoBGText5></button><br>
            <button onClick="insertTag('rffEfeitoBGText6'), fechaJanEfeitosTexto()"><rffEfeitoBGText6>rff Efeito BG Text 6</rffEfeitoBGText6></button><br>
            <button onClick="insertTag('rffEfeitoBGText7'), fechaJanEfeitosTexto()"><rffEfeitoBGText7>rff Efeito BG Text 7</rffEfeitoBGText7></button><br>
            <button onClick="insertTag('rffEfeitoBGText8'), fechaJanEfeitosTexto()"><rffEfeitoBGText8>rff Efeito BG Text 8</rffEfeitoBGText8></button><br>
            <button onClick="insertTag('rffEfeitoBGText9'), fechaJanEfeitosTexto()"><rffEfeitoBGText9>rff Efeito BG Text 9</rffEfeitoBGText9></button><br>
            <button onClick="insertTag('rffEfeitoBGText10'), fechaJanEfeitosTexto()"><rffEfeitoBGText10>rff Efeito BG Text 10</rffEfeitoBGText10></button><br>
            <button onClick="insertTag('rffEfeitoBGText11'), fechaJanEfeitosTexto()"><rffEfeitoBGText11>rff Efeito BG Text 11</rffEfeitoBGText11></button><br>
            <button onClick="insertTag('rffEfeitoBGText12'), fechaJanEfeitosTexto()"><rffEfeitoBGText12>rff Efeito BG Text 12</rffEfeitoBGText12></button><br>
            <button onClick="insertTag('rffEfeitoBGText13'), fechaJanEfeitosTexto()"><rffEfeitoBGText13>rff Efeito BG Text 13</rffEfeitoBGText13></button><br>
            <button onClick="insertTag('rffEfeitoBGText14'), fechaJanEfeitosTexto()"><rffEfeitoBGText14>rff Efeito BG Text 14</rffEfeitoBGText14></button><br>
            <button onClick="insertTag('rffEfeitoBGText15'), fechaJanEfeitosTexto()"><rffEfeitoBGText15>rff Efeito BG Text 15</rffEfeitoBGText15></button><br>
            <button onClick="insertTag('rffEfeitoBGText16'), fechaJanEfeitosTexto()"><rffEfeitoBGText16>rff Efeito BG Text 16</rffEfeitoBGText16></button><br>
            <button onClick="insertTag('rffEfeitoBGText17'), fechaJanEfeitosTexto()"><rffEfeitoBGText17>rff Efeito BG Text 17</rffEfeitoBGText17></button>
            <button onClick="insertTag('rffEfeitoBGText18'), fechaJanEfeitosTexto()"><rffEfeitoBGText18>rff Efeito BG Text 18</rffEfeitoBGText18></button>
            <button onClick="insertTag('rffEfeitoBGText19'), fechaJanEfeitosTexto()"><rffEfeitoBGText19>rff Efeito BG Text 19</rffEfeitoBGText19></button>
        </div>
    </div>
</div>



<div id="fundoEmotions">
    <div id="emotions">
        <div id="topEmotions">
            <div id="tituloEmotions">Efeitos de texto</div>
            <div id="fecharEmotions" onclick="fechaJanEmotions()">X</div>
        </div>
        <div id="listaEmotions">
            <?php
                include_once(POSTS_RFF_DIR_EDITOR."class/list-file.class.php");
                $emotions = new ListFile();
                $emotions->listFiles(POSTS_RFF_DIR_EDITOR.'icones');
            ?>
        </div>
    </div>
</div>



<?php
    // include_once(POSTS_RFF_DIR_EDITOR."barra_ferramentas_original.php");
    include_once(POSTS_RFF_DIR_EDITOR."barra_ferramentas_lucide.php");
?>



<div id="conteiner">
    <div id="texto" contenteditable="true" autofocus required autocomplete="off" spellcheck="true" class="box" style="font-size: 1.3em;"><div>Digite o seu artigo aqui...</div></div>
    
</div>


        <div id="preview"></div>
        <div id="porcento"></div>

<div id="scriptsImports"></div>
<script src="<?php echo POSTS_RFF_URL_EDITOR; ?>js/editorRffGeral.js"></script>
</body>
</html>