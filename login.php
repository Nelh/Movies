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
        <h2 class="text-white p-y-30">Login</h2>
    </div>
    <form method="POST" action="/core/f_login.php">
        <input type="text" class="form-control" name="email" autocomplete="email" placeholder="Enter an email" autofocus required="required" />
        <input type="password" class="form-control" name="password" placeholder="Enter a password" required="required" />
        <button type="submit" name="submit" class="btn btn-primary btn-block btn-large">Let me in.</button>
    </form>
</div>

</body>
</html>