import * as view from './views.js';
import * as main from './main.js';

// TMDB URLS
const api_key = '?api_key=087a15f97ae0caf207dbc11e4e297393';
const movies = 'https://api.themoviedb.org/3/movie/';
const tvshows = 'https://api.themoviedb.org/3/tv/';
const search = 'https://api.themoviedb.org/3/search/multi';
const language = '&language=en-US';
let url, datas;

//////////////////////////////////////////////////////////////////////////
// Get Movies & tv shows
export function getMoviesData(primary, secondary, page = 1) {
    let movie_array = [];
    if (primary == 'movies') url = movies;
    else if (primary == 'tvshows') url = tvshows;

    // MAKE REQUEST WITH HEADERS
    fetch(`${url}${secondary}${api_key}${language}&page=${+page}`, 
    {
        headers: new Headers ({ 'Accept': 'application/json'})
    })
    .then(response => {
        return response.text();
    })
    .then(text => {
        datas = JSON.parse(text);
        datas.results.forEach((data) => { movie_array.push(data.id) });
        // get random id in list
        let random_id = movie_array[Math.floor(Math.random()*movie_array.length)];
        // fetch background
        fetch(`${url}${random_id}${api_key}${language}&append_to_response=videos`, {
            headers: new Headers ({ 'Accept': 'application/json'})
        }).then(response => {
            return response.text();
        })
        .then(text => {
            datas = JSON.parse(text);
            view.showBackgroundMoviesData(datas);
        })
        .catch(err => {
            return err;
        });

        view.showMoviesData(datas.results);
        view.pagination(primary, secondary, datas.total_pages, page);

    })
    .catch(err => {
        return err;
    });
};


////////////////////////////////////////////////////////////////////////
// Get Movie OR Tv show Details
export function getMovieData(mediaType, tmdbId) {
    // GET MEDIA TYPE
    if (mediaType == 'movie') url = movies;
    else url = tvshows;

    // MAKE REQUEST WITH HEADERS
    fetch(`${url}${tmdbId}${api_key}${language}&append_to_response=videos`, 
    {
        headers: new Headers ({ 'Accept': 'application/json'})
    })
    .then(response => {
        return response.text();
    })
    .then(text => {
        datas = JSON.parse(text);
        view.showMovieData(datas);
    })
    .catch(err => {
        return err;
    });
};

//////////////////////////////////////////////////////////////////////////
// Show Search results
export function searchMoviesData(searchQuery) {
    
    fetch(`${search}${api_key}&language=en-US&query=${searchQuery}&page=1&include_adult=false`, 
    {
        headers: new Headers ({ 'Accept': 'application/json'})
    })
    .then(response => {
        return response.text();
    })
    .then(text => {
        datas = JSON.parse(text);
        main.searchResults.innerHTML = '';
        view.showSearchMoviesData(datas.results);
    })
    .catch(err => {
        return err;
    });
};


//////////////////////////////////////////////////////////////////////////
// Favourites movies
function getFavouritesMovies() {
    if(typeof(favourites) !== 'undefined') {    
        async function getMoviesfromApi(favourite){
            if (favourite.type == 'movie') url = movies;
            else url = tvshows;
            return await fetch(`${url}${favourite.id}${api_key}${language}&append_to_response=videos`, {
                headers: new Headers ({ 'Accept': 'application/json'})
            }).then(result => {
                return result.json();
            });
        }
    
        Promise.all(favourites.map(getMoviesfromApi)).then(results => {
            view.showFavouritesMovies(results);
        }).catch(err => console.log(err));
    }
}
getFavouritesMovies();