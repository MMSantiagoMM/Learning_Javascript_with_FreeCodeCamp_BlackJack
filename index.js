let firsCard = randomCards();
let secondCard = randomCards();
let cards = [firsCard, secondCard];
let sum = cards[0] + cards[1];
let Subtitle = document.getElementById("subtitle");
let message = "";
let Cards_el = document.getElementById("cards_el");
let Sum_el = document.getElementById("sum_el");
let Alive = false;
let blackjack = false;

function randomCards() {
    let cardrandom = Math.floor(Math.random() * 13) + 1;
    if (cardrandom === 1)
        return 11
    else if (cardrandom > 10)
        return 10
    else
        return cardrandom;
}
function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        Alive = false;
    } else if (sum === 21) {
        message = "Wooow! You're got out blackjack"
        blackjack = true;
    } else {
        message = "You're out of the game"
    }
    Subtitle.textContent = message;
    Sum_el.textContent = "Sum: " + sum;
    Cards_el.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        Cards_el.textContent += cards[i] + " "
    }
}
function newCard() {
    let thirdCard = randomCards();
    if (Alive === false) {
        cards.push(thirdCard);
    }
    sum += cards[2];
    startGame() 
   
}