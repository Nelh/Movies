<?php

session_start();

require_once('./../config/database.php');
require_once('./../models/auth.php');
require_once('./../models/validations.php');

$auth = new Auth($conn);
$validate = new Validate($conn);

$errors = array();

//When register button is pressed, register
if (isset($_POST['submit'])) 
{
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $pass = $_POST['password'];
    $pass2 = $_POST['confirm-password'];
    
    if ($validate->emailValidate($email) != null) 
    {
        $errors[] = $validate->emailValidate($email);
    }
    if ($validate->passwordValidate($pass, $pass2) != null) 
    {
        $errors[] = $validate->passwordValidate($pass, $pass2);
    }
    
    //If no validation errors register input, else display errors
    if (empty($errors)) 
    {
        if($auth->register($fname, $lname, $email, $pass) === true) 
        {
            $auth->redirect('/register.php?joined');
        }
        else 
        {
            echo 'Error registering. please try again.';
        }
    }
    else
    {
        // $auth->redirect('/register.php');

        foreach ($errors as $error) 
        {
            printf ($error . "<br/>");
        }
    }   
}

?>