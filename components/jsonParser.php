<?php
	
	// header('Content-Type: application/json');

	// Get the raw POST data
	$json_data = file_get_contents("php://input");

	$json_get_content = file_get_contents("./test.json");
	$json_decode_data = json_decode($json_get_content, true);

	// Decode the JSON string into a PHP object or associative array
	$data = json_decode($json_data); 

	switch($_SERVER['REQUEST_METHOD'])
	{
		case 'POST':
				if ($data) {
				// Access the data
					$username = $data->username;
				// Send a JSON response back to the client
					echo json_encode(['status' => 'success', 'message' => 'Data received for user: ' . $username]);
				} 
				else {
					echo json_encode(['status' => 'error', 'message' => 'Invalid data']);
				}
				break;
			case 'GET':
				echo json_encode($json_decode_data);
				break;

			default:

	}


	// echo $_SERVER['REQUEST_METHOD'];

	// $doc = new DOMDocument();
	// $json = file_get_contents('./db/test.json');
	// $json_data = json_decode($json, true); 

	// $myObj = new StdClass();
	// $myObj = $json_data;

	// $myJSON = json_encode($myObj);

	// echo $myJSON;
?>
