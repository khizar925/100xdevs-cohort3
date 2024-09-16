document.getElementById("fetch-pokemon").addEventListener("click", function () {
  const numPokemon = parseInt(document.getElementById("num-pokemon").value, 10);
  const pokemonType = document.getElementById("pokemon-type").value;

  // Clear previous cards
  const pokemonCards = document.getElementById("pokemon-cards");
  pokemonCards.innerHTML = "";

  // Fetch and render Pokémon
  fetchAndRenderPokemon(numPokemon, pokemonType);
});

async function fetchAndRenderPokemon(num, type) {
  if (isNaN(num) || num <= 0) return; // Ensure num is a valid positive number

  let count = 0;
  let id = 1;
  const pokemonPromises = [];

  while (count < num && id <= 151) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    // Fetch multiple Pokémon in parallel
    pokemonPromises.push(fetch(url).then((response) => response.json()));

    id++;
  }

  // Process all promises in parallel
  const allPokemon = await Promise.all(pokemonPromises);

  allPokemon.forEach((pokemon) => {
    const pokemonTypes = pokemon.types.map((t) => t.type.name);
    if (pokemonTypes.includes(type) && count < num) {
      renderPokemonCard(pokemon);
      count++;
    }
  });
}

function renderPokemonCard(pokemon) {
  const pokemonCards = document.getElementById("pokemon-cards");

  // Create a card element
  const card = document.createElement("div");
  card.classList.add("card");

  // Add Pokémon details
  card.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
        <p>Type: ${pokemon.types.map((t) => t.type.name).join(", ")}</p>
        <p>Weight: ${pokemon.weight}kg</p>
    `;

  pokemonCards.appendChild(card);
}
