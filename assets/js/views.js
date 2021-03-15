import * as main from './main.js'; 
import { getMoviesData, getMovieData } from './api.js';

const POSTER = 'https://image.tmdb.org/t/p/w200';
const BACKDROP = 'https://image.tmdb.org/t/p/w1280/';
const DEFAULT_BACKDROP = 'https://www.themoviedb.org/assets/1/v4/logos/408x161-powered-by-rectangle-blue-10d3d41d2a0af9ebcb85f7fb62ffb6671c15ae8ea9bc82a2c6941f223143409e.png';
const DEFAULT_POSTER = 'https://www.themoviedb.org/assets/1/v4/logos/408x161-powered-by-rectangle-blue-10d3d41d2a0af9ebcb85f7fb62ffb6671c15ae8ea9bc82a2c6941f223143409e.png';

/////////////////////////////////////////////////////////////
// Constants
const backgroundPoster = document.querySelector('.background-poster');
const banner = document.querySelector('#banner');

///////////////////////////////////////////////////////////////
// Show Movies Data

export function showMoviesData(results) {
    if (!results.length) return;
    main.cardBox.innerHTML = '';
    let count = 1, size = 9;
    let oldArray = [... results];
    showMore(count);

    function showMore(count) {
        if(count <= (Math.ceil(oldArray.length / size))) {
            results.splice(0, size).map(result => {
                const title = result.title || result.name || 'Unknown';
                let poster = `${POSTER}${result.poster_path}`;
                let date = result.release_date || result.first_air_date || '';
                let mediaType;
                if (result.poster_path == null) poster = DEFAULT_POSTER;
                if (result.hasOwnProperty('adult')) {mediaType = 'movie'} else {mediaType = 'tv'} 
                // CREATE HTML TO RETURN
                main.cardBox.innerHTML += `
                    <div class="card">
                        <img src="${poster}" class="card-img-custom img-fluid" alt="${title}">
                        <div class="info">
                            <h4>${title.length > 25 ? title.substring(0, 25) + "..." : title}</h4>
                            <div>Relesase: ${date} </br> <span class="rating">${result.vote_average || '0'}</span></div>
                            <a href="#" class="btn btn-large add_favourite" data-id="${result.id}" data-type="${result.hasOwnProperty('adult') ? 'movie' : 'tv'}">Add to favourite</a>
                            <button class="btn btn-large mt-10px card-element" data-id="${result.id}" data-type="${mediaType}">Read More</button>
                        </div>
                    </div>
                `;
            });

            let vm = document.getElementById('view-more');
            if(results.length == 0) {
                vm.style.display = "none";
            } else vm.style.display = "inline-block";
        }
    }

    document.getElementById('view-more').addEventListener('click', () => {
        showMore(1 + count++);
    })

};

/////////////////////////////////////////////////////////
// Show Movie Details

export function showMovieData(result) {
    const title = result.title || result.name || 'Unknown';
    const tagline = result.tagline || `NO. SEASONS: ${result.number_of_seasons}  ~  NO. EPISODES: ${result.number_of_episodes}` || '';
    const overview = result.overview || '';
    const rating = result.vote_average || '0';
    let date = result.release_date || result.first_air_date || '';
    let status = result.status || '';
    let backdrop = `${BACKDROP}${result.backdrop_path}`;
    let poster = `${POSTER}${result.poster_path}`;
    let mediaType;
    let trailer = []; 

    if (date) date = date.split('-').reverse().join('-');
    if (result.backdrop_path == null) backdrop = DEFAULT_BACKDROP;
    if (result.poster_path == null) poster = DEFAULT_POSTER;
    if (result.videos.results.length != 0) {
        trailer = result.videos.results.map(video => {
            if (video.type == 'Trailer') {
                return `https://www.youtube.com/watch?v=${video.key}`;
            }
        }).filter(video => {
            if (video != 'undefined') {
                return video;
            }
        });
    } else {
        trailer[0] = `https://www.youtube.com/results?search_query=${title}`;
    }
    // CREATE HTML TO RETURN
    main.fullMediaContent.innerHTML = `
    <div class="card-info p-20px">
        <div class="movie_image">
            <img class="movie_poster" src="${poster}" alt="${title}" />
        </div>
        <div class="about_movie">
            <h3>${title} - ${tagline}</h3>
            <div class="movie_info text-white">
                <p>${date} - ${rating}</p>
            </div>
            <div class="movie_desc">
                <p class="mw-60">${overview}</p>
            </div>
            <a href="${trailer[0]}" target="_blank" class="btn btn-large">Trailer</a>
            <a href="#" class="btn btn-large add_favourite" data-id="${result.id || '0'}" data-type="${result.hasOwnProperty('adult') ? 'movie' : 'tv'}"><img class="w-20px" src="./assets/images/icons/fi-rr-star.svg">  Add to favorite</a>
        </div>
        <button class="btn btn-large close-media-content">close</button>
    </div>
    <div class="blur_back" style="background-image: url('${backdrop}')"></div>`;

    main.fullMediaContent.style.display = 'block';
    main.fullMediaContent.style.marginBottom = '0px';

    document.querySelector('.close-media-content').addEventListener('click', () => {
        main.fullMediaContent.style.display = 'none';
    });

};


////////////////////////////////////////////////////////////
// Show background movie

