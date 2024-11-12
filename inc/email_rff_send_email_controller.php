<?php

if(file_exists(EMAIL_RFF_CORE_INC."email_rff_send_email.php")){
    include_once(EMAIL_RFF_CORE_INC."email_rff_send_email.php");
}

class EmailRffSendEmailController{
    private $sendEmail;
    function __construct(){
        $current_user = wp_get_current_user();
        $this->sendEmail = new EmailRffSendEmail($current_user->user_email);
    }
    function sendEmailForList($listEmail, $content, $subject){
        if(count($listEmail)>0){
            foreach($listEmail as $email){
                $this->sendEmail->sendEmail($content, $subject, $email);
                usleep(100000);//espera 100 milisegundos
            }
        }
    }
    function displaySendEmail($listEmail, $content, $subject){
        //
    }
}