<?php

$servername = "localhost";
$username = "root"; //foxmap
$password = ""; //password
$dbname = "mapDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname); //note for LJ: equivalent to $dbc

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully";

// // Check connection
// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// } 

// $sql = "DROP DATABASE IF EXISTS mapDB;
//         CREATE DATABASE mapDB;
//         USE mapDB;";

// if ($conn->multi_query($sql) === TRUE) {
//     echo "Database mapDB created successfully";
// } else {
//     echo "Error creating table: " . $conn->error;
// }

// $conn->close();
?>