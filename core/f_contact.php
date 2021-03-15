<?php

define('EMAIL_TO', 'nelhamstrong9@gmail.com');
define('CAPTCHA_ENABLED', '1'); 

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
	$email = $_POST['email']; 
	$subject = $_POST['subject']; 
	$message = $_POST['message'];
	$captcha = $_POST['captcha'];
	$captcha1 = $_POST['captcha1'];
	$captcha2 = $_POST['captcha2'];

    if (CAPTCHA_ENABLED == '0') { 
        $captcha1 = '1'; 
        $captcha2 = '1'; 
        $captcha = '2'; 
    }
	// Errors
	$errors = array();

    if (empty($name) || empty($email) || empty($message)) { 
        $errors[] = 'One or more fields is blank!'; 
    } 
	if (!$email == '' && (!strstr($email,'@') || !strstr($email,'.'))) { 
        $errors[] = 'Your email address is not formatted correctly!'; 
    } 
	if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid Email";
    }
    if (($captcha1 + $captcha2) != $captcha) { 
        $errors[] = 'Anti-spam incorrect! Please try again.'; 
    } 
	
	//If no validation errors register input, else display errors
    if (empty($errors)) 
    {
		$headers = "From: ".$name." <".$email.">\r\n";
		$headers .= "Reply-To: ".$name." <".$email.">\r\n";
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

		$body = '
		<html><body>
		<table border="0" cellspacing="0" cellpadding="0" width="100%">
		<tr><td style="border-bottom: solid 1px #CCC; font-size:18px; font-weight:bold; padding:10px;" colspan="2">'.$email_subject.'</td></tr>
		<tr><td valign="top" style="padding:10px; border-bottom: solid 1px #CCC;" valign="top"><b>Name:</b></td><td style="padding:10px; border-bottom: solid 1px #CCC;">'.$name.' ('.$email.')</td></tr>
		<tr><td valign="top" style="padding:10px; border-bottom: solid 1px #CCC;" valign="top"><b>Message:</b></td><td style="padding:10px; border-bottom: solid 1px #CCC;">'.$message.'</td></tr>
		</table>
		</body></html>
		';

    	// Send the email, reset text boxes on form, and show success message
		mail(EMAIL_TO, $subject, $body, $headers);
		$name = '';
		$email = '';
		$message = '';
		$msg = 'Message Sent!';

		print_r($msg);
		die();
    }
    else
    {
        foreach ($errors as $error) 
        {
            printf ($error . "<br/>");
        }
		die();
    }  
}
print_r("Something went wrong");


?>