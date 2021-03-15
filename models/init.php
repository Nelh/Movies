<!-- // Initialize the page -->
<?php

require_once('./config/database.php');
require_once('auth.php');
require_once('user.php');
session_start();

$auth = new Auth($conn);

?>