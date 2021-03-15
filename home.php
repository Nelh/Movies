<?php 
    require_once('models/init.php');
    if(!$auth->isLoggedIn()) {
        $auth->redirectHome();
    }

    $user = new User($conn);
    $user_favourites = json_encode($user->getUserMovie());
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <?php include('includes/head.php') ?>
    <title>Favourites Movies</title>
</head>
<body>
    <div class="container">
        <div class="alert"></div>
        <?php include('includes/navbar.php') ?>

        <div class="shadow-sm my-4">
            <div class="card-body">
                <p class="pt-20px text-white"><?php echo $_SESSION['fname']; ?>. You have successfully logged in!</p>
                <p><a href="./core/f_logout.php?logout" class="btn btn-large">Logout</a></p>
            </div>
        </div>

        <div class="pt-20px">
            <h2 class="pt-20px text-white">Favourites Movies</h2>
            <div class="card-block"></div>
        </div>
    </div>

    <script>
        const favourites = JSON.parse('<?php echo $user_favourites; ?>');
    </script>
    

    <div id="show-movies-details"></div>
    <!-- Js file here -->
    <script src="assets/dist/script.js"></script>
</body>
</html>