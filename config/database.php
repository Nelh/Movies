<?php

////////////////////////////////////////////////////////
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'nelh');
define('DB_PASSWORD', 'esplight');
define('DB_DATABASE', 'movie');

/////////////////////////////////////////////////////////
// Create Connection
$conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD,DB_DATABASE);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}