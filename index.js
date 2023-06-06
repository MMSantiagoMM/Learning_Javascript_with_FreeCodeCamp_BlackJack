let firsCard = randomCard();
let secondCard = randomCard();
let Cards_array = [firsCard, secondCard]
let sum = Cards_array[0] + Cards_array[1];
let message = " "
let Subtitle = document.getElementById("subtitle")
let Sum_el = document.getElementById("sum_el")
let Cards_el = document.getElementById("cards_el")
let hasBlackJack = false;
let isAlive = true;
let player = {
    name: "Per",
    chips: 145
}

let playerEl = document.getElementById("player-el") 
playerEl.textContent = player.name + ": $" + player.chips;

function randomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10)
        return 10;
    else if (randomNumber === 1)
        return 11;
    else
        return randomNumber
}

function startGame() {
    if (sum <= 20)
        message = "Do you want to draw a new card?"
    else if (sum === 21) {
        message = " Wooou! you've got blackjack"
        hasBlackJack = true
    } else {
        message = " You're out of the game"
        isAlive = false
    }
    Subtitle.textContent = message;
    Sum_el.textContent = "Sum: " + sum;
    Cards_el.textContent = "Cards: "

    for (let i = 0; i < Cards_array.length; i++) {
        Cards_el.textContent += Cards_array[i] + " ";
    }
}
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let thirdCard = randomCard();
        Cards_array.push(thirdCard);
        sum += Cards_array[2];
        startGame();
    }
}