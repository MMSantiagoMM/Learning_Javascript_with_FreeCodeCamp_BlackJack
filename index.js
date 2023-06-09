const Boton = document.getElementById("boton");
const NewCard = document.getElementById("newCard")
let Subtitle = document.getElementById("subtitle");
let Cards_el = document.getElementById("cards_el");
let Sum_el = document.getElementById("sum_el");
let message = "";
let first_card = randomCard();
let second_card = randomCard();
let cards = [first_card, second_card];
let sum = cards[0] + cards[1];
let isAlive = true;
let blackJack = false;
let Player = document.getElementById("player-el")
let Per={
    name: "per",
    pago: 145 + "$"
}


function randomCard() {
    let CardRandom = Math.floor(Math.random() * 13) + 1;
    if (CardRandom == 1)
        return 11
    else if (CardRandom >= 10)
        return 10
    else
        return CardRandom;
}
Boton.addEventListener("click", BotonFunction = () => {
    Cards_el.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        Cards_el.textContent += cards[i] + " "
    }
    if (sum < 21) {
        message = "Do you want a new card?"
    }
    else if (sum == 21) {
        message = "Woooow! you out a blackJack"
        blackJack = true;
    }
    else {
        message = "You got out of the game"
        isAlive = false
    }
    Subtitle.textContent = message;
    Sum_el.textContent = "Sum " + sum
  
    
    
})
NewCard.addEventListener("click", () => {
    if (isAlive == true && blackJack == false) {
        let thirdCard = randomCard();
        cards.push(thirdCard);
        sum += cards[2];
        BotonFunction();
          Player.textContent = Per.name + " "+ Per.pago

    }

})

