<?php

	class Health {
		public function Get() {
			$data = array(
				"version" => "1.0",
				"datetime" => date("c")
			);
			
			return array(
				"data" => $data
			);
	    }
	}

?>