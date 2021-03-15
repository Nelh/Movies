<?php

session_start();

require_once('./../config/database.php');
require_once('./../models/auth.php');

$auth = new Auth($conn);

//Logout out user and redirect to login page
if (isset($_GET['logout']))
{
    $auth->logout();
    $auth->redirectHome();
} 
//If user is still signed in, will redirect to index.php which will redirect to home.php
else
{
    $auth->redirectHome();
}



