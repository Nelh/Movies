# Tmdb Project

## Requirements

- Webserver required 
- Database Server 
- Nodejs

Developed with LAMP Stack (Linux, Apaches, MySQL, and PHP)

## Installation

- Clone the repo in your web server
- In the config folder change the database define to match your database local server.

```
define('DB_SERVER', 'localhost');
define('DB_USERNAME', '');
define('DB_PASSWORD', '');
define('DB_DATABASE', 'movie');
```
- Create a Database named movie and use the `movie.sql` dump to create the necessary tables.


## Description

I use PHP in the backend to create a simple login system where a user can login / register. that will allow them to add / remove their favourites movie to the list.
I use prepare statement to tackle some vulnerability issue like sql injection but in a professional capacity i would preferably use a framework that already has tons of security features against xss attack, sql injection, etc. like (Laravel, Symfony, etc)

But for the purpose of this test i used plain PHP and vanilla javascript so that i can demonstrate my skills in the native language. 
Same thing for css i would preferably use boostrap5 or tailwind to  base my styling but i want to show my skills set on responsive design, media query, flexbox, grid, etc.

In the Frontend i use vanilla javascript, sass to compile my css and webpack to bundle and minify my javascript and css.



## Features

The features Included are as followed

- Movies / Tv Show Listing
- Movie / Tv Show Details
- Pagination
- Movie Search Autocomplete
- Favourites Movie
- Login / Register 
- Contact Form


## Design Inspiration
 



## Author

Armstrong Nouni