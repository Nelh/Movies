<?php

session_start();
require_once('./../config/database.php');
require_once('./../models/auth.php');
require_once('./../models/favouriteMovie.php');

$auth = new Auth($conn);

if(!$auth->isLoggedIn()) {
    print_r("Not Authenticated");
    die();
}

if($_SERVER['REQUEST_METHOD'] === 'POST') {

    $input = json_decode(file_get_contents('php://input'), true);

    $id = mysqli_real_escape_string($conn, $input['id']); 

    $favourite = new FavouriteMovie($conn);
    $fav = $favourite->remove($id);

    if($fav === true) {
        print_r("Yes it works");
    } else {
        print_r($fav);
    }
}

$conn->close();
?>