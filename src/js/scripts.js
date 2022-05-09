const pokeInput = document.querySelector('#poke-search');
const btnSearch = document.querySelector('#btn-search');
const cardPokemon = document.querySelector('.card-pokemon');

pokeInput.addEventListener('keyup', sendInformationWithEnterKey);

btnSearch.addEventListener('click', function () {
    let value = document.querySelector('#poke-search').value;
    getPokemonInformations(value);
});

/**
 * 
 * 
 */

function sendInformationWithEnterKey(event){
    if (event && event.keyCode === 13){
       getPokemonInformations(pokeInput.value);
    }
}

const getPokemonInformations = (value) =>{
    let html = '';
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`).then((response) => {

        return response.json();
    }).then((response) => {
      
        const pokemonInfo = response; 
   
            html += `
                <div class="poke-name"> 
                    <h3> #${pokemonInfo.id}</h3>
                    <h3>${pokemonInfo.species.name}</h3>
                </div>
                <ul class="pokemon-list">

                    <li>
                        <div>
                            <img id="poke-photo" src="${pokemonInfo.sprites.other.dream_world.front_default}">
                        </div>
                             
                    </li>
                </ul>

                <ul class="pokemon-list">
                    <li>
                        <div class="poke-type">
                            <b> ${pokemonInfo.types[0].type.name} </b>
                        </div>
                    </li>
                </ul>

                <hr>
                <h3> Abilities </h3>
            `
        for (let i = 0; i < pokemonInfo.abilities.length; i++) {

            html += `
                <ul>
                    <li>
                        <div>
                            <p class="abilities-name">${pokemonInfo.abilities[i].ability.name}</p>
                        </div>
                    </li>
                </ul>
            `
            
        }      
        cardPokemon.innerHTML = html;
        cardPokemon.classList.add('display');

    }).catch(function (error) {
        html += `
            <h4 style="text-align:center;"> Error 404 - Pokemon not found! </h4>
        `
        cardPokemon.innerHTML = html;
        cardPokemon.classList.add('display');
    });
    
   
}
