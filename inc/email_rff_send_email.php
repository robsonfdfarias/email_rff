<?php

if(file_exists('../mail/vendor/autoload.php')){
    require_once('../mail/vendor/autoload.php');
}else{
    return "-> <span style='color:red;'>Arquivo do phpmailer não encontrado</span><br>";
    die();
}

class EmailRffSendEmail{
    private $email;
    private $name;
    function __construct($emailUser){
        $this->email = $emailUser;
        $this->name = "Comunicacao interna";
    }
    function sendEmail($content, $subject, $to){
        // Criação de uma instância do PHPMailer
        $mail = new PHPMailer\PHPMailer\PHPMailer();

        // Configuração do servidor de envio de e-mail (usando SMTP)
        $mail->isSMTP();
        $mail->Host = 'webmail.jaraguadosul.sc.gov.br'; //'smtp.seudominio.com'; // Endereço do servidor SMTP
        $mail->SMTPAuth = true;
        $mail->Username = 'no-reply@jaraguadosul.sc.gov.br'; //'seu_email@seudominio.com'; // Seu e-mail de envio
        $mail->Password = 'OGNmNDBk'; // Senha do seu e-mail
        $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS; // Protocólo de segurança
        $mail->Port = 587; // Porta de envio (587 é geralmente usada para TLS)

        // Remetente e destinatário
        $mail->setFrom('no-reply@jaraguadosul.sc.gov.br', $this->name); // E-mail e nome do remetente
        $mail->addAddress($to, $to); // Destinatário do e-mail

        // Assunto e corpo do e-mail
        $mail->Subject = $subject; // 'Assunto do E-mail';
        $mail->Body    = $content; //'Corpo do e-mail em texto simples';
        $mail->isHTML(true);  // Se você quiser enviar o corpo do e-mail em HTML

        // Enviar e verificar se houve sucesso
        if ($mail->send()) {
            return "-> <span style='color:green;'>E-mail HTML enviado com sucesso para</span>: ".$to.'<br>';
        } else {
            return "-> <span style='color:red;'>Falha ao enviar o e-mail para</span>: ".$to.' -> ' . $mail->ErrorInfo.'<br>';
        }
    }
}