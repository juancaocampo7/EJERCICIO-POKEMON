
const btnAgregar = document.querySelector('#btnAgregar');

btnAgregar.addEventListener('click', function(){
const numeroPokemon = document.querySelector('#numeroPokemon').value;
const container = document.querySelector ('#container');
const cardDiv = document.createElement('div');
const imgBx = document.createElement('div');
const imgPokemon = document.createElement('img'); 
cardDiv.classList.add('card');
imgBx.classList.add('imgBx');
imgPokemon.src = `img/${numeroPokemon}.png`;
imgPokemon.alt ="Pokemon"; 

imgBx.append(imgPokemon);
cardDiv.append(imgBx);
container.append(cardDiv);
})


