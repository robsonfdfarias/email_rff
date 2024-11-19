<?php

class EmailRffTools{
    function checkIfPostVarEmpty($var){
        if(empty($var)){
            echo '<div class="notice notice-failure is-dismissible" style="top:-50px;"><p>Todos os campos precisam estar preenchidos antes do envio do formulário.</p></div>';
            die();
        }else{
            return sanitize_text_field($var);
        }
    }
    function clear($var){
        $var = str_replace('\"', '"', $var);
        $var = str_replace("\'", "'", $var);
        return $var;
    }
}