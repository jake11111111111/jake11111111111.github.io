const movies = [];

function addMovie() {
  const input = document.getElementById('movieInput');
  const movie = input.value.trim();
  if (movie) {
    movies.push(movie);
    updateMovieList();
    input.value = '';
  }
}

function updateMovieList() {
  const listDiv = document.getElementById('movieList');
  listDiv.innerHTML = "<strong>Movie List:</strong><br>" + movies.join(', ');
}

function spin() {
  if (movies.length === 0) {
    alert("Add some movies first!");
    return;
  }
  const spinner = document.getElementById('spinner');
  let count = 20;
  let i = 0;
  const interval = setInterval(() => {
    spinner.textContent = movies[Math.floor(Math.random() * movies.length)];
    i++;
    if (i >= count) {
      clearInterval(interval);
    }
  }, 100);
}
