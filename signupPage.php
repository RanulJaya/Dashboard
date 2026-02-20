<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        include "header.php";
    ?>
    <form action="signupPage.php" method="post">
        <label type="text" name="username">Username</label><br>
        <input type="text" name="username"><br>
        
        <label type="text" name="password">Password</label><br>
        <input type="text" name="password"><br><br>

        <input type="submit" name="submit" value="submit">
    </form>
</body>
</html>

<?php include "connectToDatabase.php";?>

