<?php
	$doc = new DOMDocument();
	$json = file_get_contents('./db/test.json');
	$json_data = json_decode($json, true); 

	$myObj = new StdClass();
	$myObj->body = $json_data[0]['body'];
	$myObj->body1 = $json_data[1]['body'];

	$myJSON = json_encode($myObj);

	echo $myJSON;
?>
