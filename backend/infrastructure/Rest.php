<?php

	class Rest {
		public static $code = 501;
		public static $message = 'Funcionalidade não implementada';
		public static $data = [];

		public static function GetArgs() {
			$args = [];
			$args['post'] = $_POST;
			$args['files'] = $_FILES;

			return $args;
		}

		public static function Open($request) {
			try {
				$url = explode('/', $request['url']);

				// Remove o primeiro elemento do array (vazio)
				array_shift($url);


				if (count($url) < 2) {
					throw new Exception("URL com parâmetros inválidos", 400);
				}


				$class = ucfirst($url[0]);
				$method = ucfirst($url[1]);
				$params = array();


				if (!class_exists($class)) {
					throw new Exception("Classe \"$class\" não encontrada", 404);
				}

				if (!method_exists($class, $method)) {
					throw new Exception("Método \"$method\" não encontrado", 404);
				}

				$args = self::GetArgs();
				$class_method = array(new $class($args), $method);
				
				$response = call_user_func_array($class_method, $params);


				self::$code = 200;
				if (isset($response['code'])) {
					self::$code = $response['code'];
				}

				self::$message = "Operacao realizada com sucesso";
				if (isset($response['message'])) {
					self::$message = $response['message'];
				}

				self::$data = [];
				if (isset($response['data'])) {
					self::$data = $response['data'];
				}
			} catch (Exception $e) {
				self::$code = $e->getCode();
				self::$message = $e->getMessage();
				self::$data = [];
			} finally {
				$code = self::$code;
				$message = self::$message;
				$data = self::$data;
				
				header("HTTP/1.1 $code $message");

				if (substr($code, 0, 1) == 2) {
					echo json_encode($data);
				}
			}
		}
	}

?>