export function showBackgroundMoviesData(result) {
    const tmdbId = result.id || '0';
    const title = result.title ? result.title : result.name;
    let trailer = []; 
    if (result.videos.results.length != 0) {
        trailer = result.videos.results.map(video => {
            if (video.type == 'Trailer') {
                return `https://www.youtube.com/watch?v=${video.key}`;
            }
        }).filter(video => {
            if (video != 'undefined') {
                return video;
            }
        });
    } else {
        trailer[0] = `https://www.youtube.com/results?search_query=${title}`;
    }
    // CREATE HTML TO RETURN
    backgroundPoster.style.backgroundImage = "url(https://image.tmdb.org/t/p/original" + result.backdrop_path + ")";
    banner.innerHTML = `
        <h2 class="text-white">${result.hasOwnProperty('adult') ? 'Movie' : 'Tv Show'}</h2>
        <h1 class="display-lg mw-md">${title.length > 30 ? title.substring(0, 30) + "..." : title}</h1>
        <p class="display-md mw-md p-y-30">${result.overview.length > 300 ? result.overview.substring(0, 300) + "..." : result.overview}</p>
        <p>
            <a href="${trailer[0]}" target="_blank" class="btn btn-purple btn-large btn-rounded"><img class="w-20px fill-purple" src="./assets/images/icons/fi-rr-play.svg"> Play Trailer</a>
            <a href="#" class="btn btn-large btn-rounded mx-3 add_favourite" data-id="${tmdbId}" data-type="${result.hasOwnProperty('adult') ? 'movie' : 'tv'}"><img class="w-20px fill-purple" src="./assets/images/icons/fi-rr-heart.svg"> Add to favourite</a>
            <span class="badge">${result.vote_average}</span>
        </p>
    `;
}


////////////////////////////////////////////////////////////
// Show Search Movie results

export function showSearchMoviesData(results) {
    if (!results.length) return;
    // ONLY SHOW MAX 6 RESULTS
    for (let i = 0; i < 6; i++) {
        // DO NOT INCLUDE PEOPLE - ONLY MOVIES OR TV SHOW MEDIA
        if (results[i].media_type == 'movie' || results[i].media_type == 'tv') {
            // EXTRACT RESULTS & ASSIGN BACKUPS IF FAILURE
            let mediaType = results[i].media_type || 'movie';
            let title = results[i].title || results[i].name;
            let date = results[i].release_date || results[i].first_air_date || '';
            if (date) date = date.slice(0,4);
            // CREATE HTML 
            main.searchResults.innerHTML += `
                <p class="getMovie">
                    ${title} (${date})
                </p>
            `;

            document.querySelectorAll('.getMovie').forEach(movie => {
                movie.addEventListener('click', (e) => {
                    e.preventDefault();
                    getMovieData(mediaType, results[i].id);
                    main.searchResults.innerHTML = '';
                    main.searchInput.value = '';
                    main.searchClear.style.visibility = 'hidden';
                });
            });
        };
    };
};


////////////////////////////////////////////////////////////
// Show Favourites Movies

export function showFavouritesMovies(results) {
    if (!results.length) return;
    const cardBlock = document.querySelector('.card-block');
    results.map(result => { 
        const tmdbId = result.id;
        const title = result.title || result.name || 'Unknown';
        let poster = `${POSTER}${result.poster_path}`;
        if (result.poster_path == null) poster = DEFAULT_POSTER;
        let mediaType;
        if (result.hasOwnProperty('adult')) {mediaType = 'movie'} else {mediaType = 'tv'} 
        // CREATE HTML TO RETURN
        cardBlock.innerHTML += `
        <div class="card">
            <img src="${poster}" class="card-img-custom img-fluid" alt="${title}">
            <div class="info">
                <h4>${title.length > 25 ? title.substring(0, 25) + "..." : title}</h4>
                <div><span class="rating">${result.vote_average || '0'}</span></div>
                <a href="#" class="btn btn-large mt-10px remove_favourite" data-id="${tmdbId}">Remove</a>
                <button class="btn btn-large mt-10px card-element" data-id="${result.id}" data-type="${mediaType}">Read More</button>
            </div>
        </div>
    `;
    });
}


/////////////////////////////////////////////////////////////////
// Paginations

export function pagination(primary, secondary, totalPages, page) {
    page = parseInt(page);
    main.mainPagination.innerHTML = '';
    let totalBoxes = 9, start, end;
    // LESS THAN 5 PAGES
    if (totalPages <= totalBoxes) {
        start = 1;
        end = totalPages;
    } else {
        // WHEN ABOVE 5 PAGES
        if (page <= 5) {
            start = 1;
            end = 9;
        } else if (page > 5 && page < (totalPages - 4)) {
            start = page - 4;
            end = page + 4;
        } else {
            start = totalPages - 8;
            end = totalPages;
        };
    };

    // CREATE HTML TO RETURN
    main.mainPagination.innerHTML += `<a class="pagination-box" data-page="${1}" href="#">First</a>`;
    let i = 0;
    while ((start + i) <= end) {
        main.mainPagination.innerHTML += `
            <a class="pagination-box" data-page="${start + i}" href="#">${start + i}</a>
        `;
        i++;
    };
    main.mainPagination.innerHTML += `<a class="pagination-box" data-page="${totalPages}" href="#">Last</a>`;

    // HIGHLIGHT CURRENT PAGE
    const paginationBox = document.querySelectorAll('.pagination-box');
    for (let i in paginationBox) {
        if (page == paginationBox[i].innerText) {
            paginationBox[i].style.backgroundColor = '#1779ba';
            paginationBox[i].style.color = '#fff';
        };
    };

    paginationBox.forEach(paginate => {
        paginate.addEventListener('click', (e) => {
            e.preventDefault();
            var page = e.target.getAttribute('data-page');
            getMoviesData(primary, secondary, page);
        });
    });
};


