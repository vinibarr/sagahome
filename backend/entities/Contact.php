<?php

	class Contact {
		private $_post = null;


		function __construct($args) {
	    	$this->_post = $args['post'];
	    }


		public function SendMail() {
			$recipient = 'contato@sagahome.com.br';

			$subject = StringHelper::Set("Formulário de Contato - {$this->_post['subject']}")->RemoveAccent()->Get();

			$body_message = "<p> Este é um e-mail enviado pelo formulário de contato do website. </p>
			<table>
				<tr>
					<td width='120'> <b> Nome: </b> </td>
					<td> {$this->_post['name']} </td>
				</tr>

				<tr>
					<td width='120'> <b> E-mail: </b> </td>
					<td> {$this->_post['email']} </td>
				</tr>

				<tr>
					<td width='120'> <b> Telefone: </b> </td>
					<td> {$this->_post['phone']} </td>
				</tr>

				<tr>
					<td width='120'> <b> Assunto: </b> </td>
					<td> {$this->_post['subject']} </td>
				</tr>

				<tr>
					<td width='120'> <b> Mensagem: </b> </td>
					<td> {$this->_post['message']} </td>
				</tr>
			</table>";

	    	$mailer = new Mailer($recipient, $subject, $body_message);
			$mailer->Send();
	    }
	}

?>