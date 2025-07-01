const pokemonGrid = document.getElementById('pokemonGrid');
const pokemonSearchInput = document.getElementById('pokemonSearch');
const searchButton = document.getElementById('searchBtn');

const POKEMON_COUNT = 150; // Number of Pokémon to fetch initially

const typeColors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
};

const mainTypes = Object.keys(typeColors);

// Function to show/hide loading spinner (new feature)
function toggleLoadingSpinner(show) {
    if (show) {
        pokemonGrid.innerHTML = '<div class="loading-spinner"></div>';
    } else {
        const spinner = document.querySelector('.loading-spinner');
        if (spinner) spinner.remove();
    }
}

const fetchAllPokemons = async () => {
    toggleLoadingSpinner(true); // Show spinner
    pokemonGrid.innerHTML = ''; // Clear previous content
    for (let i = 1; i <= POKEMON_COUNT; i++) {
        await getPokemon(i);
    }
    toggleLoadingSpinner(false); // Hide spinner
};

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');

    const pokemonName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const pokemonId = pokemon.id.toString().padStart(3, '0');

    const pokemonTypes = pokemon.types.map(type => type.type.name);
    const mainType = mainTypes.find(type => pokemonTypes.indexOf(type) > -1);
    const cardColor = typeColors[mainType];

    pokemonCard.style.backgroundColor = cardColor;

    const cardHTML = `
    <div class="image-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemonName}">
    </div>
    <div class="details">
        <span class="pokemon-id">#${pokemonId}</span>
        <h3 class="pokemon-name">${pokemonName}</h3>
        <small class="pokemon-type">Type: <span>${mainType}</span> </small>
    </div>
    `;

    pokemonCard.innerHTML = cardHTML;
    pokemonGrid.appendChild(pokemonCard);
};

// Search functionality
searchButton.addEventListener('click', async () => {
    const searchTerm = pokemonSearchInput.value.toLowerCase().trim();
    if (searchTerm) {
        toggleLoadingSpinner(true); // Show spinner
        pokemonGrid.innerHTML = ''; // Clear previous content
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;
            const res = await fetch(url);
            if (res.ok) {
                const data = await res.json();
                createPokemonCard(data);
            } else {
                pokemonGrid.innerHTML = '<p>No Pokémon found with that name or ID.</p>';
            }
        } catch (error) {
            console.error('Error searching Pokémon:', error);
            pokemonGrid.innerHTML = '<p>An error occurred during search.</p>';
        }
        toggleLoadingSpinner(false); // Hide spinner
    } else {
        fetchAllPokemons(); // If search is empty, show all pokemons
    }
});

// Initial fetch
fetchAllPokemons();