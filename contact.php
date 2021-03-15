<?php 
    require_once('models/init.php');
    define('CAPTCHA1', rand(1,9));
    define('CAPTCHA2', rand(1,9));
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <?php include('includes/head.php') ?>
    <title>Contact</title>
</head>
<body>

<div class="container">
    <div class="wrapper p-md-6rem">
        <div class="contact-info">
            <h3>Armstrong Nouni</h3>
            <p>Full Stack Developer</p>
            <ul>
                <li><i class="fa fa-road"></i> Cape Town, South Africa</li>
                <li><i class="fa fa-phone"></i> 27 (61) 009-5710</li>
                <li><i class="fa fa-envelope"></i> nelhamstrong9@gmail.com</li>
            </ul>
                <a href="/" class="btn btn-large">Home</a>
        </div>
        <div class="contact">
            <h3>E-mail Us</h3>

            <form method="POST" action="/core/f_contact.php">
                <input type="hidden" name="captcha1" value="<?php echo CAPTCHA1; ?>" />
                <input type="hidden" name="captcha2" value="<?php echo CAPTCHA2; ?>" />
                <input type="text" class="form-control" placeholder="NAME" name="name" value="" required>
                <input type="email" class="form-control" placeholder="EMAIL" name="email" value="" required>
                <input type="text" class="form-control" placeholder="SUBJECT" name="subject" value="" required>
                <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
                <input type="text" class="form-control" name="captcha" placeholder="How much is <?php echo CAPTCHA1; ?> + <?php echo CAPTCHA2; ?> = ?" required/>
                <button type="submit" name="submit" class="btn btn-large">Submit</button>
            </form>
        </div>
    </div>
</div>

</body>
</html>