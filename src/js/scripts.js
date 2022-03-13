const pokeInput = document.querySelector('#poke-search');
const btnSearch = document.querySelector('#btn-search');
const pokemon = document.querySelector('.card-pokemon');

pokeInput.addEventListener('keyup', showValueInput);


function showValueInput(e){
   if(e && e.keyCode === 13){
        getPokemon(pokeInput.value);
   }

}
const getPokemon = (value) =>{
    let html = '';
    fetch(`https://pokeapi.co/api/v2/pokemon/${value}`).then((resposta) => {

        return resposta.json();
    }).then((resposta) => {
      
        const r = resposta;
   
            html += `
                <div class="poke-name"> 
                    <h3> #${r.id}</h3>
                    <h3>${r.species.name}</h3>
                </div>
                <ul class="pokemon-list">

                    <li>
                        <div>
                            <img id="poke-photo" src="${r.sprites.other.dream_world.front_default}">
                        </div>
                             
                    </li>
                </ul>


                <ul class="pokemon-list">

                    <li>
                        <div class="poke-type">
                            <b> ${r.types[0].type.name} </b>
                        </div>


                    </li>
                </ul>

                <hr>
                <h3> Abilities: </h3>
            `
        for (let i = 0; i < r.abilities.length; i++) {

            html += `
               
                <ul>

                    <li>
                            <div>
                                <b class="abilities-name">${r.abilities[i].ability.name}</b>
                            </div>
        
                    </li>
                </ul>
            `
            
        }      
        pokemon.innerHTML = html;
        pokemon.style.display = 'block';
    }).catch(function (error) {
        html += `
            <h3> Error 404 - Pokemon not found! </h3>
        `

        pokemon.innerHTML = html;
        pokemon.style.display = 'block';
    });
    
   
}

btnSearch.addEventListener('click', function(){
    let value = document.querySelector('#poke-search').value;
    getPokemon(value);

});