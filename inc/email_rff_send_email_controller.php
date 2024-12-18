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
        $div .= $this->updateTags($content);
        $div .= '</div><br><br>';
        $div .= '<div id="divSendEmail">Aguarde o envio do Email<div id="divReturnEmailSending"></div></div>';
        $div .= '<br>';
        $div .= '<button onclick="sendEmail(\''.$this->emailUser.'\')">Enviar email</button>';
        $div .= '<button onclick="cancelSendEmail()">Cancelar</button>';
        $div .= '</div>';
        echo $div;
    }
    function updateTags($content){
        $tags = array(
            "rffTextShadow"=>"span",
            "rffNeonText"=>"span",
            "rffNeonTextEColorWhite"=>"span",
            "rffText3D"=>"span",
            "rffText3DSimples"=>"span",
            "rffText3DExtreme"=>"span",
            "rffTextDegrade"=>"span",
            "rffEfeitoBGText"=>"span",
            "rffEfeitoBGText2"=>"span",
            "rffEfeitoBGText3"=>"span",
            "rffEfeitoBGText4"=>"span",
            "rffEfeitoBGText5"=>"span",
            "rffEfeitoBGText6"=>"span",
            "rffEfeitoBGText7"=>"span",
            "rffEfeitoBGText8"=>"span",
            "rffEfeitoBGText9"=>"span",
            "rffEfeitoBGText10"=>"span",
            "rffEfeitoBGText11"=>"span",
            "rffEfeitoBGText12"=>"span",
            "rffEfeitoBGText13"=>"span",
            "rffEfeitoBGText14"=>"span",
            "rffEfeitoBGText15"=>"span",
            "rffEfeitoBGText16"=>"span",
            "rffEfeitoBGText17"=>"span",
            "rffEfeitoBGText18"=>"span",
            "rffEfeitoBGText19"=>"span"
        );
        foreach($tags as $old=>$new){
            $content = str_ireplace($old, $new, $content);
        }
        return $content;
    }
}