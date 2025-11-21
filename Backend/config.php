<?php
// --- 1. Define your database configuration variables ---
$servername = "localhost";
$username = "root";
$password = "xxx123";
$dbname = "royal_aurum"; 

try {
  // --- 2. Use the variable in the PDO connection string ---
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 // echo "Connected successfully to the $dbname database!";
} catch(PDOException $e) {
  // The error message will now be more accurate if the server or credentials are wrong
  echo "Connection failed: " . $e->getMessage();
}
// Note: In a real application, you would typically use $conn for queries here.
?>