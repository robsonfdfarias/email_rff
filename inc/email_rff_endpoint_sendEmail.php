<?php

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $data = json_decode(file_get_contents('php://input'), true);
    if(file_exists("email_rff_send_email.php")){
        include_once("email_rff_send_email.php");
        $emailUser = $data['emailUser'];
        // $toolsSendEmail = new EmailRffSendEmail('est6884@jaraguadosul.sc.gov.br');
        $toolsSendEmail = new EmailRffSendEmail($emailUser);
        $emails = $data['emails'];
        $subject = $data['subject'];
        $content = $data['content'];
        $result = $toolsSendEmail->sendEmail($content, $subject, $emails);
        echo json_encode($result);
        
    }else{
        echo json_encode('Classe de envio de email não encontrada. ');
    }
}else{
    echo json_encode('Método de requisição não autorizado.');
}
