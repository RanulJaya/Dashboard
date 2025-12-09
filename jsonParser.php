<?php
	$doc = new DOMDocument();
	$json = file_get_contents('./db/test.json');
	$json_data = json_decode($json, true); 

	$myObj = new StdClass();
	$myObj = $json_data;

	$myJSON = json_encode($myObj);

	echo $myJSON;
?>
