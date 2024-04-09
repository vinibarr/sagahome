<?php
    class StringHelper {
        private static $_instance = null;
        private $_string = '';

        function __construct($string) {
            $this->_string = $string;
        }

        public static function Set($string) {
            self::$_instance = new StringHelper($string);
            return self::$_instance;
        }


        public function Get() {
            return $this->_string;
        }


        public function RemoveAccent() {
            $pattern = array();
            $pattern[] = "/(á|à|ã|â|ä)/";
            $pattern[] = "/(Á|À|Ã|Â|Ä)/";
            $pattern[] = "/(é|è|ê|ë)/";
            $pattern[] = "/(É|È|Ê|Ë)/";
            $pattern[] = "/(í|ì|î|ï)/";
            $pattern[] = "/(Í|Ì|Î|Ï)/";
            $pattern[] = "/(ó|ò|õ|ô|ö)/";
            $pattern[] = "/(Ó|Ò|Õ|Ô|Ö)/";
            $pattern[] = "/(ú|ù|û|ü)/";
            $pattern[] = "/(Ú|Ù|Û|Ü)/";
            $pattern[] = "/(ñ)/";
            $pattern[] = "/(Ñ)/";
            $pattern[] = "/(ç)/";
            $pattern[] = "/(Ç)/";
    
            $replacement = explode(" ", "a A e E i I o O u U n N c C");
    
            $this->_string = preg_replace($pattern, $replacement, $this->_string);
            return self::$_instance;
        }


        public function RemoveSpaces() {
            $this->_string = preg_replace("/ /", null, $this->_string);
            return self::$_instance;
        }


        public static function RandomGenerator($length, $upper, $lower, $numbers, $symbols) {
            $string = "";
        
            if ($upper){
                $str_upper = "ABCDEFGHIJKLMNOPQRSTUVYXWZ";
                $string .= str_shuffle($str_upper);
            }
         
            if ($lower){
                $str_lower = "abcdefghijklmnopqrstuvyxwz";
                $string .= str_shuffle($str_lower);
            }
             
            if ($numbers){
                $str_numbers = "0123456789";
                $string .= str_shuffle($str_numbers);
            }
             
            if ($symbols){
                $str_symbols = "!@#$%&*()_+=";
                $string .= str_shuffle($str_symbols);
            }
        
            return substr(str_shuffle($string), 0, $length);
        }
        

        public static function TokenGenerator() {
            $uniqId = uniqid();
            $passwordGenerated = self::RandomGenerator(10, false, true, true, false);
            
            return md5($uniqId . "-" . $passwordGenerated);
        }
    }

?>