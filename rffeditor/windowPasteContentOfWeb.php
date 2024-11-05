<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="valor" contenteditable='true' style="width:100%; height: 500px; overflow:auto; border: 1px solid #cdcdcd;"></div>
    <button onclick="inserir()">Inserir</button><button onclick="cancelar()">Cancelar</button>
    <script>
        function inserir(){
            let valor = document.getElementById('valor');
            if(valor.innerHTML!=''){
                top.opener.pasteContentOfWeb(valor)
                // window.close();
            }else{
                alert('Está vazio... '+ valor.innerHTML);
            }
        }

        function cancelar(){
            window.close();
        }
    </script>
</body>
</html>