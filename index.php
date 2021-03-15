<?php 
    require_once('models/init.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <?php include('includes/head.php') ?>
    <title>Movie App</title>
</head>
<body>
    <div class="alert"></div>
    <div class="main-container">
        <div class="container">
            <?php include('includes/navbar.php') ?> 
            <div id="banner" class="p-md-6rem"></div>
        </div>
        <div class="content-box">
            <div class="container">
                <div id="card-box"></div>
                <div class="pt-20px text-center">
                    <button id="view-more" class="btn btn-large btn-primary">View more</button>
                </div>
                <ul id="main-pagination"></ul>
            </div>
        </div>
        <div id="show-movies-details"></div>
    </div>
    <div class="overlay"></div>
    <div class="background-poster"></div>
    <!-- Js file here -->
    <script src="assets/dist/script.js"></script>
</body>
</html>

