<header>
    <?php
        
        if(htmlspecialchars($_SERVER['REQUEST_URI']) == '/signOnPage.php') {
            echo "<a href='signupPage.php'>Sign Up</a>";
        }

        else {
            echo "<a href='signOnPage.php'>Sign On</a>";
        }
    ?>
    <hr>
</header>