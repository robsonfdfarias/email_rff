<?php

if(file_exists('email_rff_db_email_controller.php')){
    include_once('email_rff_db_email_controller.php');
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $data = json_decode(file_get_contents('php://input', true));
        $emailController = new EmailRffDBEmailController();
        echo json_encode($emailController->checkEmail($data['idEmailSend']));
    }
}else{
    echo json_encode('Arquivo de controle da base de dados não existe.');
}