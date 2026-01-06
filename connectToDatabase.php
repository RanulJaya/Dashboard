    <?php
        require __DIR__ . '/vendor/autoload.php';
        $dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/db/');
        $dotenv->load();
        // $conn = new mysqli(getenv('SERVER_NAME'), $_ENV['USERNAME'], $_ENV['PASSWRD'], $_ENV['SCHEMA']);
        $servername = $_ENV['HOST'];
        // echo $servername;

        
        $conn = new mysqli($servername, $_ENV['USERNAME'], $_ENV['PASSWRD'], $_ENV['SCHEMA']);
        if ($conn->connect_error) {
          die("Connection failed: " . $conn->connect_error);
        }


        $sql = "SELECT * FROM Users";
        $result = $conn->query($sql);


        $data = [];
        
          while($row = $result->fetch_assoc()) {
            $data[] = json_encode($row);
          }

          
        
        $password = password_hash($_POST['pass'], PASSWORD_DEFAULT);


        if (isset($_POST["username"])) {
            # code...
            for ($x = 0; $x < count($data); $x++){
              $value = json_decode($data[$x], true);

              if ($value['username'] == $_POST["username"] && password_verify($value['password'], $password)){
                if (!empty($_SERVER['HTTPS']) && ('on' == $_SERVER['HTTPS']))  {
                  # code...
                  $uri = 'https://';
                } else {
                  $uri = 'http://';
                }

                $uri .= $_SERVER['HTTP_HOST'];
                  // header("Access-Control-Allow-Origin: *");
                header('Location: '.$uri.'/components/index.html');
                }
            }
            echo "cannot connect";
        }
        else{
          echo "Please enter in Username";
        }

     ?>