<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php

$tonsCinza = ['000000', '191919', '2c2c2c', '3f3f3f', '545454', '6a6a6a', '808080', '949494', 'a9a9a9', 'bdbebd', 'd3d3d3', 'e9e9e9', 'ffffff'];
$hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
echo '<div style="width:500px;display: flex; flex-wrap: wrap;">';
for($p=0;$p<count($tonsCinza); $p++){
    echo '<div style="padding:5px; background-color:#'.$tonsCinza[$p].'; width:20px; height:20px;" title="'.$tonsCinza[$p].'" onclick="selColor(\''.$tonsCinza[$p].'\')"></div>';
}
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
        top.opener.corText(hex.innerHTML);
        window.close();
    }
</script>
</body>
</html>