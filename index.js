
const moviesWrapper = document.querySelector(".movies");
const searchName = document.querySelector(".searchName");
let currentMovies = [];

//LOG IN AND REGISTRATION


function searchChange(event) {
  renderMovies(event.target.value);
  searchName.innerHTML = event.target.value;
}

function showSkeletons(count = 6) {
    moviesWrapper.innerHTML = "";
    for (let i = 0; i < count; i++) {  //LOOP OVER SIX TIMES
        const skeleton = document.createElement("div");  //CREATE DIV FOR SKELETON
        skeleton.classList.add("movie", "movies__loading--skeleton");  //SKELETON PLACEHOLDER DISPLAY
        moviesWrapper.appendChild(skeleton);  
    }
}

//RENDERING MOVIES
async function renderMovies(searchTerm) {
   showSkeletons(9)  //SKELETON LOADING

  const response = await fetch(
    `https://www.omdbapi.com/?s=${searchTerm}&apikey=6cc6546`  //API PULL
  );

  moviesWrapper.classList.remove('movies__loading--skeleton');  //SKELETON LOADING

  const data = await response.json();  //CONVERT TO HTML
  currentMovies = data.Search;
  displayMovies(currentMovies);
}

//DISPLAYING MOVIES

function displayMovies(movieList) {
  moviesWrapper.innerHTML = movieList
    .slice(0, 9)
    .map((movie) => {
      return `
        <div class="movie">
        <img src=${movie.Poster}alt="" />
        <h2>${movie.Title}</h2>
        <h4>${movie.Year}</h4>
        <button>Learn More</button>
        </div>
        `;
    })
    .join("");
}

// DISPLAYING MOVIES

function sortChange(event) {
  const sortOption = event.target.value;

  let sortedMovies = [...currentMovies];

  if (sortOption === "newest") {
    sortedMovies.sort((a, b) => b.Year - a.Year);
  } else if (sortOption === "oldest") {
    sortedMovies.sort((a, b) => a.Year - b.Year);
  }
  displayMovies(sortedMovies);
}

// TOGGLE MODAL //

const click = ("email", "password")

function logIn(click) {
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
  // if (email && password || "email" && "password") {
  //   then(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
    if (email && password || "email" && "password") {
    then(() => {
  })
  }
}


let isModalOpen = false;
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}