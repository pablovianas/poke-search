import { screen } from "./objects/render.js"

const form = document.querySelector('.pokemon-search')

form.addEventListener('submit', async (event)=> {
    event.preventDefault()
    const pokemonNotFound = 404 
    const pokemonName = document.getElementById('poke-search').value
    const pokemonInfo = await getPokemons(pokemonName)
    
    pokemonInfo === pokemonNotFound ? screen.renderPokemonNotFound() : screen.renderPokemon(pokemonInfo)  
})

async function getPokemons(pokemonName){
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
    if(pokemon.status === 404){
        return pokemon.status
    }else{
        const pokemonJson = await pokemon.json()
        return await pokemonJson
    }
}