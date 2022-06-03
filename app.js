// grab DOM elements

const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name-display');

const evolutionSelect = document.getElementById('evolution-select');
const imageDisplay = document.getElementById('image-display');

const moveSelect = document.getElementById('move-select');
const pokeCard = document.getElementById('poke-card');


const exportButton = document.getElementById('export-button');


// set event listeners

exportButton.addEventListener('click', () => {

});

evolutionSelect.addEventListener('change', () => {
    const src = 'assets/pokemon/' + evolutionSelect.value;
    imageDisplay.src = src;

});
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state
