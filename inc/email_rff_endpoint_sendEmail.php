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
        $result = [];
        foreach($emails as $email){
            $result[] = $toolsSendEmail->sendEmail($content, $subject, $email);
        }
        // echo json_encode($content);
        echo json_encode($result);
        
    }else{
        echo json_encode('Classe de envio de email não encontrada. '.$data['url']."email_rff_send_email.php");
    }
}else{
    echo json_encode('Método de requisição não autorizado.');
}


// echo json_encode('Método de requisição não autorizado.');