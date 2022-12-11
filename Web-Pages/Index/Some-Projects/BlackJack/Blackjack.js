let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = '';
let messageEl = document.getElementById('message');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
let newCardButton = document.getElementsByClassName('new-card');
let quitGameButton = document.getElementsByClassName('quit-game');

let player = {
    name: "Jordan",
    chips: 200
};

let playerEl = document.getElementById('player-el');
playerEl.textContent = player.name + ": £" + player.chips;

function getRandomCard() {
    let randomNumber =  Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
};

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
};

function renderGame() {

    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + "  ";
    };

    sumEl.textContent = "Sum: " + sum;
    if (sum < 21) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true;
    } else {
        message = "You're out of the game!"
        isAlive = false;
    }

    messageEl.textContent = message;
};

let show = document.querySelector('.show');
let hide = document.querySelector('.hide');
let gameText = document.querySelector('.text');
let startButton = document.querySelector('.position');

function showHide() {
    if (startButton.classList.contains('show')) {
        startButton.classList.remove('show');
        startButton.classList.add('hide');

        gameText.classList.remove('hide');
        gameText.classList.add('show');
    }
};

function newCard() {
    if (hasBlackJack === false && isAlive === true) {
        let card = getRandomCard();
        sum += card;

        cards.push(card + "  ");

        renderGame();
    };
};

function quitGame() {
    if (startButton.classList.contains('hide')) {
        startButton.classList.remove('hide');
        startButton.classList.add('show');

        gameText.classList.remove('show');
        gameText.classList.add('hide');
    }
    location.reload();
};