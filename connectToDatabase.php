    <?php
        require __DIR__ . '/vendor/autoload.php';
        $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
        $dotenv->load();

        $conn = new mysqli(getenv('SERVER_NAME'), $_ENV['USERNAME'], $_ENV['PASSWRD'], $_ENV['SCHEMA']);

        $sql = "SELECT * FROM userdata";
        $result = $conn->query($sql);

        $data = [];
        
          while($row = $result->fetch_assoc()) {
            $data[] = json_encode($row);
          }

        //   echo json_encode($data);
        
          if (isset($_POST["username"])) {
            # code...
            // echo getenv('USERNAME');
            echo $_POST["username"];
        }
     ?>