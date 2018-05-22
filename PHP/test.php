<!DOCTYPE html>
<html>
<head>
    <meta charset = "utf-8"/>
    <link rel="shortcut icon" href="..\pictures\seal.ico"/>
    <title>Test</title>
    <!--<link rel="stylesheet" href="..\css_marist\style.css">-->
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
        // require('createDB.php');
        
        // $servername = "localhost";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
        // $username = "root";
        // $password = "";
        // $dbname = "mapDB";
        
        // // Create connection
        // $conn = new mysqli($servername, $username, $password, $dbname); 
        // // Check connection
        // if ($conn->connect_error) {
        //     die("Connection failed: " . $conn->connect_error);
        // }                 
        // $query = "SELECT userName, pass FROM admin WHERE userName = $chkUserName AND pass = $chkPass"; 
                $query = 'SELECT * FROM admin';
                // $query = 'COUNT(*) FROM mapContent';
                $result = mysqli_query($conn, $query);
                if ($result) {
                    while($row = $result->fetch_assoc()) {
                        echo "<br> userName: " . $row["userName"];
                        echo "<br> password: " . $row["pass"];
                    }
                }
                else {
                    echo " <br> " . $dbname;
                    echo "<br> 0 results";
                }
    ?>
    
    <h2>TEST</h2>
    
    
    


</body>
    
</html>