<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!--<div id="preview" style="max-width:800px;">-</div>
    <div id="lista" style="max-width:800px;align-items: center; display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center;"></div>-->
    <div id="lista" style="max-width:100%;  background-color: white; padding:20px; height: 93%;"></div>

    <script>
        var dirEditor = localStorage.getItem('POSTS_RFF_DIR_EDITOR');
        dirEditor = dirEditor.replace('rffeditor/', '');
        var folder = dirEditor+'imagens';
        var urlFiles = localStorage.getItem('POSTS_RFF_URL_EDITOR');
        function getListFiles(files){
            const xhttp = new XMLHttpRequest();
            xhttp.onload=function(){
                document.getElementById('lista').innerHTML = this.responseText;
            }
            xhttp.open("GET", "getListFiles.php?pasta="+files+"&url="+urlFiles);
            xhttp.send();
        }
        getListFiles(folder);
        function clickFile(arquivo, files){
            //alert(files);
            if(arquivo=='pasta'){
                //pasta
                //alert(files)
                getListFiles(files);
            }else{
                //arquivo
                if(files!=null && files != '' && files != undefined){
                    var imgDiv = document.getElementById('porcento');
                    // imgDiv.innerHTML = '<img src="'+folder+"/"+files+'" id="previewImage" width="300">';
                    imgDiv.innerHTML = '<img src="'+files+'" id="previewImage" width="300">';
                }else{
                    //se não existir nada em files
                    alert("Não existe o arquivo");
                }
            }
            
        }
    </script>
</body>
</html>