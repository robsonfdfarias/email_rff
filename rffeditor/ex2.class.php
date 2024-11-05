<?php
// $pasta = '../../imagens/';

// Checa se o protocolo é HTTPS ou HTTP
$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';

// Obtém o nome do host
$host = $_SERVER['HTTP_HOST'];

// Obtém o caminho do script atual
$requestUri = $_SERVER['REQUEST_URI'];

// Constrói a URL completa
$currentUrl = $protocol . '://' . $host . $requestUri;


$url_rff_dir_editor = dirname(__FILE__);
$url_rff_dir_editor2 = str_replace('rffeditor', '', $url_rff_dir_editor);
$pasta = $url_rff_dir_editor2.'imagens/';
$ano = date('Y');
$mes = date('m');
$dia = date('d');
$pasta .= $ano.'/'.$mes.'/'.$dia.'/';
$currentUrl = str_replace('rffeditor/ex2.class.php', '', $currentUrl);
$currentUrl .= 'imagens/'.$ano.'/'.$mes.'/'.$dia.'/';

if(!file_exists($pasta)){
  mkdir($pasta, 0777, true);
}
ini_set('upload_max_filesize', '10M');
if (isset($_FILES['file']) && !empty($_FILES['file']['name'])) {
  //substr($linha->resumo, 0,120)
    //$nomeAleatorio = date("Y-m-d_H-i-s_").$_FILES['file']['name'];
    include_once($url_rff_dir_editor."/class/nome.aleatorio.arquivo.php");
    $aleatorio = new NomeAleratorioArquivo();
    $nomeAleatorio = $aleatorio->nomeAleatorio($_FILES['file']['name']); 
    //echo $nomeAleatorio."<br>";
  //file_put_contents($pasta.'post.txt', 'name=' . $_POST['name'] . ',count=' . $_POST['i'] . PHP_EOL, FILE_APPEND);
  move_uploaded_file($_FILES['file']['tmp_name'], $pasta . $nomeAleatorio);

  $ret = array('status' => 'ok', 'img' => $currentUrl . $nomeAleatorio);
} else {
  $ret = array('status' => 'no_file');
}

header('Content-Type: application/json');
header('Accept: application/json');
echo json_encode($ret);
exit;

?>