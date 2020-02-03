<?php
	function get_ip_address(){
		if (!empty($_SERVER['HTTP_CLIENT_IP'])){
		  $ip=$_SERVER['HTTP_CLIENT_IP'];
		}
		elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
		  $ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
		}
		else{
		  $ip=$_SERVER['REMOTE_ADDR'];
		}
		return $ip;
	}


	$dir = "../acces_log";
	if( is_dir($dir) === false ){
		mkdir($dir);
	}
	if (file_exists($dir . "/acces_log.txt") === false){
		$accesLog = fopen($dir . "/acces_log.txt", "w");
		fwrite($accesLog, "Fecha        Hora       \tIP \t\t-\t-\t\t Fecha inicio   Fecha Fin\n");
	}
	$accesLog = fopen($dir . "/acces_log.txt", "a");
	
	$q = $_REQUEST["q"];
	fwrite($accesLog, date("d/m/Y \th:i:sa\t\t") . get_ip_address() . "\t\t" . $q . "\n");

	echo date("d/m/Y  \th:i:sa") . "   -  \t" . get_ip_address() . "   -   " . $q;
	fclose($accesLog);
?>