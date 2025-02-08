<?php 
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$database = "poma_v3";
$conn = new mysqli($servername, $username, $password,$database); 
if ($conn->connect_error) { 
    die("Błąd połączenia z bazą danych: " 
        . $conn->connect_error); 
}  
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Credentials: true');
?> 