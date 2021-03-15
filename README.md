# Movie App &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Requirements

- Webserver required 
- Database Server 
- Nodejs

Developed with LAMP Stack (Linux, Apaches, MySQL, and PHP)

## Installation

- Clone the repo in your web server `https://github.com/Nelh/Movies.git`
- cd Movies
- In the config folder change the database define to match your database local server.

```php
define('DB_SERVER', 'localhost');
define('DB_USERNAME', '');
define('DB_PASSWORD', '');
define('DB_DATABASE', 'movie');
```
- Create a movie database and use the `movie.sql` in the root to create the necessary tables.


## Description

This is an App that let you browse Movies & Tv Shows. it utilize the TMDB Api and let you search or see more details about any movies in a beautiful user interface.

I use this design [here](https://dribbble.com/shots/14798819-Framer-Variants-Variables-Movies-UI)
as reference, all credit to him to create this beautiful visual interface, which randomly show a banner with a background of a movie in the list.

The App has a Tv Show section on the navigation menu where when you click it redraw the list with the tv show that you can paginate through.

I did find some limitation with the tmdb api, as it doesn't allow to define a specific set of movies to return in the request. so to counter this issue i did slice the result i received from the api to show nine thumbnail at the time and when you click the view more button it shows the rest.

I did implement an add / remove into favourites, but you need to login otherwise it just won't let you.


I used PHP in the backend to create a simple login system where a user can login / register. that will allow them to add / remove their favourites movies to the list.
I use prepare statement to tackle some vulnerability issue like sql injection but in a professional capacity i would preferably use a framework that already has tons of security features against xss attack, sql injection, etc. like (Laravel, Symfony, etc)

But for the purpose of this test i used plain PHP and vanilla javascript so that i can demonstrate my skills in the native language. 
Same thing for css i would preferably use boostrap5 or tailwind or any others frontend library to base my styling and keep it consitent, but i want to show my skills set on responsive design, media query, flexbox, grid, etc.

In the Frontend i use vanilla javascript, sass to compile my all my scss file to a single css and webpack to bundle and minify my javascript and css.

## Features

The features Included are as followed

- Movies / Tv Show Listing
- Movie / Tv Show Details
- Movie Search with Autocomplete
- Pagination
- Favourites Movie
- Login / Register 
- Contact Form

## Design Inspiration
 
[https://dribbble.com/shots/14798819-Framer-Variants-Variables-Movies-UI](https://dribbble.com/shots/14798819-Framer-Variants-Variables-Movies-UI)

### License

Movie App is [MIT licensed](./LICENSE).

### Author

Armstrong Nouni