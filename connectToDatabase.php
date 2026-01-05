    <?php
        require __DIR__ . '/vendor/autoload.php';
        $dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/db/');
        $dotenv->load();
        $conn = new mysqli(getenv('SERVER_NAME'), $_ENV['USERNAME'], $_ENV['PASSWRD'], $_ENV['SCHEMA']);

        $sql = "SELECT * FROM users";
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