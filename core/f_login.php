<?php

session_start();

require_once('./../config/database.php');
require_once('./../models/auth.php');

$auth = new Auth($conn);

//When login button pressed, login
if (isset($_POST['submit'])) 
{
    $email = $_POST['email'];
    $pass = $_POST['password'];
    $login = $auth->login($email, $pass);
    
    if ($login === true)
    {
        $auth->redirectHome();
    } 
    else 
    {
        // $auth->redirect('/login.php');
        echo $login;
    }
} else {
    echo "Wrong request";
}
?>