
/* Definición de las variables que funcionará como cartas. */
let firsCard = randomCards();
let secondCard = randomCards();
/* Este array se encarga de agrupar las variables de las cartas */
let cards = [firsCard, secondCard];
/* Sum es la suma de las dos primeras cartas */
let sum = cards[0] + cards[1];
/* Aquí se pone el mensaje según el resultado de la suma de las cartas */
let Subtitle = document.getElementById("subtitle");
/* Esta variable será utilizada en los condicionales */
let message = "";
/* Esto me mostrará los numeros de las cartas */
let Cards_el = document.getElementById("cards_el");
/* Esta variable me mostrará la suma de las cartas */
let Sum_el = document.getElementById("sum_el");
/* Estos booleanos servirán para confirmarme el estado del juego */
let Alive = true;
let blackjack = false;
/* Función para cartas con números aleatorios */
function randomCards() {
    let cardrandom = Math.floor(Math.random() * 13) + 1;
    if (cardrandom === 1)
        return 11
    else if (cardrandom >= 10)
        return 10
    else
        return cardrandom;
}
/* Función que reacciona al botón que da inicio al juego */
function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wooow! You're got out blackjack"
                blackjack = true;
    } else {
        message = "You're out of the game"
        Alive = false;
    }
    Subtitle.textContent = message;
    Sum_el.textContent = "Sum: " + sum;
    Cards_el.textContent = "Cards: "
    /* Este ciclo sirve para mostrar el valor de las cartas que van saliendo */
    for (let i = 0; i < cards.length; i++) {
        Cards_el.textContent += cards[i] + " "
    }
}
/* Función que reacciona al segundo botón para sacar una nueva carta */
function newCard() {
/* Si Alive sigue siendo true y blackjack es false, realice la función, sino, no. */
    if (Alive === true && blackjack === false) {
        let thirdCard = randomCards();
        cards.push(thirdCard);
        sum += cards[2];
        startGame()
    }

}