const TMDB_API_KEY = '3fd2be6f0c70a2a598f084ddfb75487c'; // Replace with your actual TMDb API key
const BASE_API_URL = 'https://api.themoviedb.org/3/';
const POPULAR_MOVIES_URL = `${BASE_API_URL}discover/movie?sort_by=popularity.desc&api_key=${TMDB_API_KEY}&page=1`;
const SEARCH_MOVIES_URL = `${BASE_API_URL}search/movie?api_key=${TMDB_API_KEY}&query=`;
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w1280';

const movieDisplayArea = document.getElementById('movieDisplayArea');
const movieSearchForm = document.getElementById('movieSearchForm');
const searchInput = document.getElementById('searchInput');
const clearSearchButton = document.getElementById('clearSearchBtn');

// Get initial popular movies
fetchMovies(POPULAR_MOVIES_URL);

async function fetchMovies(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayMovies(data.results);
    } catch (error) {
        console.error('Error fetching movies:', error);
        displayErrorMessage('Failed to load movies. Please try again later.');
    }
}

function displayMovies(movies) {
    movieDisplayArea.innerHTML = ''; // Clear existing movies

    if (movies.length === 0) {
        displayErrorMessage('No movies found for your search.');
        return;
    }

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie;

        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        const posterSrc = poster_path ? IMAGE_BASE_URL + poster_path : 'https://via.placeholder.com/300x450?text=No+Image';

        movieCard.innerHTML = `
            <img src="${posterSrc}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getRatingClass(vote_average)}">${vote_average}</span>
            </div>
            <div class="movie-overview">
                <h3>Overview</h3>
                ${overview || 'No overview available.'}
            </div>
        `;
        movieDisplayArea.appendChild(movieCard);
    });
}

function getRatingClass(vote) {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}

function displayErrorMessage(message) {
    movieDisplayArea.innerHTML = `<div class="error-message"><h1>${message}</h1></div>`;
}

movieSearchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = searchInput.value.trim();

    if (searchTerm) {
        fetchMovies(SEARCH_MOVIES_URL + searchTerm);
    } else {
        // If search term is empty, show popular movies again
        fetchMovies(POPULAR_MOVIES_URL);
    }
});

clearSearchButton.addEventListener('click', () => {
    searchInput.value = '';
    fetchMovies(POPULAR_MOVIES_URL);
});
