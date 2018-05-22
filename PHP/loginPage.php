<!DOCTYPE html>
<html>
<head>
    <meta charset = "utf-8"/>
    <link rel="shortcut icon" href="..\pictures\seal.ico"/>
    <title>Login Page</title>
    <link rel="stylesheet" href="..\CSS\loginStyle.css">

</head>
    
<body>
    <div id="header-top">
        <img class="maristLogo" alt="Marist College Logo" src="..\pictures\logo.png" />
    </div>
        
    </div><!--end of header-top div-->
    <p id="copyright">© Copyright 2018 Marist College. All Rights Reserved.</p>
    
    <?php 
        // To use the functions in loginTools 
        require('loginTools.php');
    ?>
    
    <!--the htmlspecialchars will prevent possible script injection-->
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
        <div id="loginForm">
            <span style="color:red;"><?php echo $error;?></span>
            <br>
            Login <span style="color:red;">*</span>
            <input type="text" name="userName" placeholder="Name">
            
            Password <span style="color:red;">*</span>
            <input type="password" name="password" placeholder="Password">
            
            <button type="submit" class="positive-btn .sm-btn">Submit</button>
        </div>
    </form>
    

</body>
    
</html>