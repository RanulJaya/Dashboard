<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <form action="/signOnPage.php" method="post">
        <label for="username">Username</label><br>
        <input type="text" id="username" name="username"><br>
        <label for="pass">Password</label><br>
        <input type="text" id="pass" name="pass"><br><br>
        <input type="submit" value="Submit">
    </form>       
    
    <?php include "connectToDatabase.php" ?>

</body> 
</html>