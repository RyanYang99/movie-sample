function tmdbApi() {
    const apiKey = '8800fbbe2e651d5a4cc7ff3b7bc0f753';
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => movieData(data.results))
        .catch(error => console.error('Error fetching movies:', error));
}

document.addEventListener('DOMContentLoaded', function () {
    tmdbApi();
});

function movieData(datas) {
    const cardList = document.getElementById('cardList');

    datas.forEach(movies => {
        const movieCard = createCard(movies);
        cardList.appendChild(movieCard);

        movieCard.addEventListener('click', () => {
            showId(movies.id);
        })
    });
}

function createCard(movie) {
    const movieImage = movie.poster_path;
    const movieTitle = movie.title;
    const moviePlot = movie.overview;
    const movieRating = movie.vote_average.toFixed(2);

    const movieCard = document.createElement('div');
    movieCard.classList.add('card');
    movieCard.classList.add('movieCard');
    movieCard.style.width = '18rem';

    movieCard.innerHTML = `
    <section class="card-list">
        <div>
          <div class="movie-card">
            <img 
              class="movie-image"
              src = "https://image.tmdb.org/t/p/w500${movieImage}"
            />
          </div>
          <div class="movie-info">
            <div class="movie-title">
              <span> ${movieTitle} </span>
            </div>
            <div class="moviePlot">
              <span> ${moviePlot} </span>
            </div>
            <div class="movieRating>
              <span> ${movieRating} </span>
            </div>
          </div>
        </a>
      </section> `
        ;
    return movieCard;
}

// 영화 검색
const searchInput = document.getElementById('search-Results');
searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    const movieCards = document.querySelectorAll('.movieCard');

    movieCards.forEach(card => {
        const title = card.querySelector('.movie-title').textContent.toLowerCase();
        if (title.indexOf(searchTerm) !== -1) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// 검색 기능
function showId(id) {
    alert(`id : ${id}`);
  }