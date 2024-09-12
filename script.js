// console.log("Starting JavaScript")

// while(true) {
//     console.log("New Turn")
//     await waitFor()
// }

// async function waitFor() {
//     return new Promise((resolve) => {
//         setTimeout(() => {resolve()}, 3000)
//     })
// }

const apiUrl = 'https://ghibliapi.vercel.app/films';

const response = await fetch(apiUrl);
const data = await response.json();

const movieListElement = document.querySelector('#movie-list');

const templateString = `
    <img>
    <p class="title"></p>
`;

for (const movie of data) {
  const movieCard = createMovieCard(movie);
  movieListElement.append(movieCard);
}

function createMovieCard(movie) {
  const movieCard = document.createElement('li');
  movieCard.className = 'movie-card';

  movieCard.innerHTML = templateString;

  const poster = movieCard.querySelector('img');
  poster.src = movie.image;

  const title = movieCard.querySelector('.title');
  title.textContent = movie.title;

  return movieCard;
}
