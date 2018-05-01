<!DOCTYPE html>
<html>
<head>
    <meta charset = "utf-8"/>
    <link rel="shortcut icon" href="..\pictures\seal.ico"/>
    <title>Edit</title>
    <link rel="stylesheet" href="..\CSS\style.css">
</head>
    
<body>
    <div id="header-top">
        <img class="maristLogo" alt="Marist College Logo" src="..\pictures\logo.png" />
    </div>
        
    </div><!--end of header-top div-->
    <p id="copyright">© Copyright 2018 Marist College. All Rights Reserved.</p>
    
    <?php
    // Defining username, email, and password
    $userName = $email = $pass = "";
    // Username, email, and password error
    $userNameErr = $emailErr = $passErr = "";
    
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (empty($_POST["userName"])) {
            $userNameErr = "Please enter an username.";
        }
        else {
            $userName = test_input($_POST["userName"]);
            // Checking to see if it contains letters only
            if (!preg_match("/([a-zA-Z])\w+/g",$userName)) {
            $userNameErr = "Please enter letters only.";
            }
        }
    

        if (empty($_POST["email"])) {
            $emailErr = "Please enter an email.";
        }
        else {
            $email = test_input($_POST["email"]);
            // Checking to see if it contains letters only
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Please enter letters only.";
            }
        }
    
   
        if (empty($_POST["password"])) {
            $passErr = "Please enter a password.";
        }
        else {
            $pass = test_input($_POST["password"]);
            // Checking to see if it contains letters only
            if (!preg_match("/([a-zA-Z])\w+/g",$pass)) {
            $passErr = "Please enter letters only.";
            }
        }
    }
    
    ?>
    
    <h2>TEST</h2>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">

        Name: <input type="text" name="userName" placeholder="Name" style=" " value="<?php echo $userName;?>">
        <span style="color:red;">* <?php echo $userNameErr;?></span>
    </form>
    

    

</body>
    
</html>