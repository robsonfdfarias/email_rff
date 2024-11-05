<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php

$hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
echo '<div style="width:500px;display: flex; flex-wrap: wrap;">';
for($a=0;$a<15;$a+=3){
    for($b=0;$b<15;$b+=3){
        for($c=0;$c<15;$c+=3){
            echo '<div style="padding:5px; background-color:#'.$hex[$a].$hex[$a].$hex[$b].$hex[$b].$hex[$c].$hex[$c].'; width:20px; height:20px;" title="'.$hex[$a].$hex[$a].$hex[$b].$hex[$b].$hex[$c].$hex[$c].'" onclick="selColor(\''.$hex[$a].$hex[$a].$hex[$b].$hex[$b].$hex[$c].$hex[$c].'\')"></div>';
        }
    }
    echo '<br>';
}
echo '</div>';

?>
<div id="tools" style="width:500px;display: flex; flex-wrap: wrap; margin-top:10px;">
<div id="valor" style="width:60px; height: 50px;"></div><div id="hex" style="font-size:1.3rem; padding:13px;">Valor</div><button id="aplicar" onclick="inseriColor()">Aplicar</button>
</div>
<script>
    function selColor(color){
        let valor = document.getElementById('valor');
        valor.setAttribute('style', 'background-color: #'+color+'; width:60px; height: 50px;');
        let hex = document.getElementById('hex');
        hex.innerHTML=color;
    }
    function inseriColor(){
        let hex = document.getElementById('hex');
        // alert(hex.innerHTML)
        top.opener.backColorTextNew(hex.innerHTML);
        window.close();
    }
</script>
</body>
</html>