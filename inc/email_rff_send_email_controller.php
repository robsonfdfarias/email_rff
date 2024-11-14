<?php

class EmailRffSendEmailController{
    private $emailUser;
    function __construct(){
        $current_user = wp_get_current_user();
        $this->emailUser = $current_user->user_email;
    }
    function displaySendEmail($content, $subject){
        $div = '<div class="emailRffDivSendEmail">';
        $div .= '<h1>Envio de e-mail</h1>';
        $div .= '<span>Verifique se o conteúdo do e-mail está correto e depois pode enviar.</span><br><br>';
        $div .= '<div id="rffSubjectEmail"><strong>Assunto: </strong>';
        $div .= $subject;
        $div .= '</div>';
        $div .= '<div id="rffContentEmail" style="border:1px solid #cdcdcd;padding:5px;">';
        $div .= $content;
        $div .= '</div><br><br>';
        $div .= '<div id="divSendEmail">Aguarde o envio do Email<div id="divReturnEmailSending"></div></div>';
        $div .= '<br>';
        $div .= '<button onclick="sendEmail(\''.$this->emailUser.'\')">Enviar email</button>';
        $div .= '<button onclick="cancelSendEmail()">Cancelar</button>';
        $div .= '</div>';
        echo $div;
    }
}