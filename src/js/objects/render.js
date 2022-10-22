export const screen = {
    pokemon: document.querySelector('.pokemon-card'),
    renderPokemon(pokemon){
        this.pokemon.classList.add('display')
        this.pokemon.innerHTML = `<div class="poke-infos"> 
                                    <h3 class="info">#${pokemon.id}</h3>
                                    <h3 class="info">${pokemon.species.name}</h3>
                                 </div>
                                <div class="pokemon-list">
                                    <div class="poke-type">
                                        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="pokemon sprite">
                                        <p> ${pokemon.types[0].type.name} </p>
                                    </div>
                                </div>

                                <hr>
                                <h3 class="info"> Abilities </h3>

                                `
        let pokemonAbilities = ''
        pokemon.abilities.forEach(ability => {
            pokemonAbilities += `<li class="abilities-name">${ability.ability.name}</li>`
        })

        this.pokemon.innerHTML += `
                                <ul class="pokemon-list">
                                    ${pokemonAbilities}
                                </ul>
                            `
    },
    renderPokemonNotFound(){
        this.pokemon.classList.add('display')
        this.pokemon.innerHTML = `<h4 style="text-align:center;"> Error 404 - Pokemon not found! </h4> `
    }
}