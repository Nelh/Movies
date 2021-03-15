<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./assets/dist/style.css">
</head>
<body>
<div class="fullscreen">
    <div class="text-center">
        <h2 class="text-white p-y-30">Register</h2>
    </div>
    <?php if (isset($_GET['joined'])){ ?>
        <p class="text-center text-white">successfully registered. You can now <a href="login.php">login</a>.</p>
    <?php } else { ?>
        <form class="col-xl-3 col-lg-4 col-10 mx-auto" method="POST" action="./core/f_register.php">
            <input type="text" class="form-control" name="fname" required autocomplete="fname" placeholder="Enter an firstname" autofocus>
            <input type="text" class="form-control" name="lname" required autocomplete="lname" placeholder="Enter an lastname">
            <input type="email" class="form-control" name="email" required autocomplete="email" placeholder="Enter an email">
            <input type="password" class="form-control" name="password" required autocomplete="current-password" placeholder="Enter a password">
            <input type="password" class="form-control" name="confirm-password" required placeholder="Retype password">
            <button type="submit" name="submit" class="btn btn-block btn-large">
                Register
            </button>
        </form>
    <?php } ?> 
    </div>
</body>
</html>
