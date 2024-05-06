<?php

    //ENVIO DE EMAILS PADRONIZADOS
    class Mailer {
        private $sender_name = 'Saga Home';
        private $sender_email = 'no-reply@sagahome.com.br';
        private $sender_password = 'wVY56]E&7eeD';
        
        private $host_security = 'SSL';
        private $host_protocol = 'SMTP';
        private $host_server = 'mail.sagahome.com.br';
        private $host_port = '465';
        
        private $recipient = null;
        
        private $subject = null;
        private $body_message = null;


        function __construct($recipient, $subject, $body_message) {
            $this->recipient = $recipient;
            $this->subject = $subject;
            $this->body_message = $body_message;
        }

        public function Send() {
            require_once "phpmailer/class.phpmailer.php";
            
            $mail = new PHPMailer();

            $mail->SMTPSecure = strtolower($this->host_security);
            $mail->Host = $this->host_server;  
            $mail->Port = $this->host_port;
            $mail->Username = $this->sender_email;
            $mail->Password = $this->sender_password;
            $mail->SMTPKeepAlive = true;  
            $mail->Mailer = strtolower($this->host_protocol);
            $mail->IsSMTP();
            $mail->SMTPAuth = true;
            $mail->CharSet = 'utf-8';
            $mail->SMTPDebug = 0;


            //DEFINE O REMETENTE
            $mail->From = $this->sender_email;
            $mail->FromName = $this->sender_name;

            $mail->AddAddress($this->recipient);


            //DADOS TECNICOS DA MENSAGEM
            $mail->IsHTML(true);    //EMAIL ENVIADO COMO HTML


            //CORPO DA MENSAGEM
            $mail->Subject = $this->subject;
            $mail->Body = $this->body_message;


            //ENVIAR EMAIL
            $sent_message = $mail->Send();


            //LIMPA OS DESTINATÁRIOS E ANEXOS
            $mail->ClearAllRecipients();
            $mail->ClearAttachments();


            $sent_message_lowercase = strtolower($sent_message);

            if (preg_match('/error/', $sent_message_lowercase) || preg_match('/failed/', $sent_message_lowercase)) {
                throw new Exception($sent_message, 400);
            }
        }
    }

?>