import { getMoviesData, getMovieData, searchMoviesData } from './api.js';

//////////////////////////////////////////////////////////////
// Constants
export const searchInput = document.querySelector('#search-input');
export const searchClear = document.querySelector('.search-clear');
export const searchResults = document.querySelector('#search-results');
export const mainPagination = document.querySelector('#main-pagination');
export const fullMediaContent = document.querySelector('#show-movies-details');
export const cardBox = document.querySelector('#card-box');
const alertMessage = document.querySelector('.alert');


///////////////////////////////////////////////////////////////////
// Navrbar menu
const burger = document.querySelector('.navbar-burger');
const navbarMenu = document.querySelector('.navbar-menu');
const navbarItems = document.querySelectorAll('.navbar-item');

//////////////////////////////////////////////////
// Events
document.onclick = function(event) {
    const target = event.target;

    if(target.classList.contains('search-clear')) {
        searchInput.value = '';
        searchClear.style.visibility = 'hidden';
        searchResults.innerHTML = '';
    }

    if(target.classList.contains('nav-filter')) {
        nav(target.dataset.nav);
        searchResults.innerHTML = '';
    }

    if(target.classList.contains('card-element')) {
        var id = target.getAttribute('data-id');
        var type = target.getAttribute('data-type');
        getMovieData(type, id);
    }

    if(target.classList.contains('add_favourite')) {
        event.preventDefault();
        var id = target.getAttribute('data-id');
        var type = target.getAttribute('data-type');
        fetch('./core/f_favourite_add.php', {
            method: 'post',
            headers: new Headers ({ 'Accept': 'application/json'}),
            body: JSON.stringify({ id, type})
        })
        .then(response => {
            return response.text()
        })
        .then((data)=> {
            console.info(data);
            Message(data);
        });
    }

    if(target.classList.contains('remove_favourite')) {
        event.preventDefault();
        let id = target.getAttribute('data-id');
        let parent = target.parentElement.parentElement;
        fetch('./core/f_favourite_remove.php', {
            method: 'post',
            headers: new Headers ({ 'Accept': 'application/json'}),
            body: JSON.stringify({ id })
        })
        .then(response => {
            return response.text()
        })
        .then((data)=> {
            console.info(data);
            parent.remove();
            Message(data);
        });
    }
}

document.oninput = function(event) {
    const target = event.target;
    if(target.id === 'search-input') {
        getSearchInput();
        hideNavbarMenu();
    }
}

/////////////////////////////////////////////////////////////
// navigation Menu

burger.addEventListener('click', () => {
    navbarMenu.classList.toggle('navbar-menu--active');
    searchResults.innerHTML = '';
});

navbarItems.forEach(function(navbarItem) {
    navbarItem.addEventListener('click', () => {
        hideNavbarMenu();
        searchResults.innerHTML = '';
    });
});

function hideNavbarMenu() {
    navbarMenu.classList.remove('navbar-menu--active');
    searchResults.innerHTML = '';
}

window.onresize = function () {
    hideNavbarMenu();
}


//////////////////////////////////////////////////////
// main navigation
export function nav(param) {
    let nav = param.split(',');
    let primary = nav[0];
    let secondary = nav[1];
    switch(primary) {
        case 'movies':
            getMoviesData(primary, secondary);
            break;
        case 'tvshows':
            getMoviesData(primary, secondary);
            break;
        default:
            break;
    };
    if(typeof(mainPagination) !== "undefined" || typeof(cardBox) !== "undefined" || typeof(fullMediaContent) !== "undefined") {
        mainPagination.innerHTML = '';
        cardBox.innerHTML = '';
        fullMediaContent.style.display = 'none';
    }
};


//////////////////////////////////////////////////////////
// Search Input

function getSearchInput() {
    // DONT START UNTIL INPUT VALUE IS GREATER THAN 3 CHARS
    // ENCODE ANY SPACES FOR URLS
    // SET EVENT LISTENER FOR CLICKING OUTSIDE AREA - CLOSE IF IT HAPPENS
    if (searchInput.value.length > 3) {
        searchClear.style.visibility =  'visible';
        searchMoviesData(searchInput.value.replace(/\s/g, '%20'));
    };
    // WHEN VALUE GOES BACK UNDER 3 CHARS RESET
    if (searchInput.value.length < 4) {
        searchResults.innerHTML = '';
    };
    // IF VALUE IS 0 HIDE THE CLOSE/CLEAR BUTTON
    if (searchInput.value.length == 0) {
        searchClear.style.visibility = 'hidden';
    };
};

/////////////////////////////////////////////////////////
// Hide Movie Details when on top
window.onscroll = function() {
    if(window.scrollY < 200){
        fullMediaContent.style.display = 'none';
    }
}();

//////////////////////////////////////////////////////////
// Alert Message
export function Message(message) {
    alertMessage.innerHTML = `
        <p>${ message }</p>
    `;
    alertMessage.style.top = "20px";
    setTimeout(() => {
        alertMessage.style.top = "-100px";
    }, 3000);
}
