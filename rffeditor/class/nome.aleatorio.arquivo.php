<?php

class NomeAleratorioArquivo{
    function nomeAleatorio($nome){
        $ext = $nome;
        $ext = explode(".", $ext);
        $calc = count($ext)-1;
        $extencao = $ext[$calc];
        $nomeAleatorio = date("Y-m-d_H-i-s_").substr($_FILES['file']['name'], 0, 30).".".$extencao;
        return $nomeAleatorio;
    }
}

?>