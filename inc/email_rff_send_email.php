<?php


class EmailRffSendEmail{
    private $replyEmail;
    function __construct($replyEmail){
        $this->replyEmail = $replyEmail;
    }
    function sendEmail($content, $subject, $to){
        $message = "<html><body>";
        $message .= $content;
        $message .= "</body></html>";
        // Cabeçalhos
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
        $headers .= "From: ".$this->replyEmail."\r\n";
        $headers .= "Reply-To: ".$this->replyEmail."\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();

        // Enviando o e-mail
        if(mail($to, $subject, $message, $headers)) {
            return "-> <span style='color:green;'>E-mail HTML enviado com sucesso para</span>: ".$to.'<br>';
        } else {
            return "-> <span style='color:red;'>Falha ao enviar o e-mail para</span>: ".$to.'<br>';
        }
    }
}