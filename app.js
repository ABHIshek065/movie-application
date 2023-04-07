let intro = document.getElementById("intro");
let loader = document.getElementById("loader");
let img = document.getElementById('poster')
let MovieName = document.getElementById('MovieName')
let plot = document.getElementById('plot')
let actor = document.getElementById('actor')
let movieName = document.getElementById("movieName");
let movieContainer = document.getElementById('movieContainer')
let award = document.getElementById('awards')
let director = document.getElementById('director')
let action = document.getElementById('action')
let language = document.getElementById('language')
let year = document.getElementById('year')
let rating = document.getElementById('rating')
document.getElementById('release')
document.getElementById('runtime')


let API = "https://www.omdbapi.com/?apikey=61e576a4&t=";

let loadingStatus = false;




function checkLoaderStatus() {
  intro.style.display = "none";
  if (loadingStatus == true) {
    loader.classList.add("loader");
  } else {
    loader.classList.remove("loader");
  }
}

function renderMovie(data){
  img.src = data.Poster
  MovieName.innerText = data.Title
  plot.innerText = data.Plot
  actor.innerText = data.Actors
  award.innerText = data.Awards
  director.innerText = data.Director
  action.innerText = data.Action
  language.innerText = data.Language
  year.innerText = data.Year
  rating.innerText = data.imdbRating
  release.innerText = data.Released
  runtime.innerText = data.Runtime
}

function fetchMovieDetails() {
  loadingStatus = true;

  checkLoaderStatus();
  let apiQuery = API + movieName.value;
  // console.log(apiQuery);
  fetch(apiQuery)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      loadingStatus = false;
      checkLoaderStatus();
      renderMovie(data)
      movieContainer.classList.remove ('none')
    });
}



