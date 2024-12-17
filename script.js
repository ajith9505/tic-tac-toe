const game = document.getElementById('game')
const box = document.getElementsByClassName('box');
const container = document.getElementById('container');
const resetBtn = document.getElementById('reset-btn');
const playAgain = document.getElementById('play-again');

let lastInput = '';

//initialize array with dummy value for store game dat
let gameData = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

//game status checking function
function checkStatus() {
    //swich case for checking game status
    switch (true) {
        case (gameData[0] === gameData[1]) && (gameData[1] === gameData[2]):
            container.innerHTML = `
            <div class=winner>${gameData[0]} Is Winner</div>
            <button id = play-again>Play Again</button>`;
            playAgain.addEventListener('click', () => location.reload);
            break;
        case (gameData[3] === gameData[4]) && (gameData[4] === gameData[5]):
            container.innerHTML = `<div class=winner>${gameData[3]} Is Winner</div>`;
            break;
        case (gameData[6] === gameData[7]) && (gameData[7] === gameData[8]):
            container.innerHTML = `<div class=winner>${gameData[6]} Is Winner</div>`;
            break;
        case (gameData[0] === gameData[3]) && (gameData[3] === gameData[6]):
            container.innerHTML = `<div class=winner>${gameData[0]} Is Winner</div>`;
            break;
        case (gameData[1] === gameData[4]) && (gameData[4] === gameData[7]):
            container.innerHTML = `<div class=winner>${gameData[1]} Is Winner</div>`;
            break;
        case (gameData[2] === gameData[5]) && (gameData[5] === gameData[8]):
            container.innerHTML = `<div class=winner>${gameData[2]} Is Winner</div>`;
            break;
        case (gameData[0] === gameData[4]) && (gameData[4] === gameData[8]):
            container.innerHTML = `<div class=winner>${gameData[0]} Is Winner</div>`;
            break;
        case (gameData[2] === gameData[4]) && (gameData[4] === gameData[6]):
            container.innerHTML = `<div class=winner>${gameData[2]} Is Winner</div>`;
            break;
    }
}

function reset() {
    for (let i = 0; i < 9; i++) {
        box[i].innerText = '';
        gameData[i] = String(i)
        lastInput = '';
    }
}

for (let i = 1; i <= 9; i++) {
    //creating new elements for game boxes
    game.innerHTML += `<span id=${i} class= box></span>`;
}
for (let i = 0; i < 9; i++) {
    //handling the click on boxes
    box[i].addEventListener('click', () => {
        if (!box[i].innerText) box[i].innerText = lastInput === 'O' || !lastInput ? 'X' : 'O';
        gameData[i] = box[i].innerText
        lastInput = box[i].innerText
        checkStatus();
    })
}

resetBtn.addEventListener('click', () => reset());