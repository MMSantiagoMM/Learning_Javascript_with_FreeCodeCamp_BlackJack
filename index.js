let Subtitle = document.getElementById("subtitle");
let Cards_el = document.getElementById("cards_el");
let Sum_el = document.getElementById("sum_el");
let firstCard = randomCard();
let secondCard = randomCard();
let cardsArray = [firstCard, secondCard];
let sum = cardsArray[0] + cardsArray[1];
let Player_el = document.getElementById("player-el")
let player = { name: "Santiago", pay: 145 + "$" };
let isAlive = true;
let blackJack = false;
let message = "";
const Boton = document.getElementById("boton");
const newCard = document.getElementById("newCard");

function randomCard() {
    let card = Math.floor(Math.random() * 13) + 1;
    if (card == 1)
        return 11
    else if (card > 10)
        return 10
    else
        return card
}

Boton.addEventListener("click", funBoton = () => {
    Cards_el.textContent = "Cards: "
    for (let i = 0; i < cardsArray.length; i++) {
        Cards_el.textContent += cardsArray[i] + " ";
    }
    if (sum < 21)
        message = "Do you want a new card?"
    else if (sum == 21) {
        message = "Wooow! You out BlackJack!"
        blackJack = true;
    } else {
        message = "You got out of the game"
        isAlive = false;
    }
    Subtitle.textContent = message;
    Sum_el.textContent = "Sum: " + sum;
})

newCard.addEventListener("click", funNew = () => {
    if (isAlive == true && blackJack == false) {
        let thirdCard = randomCard();
        cardsArray.push(thirdCard);
        sum += cardsArray[2];
        funBoton();
        Player_el.textContent= player.name +" "+  player.pay;
    }
})