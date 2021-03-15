<div class="navbar grid">
    <div class="navbar-search flex center-y">
        <?php if($_SERVER['REQUEST_URI'] != "/contact.php") { ?>
        <div id="search" class="w-50">
            <input id="search-input" type="text" placeholder="Search for Movies & TV Shows ..." autocomplete="off" maxlength="100">
            <img class="search-clear w-20px" src="./assets/images/icons/fi-rr-cross-small.svg">
            <div id="search-results"></div>
        </div>
        <?php } ?>

        <a class="navbar-burger">
            <img class="w-20px" src="./assets/images/icons/fi-rr-menu-burger.svg">
        </a>
    </div>

    <div class="navbar-menu flex">
        <?php if($_SERVER['REQUEST_URI'] == "/" or $_SERVER['REQUEST_URI'] == "/index.php") { ?>
            <a class="navbar-item nav-link" href="#">Home</a>
            <a class="navbar-item nav-link nav-filter" data-nav="movies,popular" href="#">Movies</a>
            <a class="navbar-item nav-link nav-filter" data-nav="tvshows,popular" href="#">TV Shows</a>
        <?php } else { ?>
            <a class="navbar-item nav-link" href="index.php">Home</a>
        <?php }?>
            <a class="navbar-item nav-link" href="contact.php">Contact</a>
        <?php 
            if ($auth->isLoggedIn()) {
        ?>
            <a class="navbar-item nav-link" href="favourite.php">Favourites</a>
        <?php } else { ?>
            <a class="navbar-item nav-link" href="login.php">Login</a>
            <a class="navbar-item nav-link" href="register.php">Register</a>
        <?php } ?>
    </div>
</div>