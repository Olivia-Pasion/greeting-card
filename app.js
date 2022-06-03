// grab DOM elements

const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name-display');

const evolutionSelect = document.getElementById('evolution-select');
const imageDisplay = document.getElementById('image-display');

const moveSelect = document.getElementById('move-select');
const pokeCard = document.getElementById('poke-card');

const hobbyDisplay = document.getElementById('hobby-display');
const hobbyText = document.getElementById('hobby-text');


const exportButton = document.getElementById('export-button');


// set event listeners

exportButton.addEventListener('click', async () => {
    const dataUrl = await domtoimage.toPng(pokeCard);
    const link = document.createElement('a');
    link.download = nameInput.value + '.png';
    link.href = dataUrl;
    link.click();
});

evolutionSelect.addEventListener('change', () => {
    const src = 'assets/pokemon/' + evolutionSelect.value;
    imageDisplay.src = src;

});

moveSelect.addEventListener('change', () => {
    pokeCard.classList.value = ' ';
    pokeCard.classList.add(moveSelect.value);
});

nameInput.addEventListener('input', () => {
    nameDisplay.textContent = nameInput.value;
});

hobbyText.addEventListener('input', () => {
    hobbyDisplay.textContent = hobbyText.value;
});


    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state
