<?php
    // To connect to MySQL server and database
    require('connectDB.php');    // Defining username, email, and password, dbname
    session_start();
    $error = "";
    
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (empty($_POST["userName"])) { // The empty() checks to see if userName field is empty
            $error = "Please enter user name";
        }
        else if (empty($_POST["password"])) {
            $error = "Please enter a password";
        }
        else {
            $chkUserName = mysqli_escape_string($conn, $_POST['userName']);
            $chkPass = SHA1(mysqli_escape_string($conn, $_POST['password'])); 
            $query = "SELECT userName FROM admin WHERE admin.userName = '$chkUserName' AND admin.pass = '$chkPass'"; 
            $result = mysqli_query($conn, $query);
            $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
            $active = $row['active'];
            
            // For debugging purpose
            if (!$result) { // If it fails / or invalid query is run, then it will print out error
                printf("Error: %s\n", mysqli_error($conn));
                exit();
            }   
            
            $count = mysqli_num_rows($result); //If the username and password matches, table row will be 1 row

            if ($count == 1) {
                $_SESSION["userName"] = $chkUserName;
                header("location: https://foxmap-leejae0118.c9users.io/adminHome.html");
            }
            else {
                $error = "Invalid user name or password";
            }
            
        }
    }    

    
    function trm($input) {
        // This function trims and removes backslash
        $input = trim($input);
        $input = stripslashes($input);
        // htmlspecialchars converts special characters to HTML entities
        $input = htmlspecialchars($input);
        return $input;
    }
?>