const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODAwZmJiZTJlNjUxZDVhNGNjN2ZmM2I3YmMwZjc1MyIsInN1YiI6IjY2MjllZjFiMGRlYTZlMDExYzc1ZjAwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O8LbhIdv582X3vLXxTj9TY6d_Sr9JZd2afpjyg0-VC8'
  }
};

const apiKey = "8800fbbe2e651d5a4cc7ff3b7bc0f753"
fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}8800fbbe2e651d5a4cc7ff3b7bc0f753language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(response => {
    let movieResult = response["results"];
    let cardList = document.getElementById('cardList');

    movieResult.forEach(element => {
      let movieTitle = element["original_title"];
      let moviePlot = element["overview"];
      let movieRating = element["vote_average"];
      let movieImage = "https://image.tmdb.org/t/p/w500" + element["poster_path"];

      let tempCard = `
  
      <section class="card-list">
        <a href="/movie-sample/">
          <div class="movie-card">
            <img 
              class="movie-image"
              src="${movieImage}"
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
      return cardList;
      cardList.innerHTML += tempCard;
    });
  })
  .catch(error => {
    console.log('error', error);
  })


// 검색 구현
// 1. 영화 카드 리스트 선택하기
// 2. 영화 카드 리스트 클릭하면 영화 상세 페이지로 이동(입력값에 따라서 포함여부 확인)
// 3. 영화 상세 페이지에서 영화 정보 출력 