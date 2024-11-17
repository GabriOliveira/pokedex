


const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;


function convertPokemonToHtml(pokemon){
    return `<li class="pokemon ${pokemon.type}" >
        <span class="number">#0${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
          <ol class="types">
           ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
          </ol>
          <img src="${pokemon.photo}" alt="${pokemon.name}" />
        </div>
          </li>
    `
}

const pokemonList = document.getElementById('pokemonList'); //pegamos a nossa lista em html

pokeApi.getPokemons().then((pokemons = []) => {
  pokemonList.innerHTML += pokemons.map(convertPokemonToHtml).join('')

})
    

