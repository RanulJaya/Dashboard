    <?php
        require __DIR__ . '/vendor/autoload.php';
        $dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/db/');
        $dotenv->load();
        $servername = $_ENV['HOST'];
        
        $conn = new mysqli($servername, $_ENV['USERNAME'], $_ENV['PASSWRD'], $_ENV['SCHEMA']);
        
        if ($conn->connect_error) {
          die("Connection failed: " . $conn->connect_error);
        }

        $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);
        $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_SPECIAL_CHARS);
        $submit = $_POST["submit"];

        if($submit == "login" && !empty($username) && !empty($password)) {
          
          $sql = "SELECT * FROM Users";
          $result = $conn->query($sql);

          while($row = $result->fetch_assoc()) {
            
            if($row['username'] == $username) {
              checkHashSum($password, $row["password"]);
            }

          }
          echo "<br> Password not valid";
        }

        else if($submit == "submit" && !empty($username) && !empty($password)) {

          if(checkIfUserExists($username, $conn)){
            addUser($username, $password, $conn);
          }
          else {
            echo "User exists";
          } 
        }

        function checkIfUserExists($username, $conn) {
          
          $sql = "SELECT * FROM Users";
          $result = $conn->query($sql);

          while($row = $result->fetch_assoc()) {
            if($row['username'] == $username) {
              return false;
            }
          }
          return true;
        }

        function checkHashSum(String $passHash, String $password) {
          if(password_verify($passHash, $password)) {
            enterDashboard();
          }
        }

        function addUser($username, $password, $conn) {
          
           $hash = password_hash($password, PASSWORD_DEFAULT);  
           
           $sql = "INSERT INTO Users (username, password)
            VALUES ('$username', '$hash')";

           $conn->query($sql);
        }

        function enterDashboard(){

          if (!empty($_SERVER['HTTPS']) && ('on' == $_SERVER['HTTPS'])) {
            # code...
            $uri = 'https://';
            } 
            else {
              $uri = 'http://';
            }

            $uri .= $_SERVER['HTTP_HOST'];
            header('Location: '.$uri.'/components/index.html');
        }
     ?>