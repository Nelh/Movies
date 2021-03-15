(()=>{"use strict";const e="https://image.tmdb.org/t/p/w200",t="https://www.themoviedb.org/assets/1/v4/logos/408x161-powered-by-rectangle-blue-10d3d41d2a0af9ebcb85f7fb62ffb6671c15ae8ea9bc82a2c6941f223143409e.png",n=document.querySelector(".background-poster"),a=document.querySelector("#banner"),i="?api_key=087a15f97ae0caf207dbc11e4e297393",s="https://api.themoviedb.org/3/movie/",r="https://api.themoviedb.org/3/tv/",o="&language=en-US";let l,c;function d(p,u,v=1){let h=[];"movies"==p?l=s:"tvshows"==p&&(l=r),fetch(`${l}${u}${i}${o}&page=${+v}`,{headers:new Headers({Accept:"application/json"})}).then((e=>e.text())).then((s=>{c=JSON.parse(s),c.results.forEach((e=>{h.push(e.id)}));let r=h[Math.floor(Math.random()*h.length)];fetch(`${l}${r}${i}${o}&append_to_response=videos`,{headers:new Headers({Accept:"application/json"})}).then((e=>e.text())).then((e=>{c=JSON.parse(e),function(e){const t=e.id||"0",i=e.title?e.title:e.name;let s=[];0!=e.videos.results.length?s=e.videos.results.map((e=>{if("Trailer"==e.type)return`https://www.youtube.com/watch?v=${e.key}`})).filter((e=>{if("undefined"!=e)return e})):s[0]=`https://www.youtube.com/results?search_query=${i}`,n.style.backgroundImage="url(https://image.tmdb.org/t/p/original"+e.backdrop_path+")",a.innerHTML=`\n        <h2 class="text-white">${e.hasOwnProperty("adult")?"Movie":"Tv Show"}</h2>\n        <h1 class="display-lg mw-md">${i.length>30?i.substring(0,30)+"...":i}</h1>\n        <p class="display-md mw-md p-y-30">${e.overview.length>300?e.overview.substring(0,300)+"...":e.overview}</p>\n        <p>\n            <a href="${s[0]}" target="_blank" class="btn btn-purple btn-large btn-rounded"><img class="w-20px fill-purple" src="./assets/images/icons/fi-rr-play.svg"> Play Trailer</a>\n            <a href="#" class="btn btn-large btn-rounded mx-3 add_favourite" data-id="${t}" data-type="${e.hasOwnProperty("adult")?"movie":"tv"}"><img class="w-20px fill-purple" src="./assets/images/icons/fi-rr-heart.svg"> Add to favourite</a>\n            <span class="badge">${e.vote_average}</span>\n        </p>\n    `}(c)})).catch((e=>e)),function(n){if(!n.length)return;g.innerHTML="";let a=1,i=[...n];function s(a){if(a<=Math.ceil(i.length/9)){n.splice(0,9).map((n=>{const a=n.title||n.name||"Unknown";let i,s=`${e}${n.poster_path}`,r=n.release_date||n.first_air_date||"";null==n.poster_path&&(s=t),i=n.hasOwnProperty("adult")?"movie":"tv",g.innerHTML+=`\n                    <div class="card">\n                        <img src="${s}" class="card-img-custom img-fluid" alt="${a}">\n                        <div class="info">\n                            <h4>${a.length>25?a.substring(0,25)+"...":a}</h4>\n                            <div>Relesase: ${r} </br> <span class="rating">${n.vote_average||"0"}</span></div>\n                            <a href="#" class="btn btn-large add_favourite" data-id="${n.id}" data-type="${n.hasOwnProperty("adult")?"movie":"tv"}">Add to favourite</a>\n                            <button class="btn btn-large mt-10px card-element" data-id="${n.id}" data-type="${i}">Read More</button>\n                        </div>\n                    </div>\n                `}));let a=document.getElementById("view-more");0==n.length?a.style.display="none":a.style.display="inline-block"}}s(a),document.getElementById("view-more").addEventListener("click",(()=>{s(1+a++)}))}(c.results),function(e,t,n,a){let i,s;a=parseInt(a),m.innerHTML="",n<=9?(i=1,s=n):a<=5?(i=1,s=9):a>5&&a<n-4?(i=a-4,s=a+4):(i=n-8,s=n),m.innerHTML+='<a class="pagination-box" data-page="1" href="#">First</a>';let r=0;for(;i+r<=s;)m.innerHTML+=`\n            <a class="pagination-box" data-page="${i+r}" href="#">${i+r}</a>\n        `,r++;m.innerHTML+=`<a class="pagination-box" data-page="${n}" href="#">Last</a>`;const o=document.querySelectorAll(".pagination-box");for(let e in o)a==o[e].innerText&&(o[e].style.backgroundColor="#1779ba",o[e].style.color="#fff");o.forEach((n=>{n.addEventListener("click",(n=>{n.preventDefault();var a=n.target.getAttribute("data-page");d(e,t,a)}))}))}(p,u,c.total_pages,v)})).catch((e=>e))}function p(n,a){l="movie"==n?s:r,fetch(`${l}${a}${i}${o}&append_to_response=videos`,{headers:new Headers({Accept:"application/json"})}).then((e=>e.text())).then((n=>{c=JSON.parse(n),function(n){const a=n.title||n.name||"Unknown",i=n.tagline||`NO. SEASONS: ${n.number_of_seasons}  ~  NO. EPISODES: ${n.number_of_episodes}`||"",s=n.overview||"",r=n.vote_average||"0";let o=n.release_date||n.first_air_date||"",l=(n.status,`https://image.tmdb.org/t/p/w1280/${n.backdrop_path}`),c=`${e}${n.poster_path}`,d=[];o&&(o=o.split("-").reverse().join("-")),null==n.backdrop_path&&(l="https://www.themoviedb.org/assets/1/v4/logos/408x161-powered-by-rectangle-blue-10d3d41d2a0af9ebcb85f7fb62ffb6671c15ae8ea9bc82a2c6941f223143409e.png"),null==n.poster_path&&(c=t),0!=n.videos.results.length?d=n.videos.results.map((e=>{if("Trailer"==e.type)return`https://www.youtube.com/watch?v=${e.key}`})).filter((e=>{if("undefined"!=e)return e})):d[0]=`https://www.youtube.com/results?search_query=${a}`,f.innerHTML=`\n    <div class="card-info p-20px">\n        <div class="movie_image">\n            <img class="movie_poster" src="${c}" alt="${a}" />\n        </div>\n        <div class="about_movie">\n            <h3>${a} - ${i}</h3>\n            <div class="movie_info text-white">\n                <p>${o} - ${r}</p>\n            </div>\n            <div class="movie_desc">\n                <p class="mw-60">${s}</p>\n            </div>\n            <a href="${d[0]}" target="_blank" class="btn btn-large">Trailer</a>\n            <a href="#" class="btn btn-large add_favourite" data-id="${n.id||"0"}" data-type="${n.hasOwnProperty("adult")?"movie":"tv"}"><img class="w-20px" src="./assets/images/icons/fi-rr-star.svg">  Add to favorite</a>\n        </div>\n        <button class="btn btn-large close-media-content">close</button>\n    </div>\n    <div class="blur_back" style="background-image: url('${l}')"></div>`,f.style.display="block",f.style.marginBottom="0px",document.querySelector(".close-media-content").addEventListener("click",(()=>{f.style.display="none"}))}(c)})).catch((e=>e))}"undefined"!=typeof favourites&&Promise.all(favourites.map((async function(e){return l="movie"==e.type?s:r,await fetch(`${l}${e.id}${i}${o}&append_to_response=videos`,{headers:new Headers({Accept:"application/json"})}).then((e=>e.json()))}))).then((n=>{!function(n){if(!n.length)return;const a=document.querySelector(".card-block");n.map((n=>{const i=n.id,s=n.title||n.name||"Unknown";let r,o=`${e}${n.poster_path}`;null==n.poster_path&&(o=t),r=n.hasOwnProperty("adult")?"movie":"tv",a.innerHTML+=`\n        <div class="card">\n            <img src="${o}" class="card-img-custom img-fluid" alt="${s}">\n            <div class="info">\n                <h4>${s.length>25?s.substring(0,25)+"...":s}</h4>\n                <div><span class="rating">${n.vote_average||"0"}</span></div>\n                <a href="#" class="btn btn-large mt-10px remove_favourite" data-id="${i}">Remove</a>\n                <button class="btn btn-large mt-10px card-element" data-id="${n.id}" data-type="${r}">Read More</button>\n            </div>\n        </div>\n    `}))}(n)})).catch((e=>console.log(e)));const u=document.querySelector("#search-input"),v=document.querySelector(".search-clear"),h=document.querySelector("#search-results"),m=document.querySelector("#main-pagination"),f=document.querySelector("#show-movies-details"),g=document.querySelector("#card-box"),b=document.querySelector(".alert"),y=document.querySelector(".navbar-burger"),$=document.querySelector(".navbar-menu"),w=document.querySelectorAll(".navbar-item");function _(){$.classList.remove("navbar-menu--active"),h.innerHTML=""}function L(e){let t=e.split(","),n=t[0],a=t[1];switch(n){case"movies":case"tvshows":d(n,a)}void 0===m&&void 0===g&&void 0===f||(m.innerHTML="",g.innerHTML="",f.style.display="none")}function S(e){b.innerHTML=`\n        <p>${e}</p>\n    `,b.style.top="20px",setTimeout((()=>{b.style.top="-100px"}),3e3)}document.onclick=function(e){const t=e.target;if(t.classList.contains("search-clear")&&(u.value="",v.style.visibility="hidden",h.innerHTML=""),t.classList.contains("nav-filter")&&(L(t.dataset.nav),h.innerHTML=""),t.classList.contains("card-element")){var n=t.getAttribute("data-id");p(a=t.getAttribute("data-type"),n)}if(t.classList.contains("add_favourite")){e.preventDefault(),n=t.getAttribute("data-id");var a=t.getAttribute("data-type");fetch("./core/f_favourite_add.php",{method:"post",headers:new Headers({Accept:"application/json"}),body:JSON.stringify({id:n,type:a})}).then((e=>e.text())).then((e=>{console.info(e),S(e)}))}if(t.classList.contains("remove_favourite")){e.preventDefault();let n=t.getAttribute("data-id"),a=t.parentElement.parentElement;fetch("./core/f_favourite_remove.php",{method:"post",headers:new Headers({Accept:"application/json"}),body:JSON.stringify({id:n})}).then((e=>e.text())).then((e=>{console.info(e),a.remove(),S(e)}))}},document.oninput=function(e){var t;"search-input"===e.target.id&&(u.value.length>3&&(v.style.visibility="visible",t=u.value.replace(/\s/g,"%20"),fetch(`https://api.themoviedb.org/3/search/multi${i}&language=en-US&query=${t}&page=1&include_adult=false`,{headers:new Headers({Accept:"application/json"})}).then((e=>e.text())).then((e=>{c=JSON.parse(e),h.innerHTML="",function(e){if(e.length)for(let t=0;t<6;t++)if("movie"==e[t].media_type||"tv"==e[t].media_type){let n=e[t].media_type||"movie",a=e[t].title||e[t].name,i=e[t].release_date||e[t].first_air_date||"";i&&(i=i.slice(0,4)),h.innerHTML+=`\n                <p class="getMovie">\n                    ${a} (${i})\n                </p>\n            `,document.querySelectorAll(".getMovie").forEach((a=>{a.addEventListener("click",(a=>{a.preventDefault(),p(n,e[t].id),h.innerHTML="",u.value="",v.style.visibility="hidden"}))}))}}(c.results)})).catch((e=>e))),u.value.length<4&&(h.innerHTML=""),0==u.value.length&&(v.style.visibility="hidden"),_())},y.addEventListener("click",(()=>{$.classList.toggle("navbar-menu--active"),h.innerHTML=""})),w.forEach((function(e){e.addEventListener("click",(()=>{_(),h.innerHTML=""}))})),window.onresize=function(){_()},window.onscroll=void(window.scrollY<200&&(f.style.display="none")),L("movies,popular")})();