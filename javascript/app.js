let firstCard = Math.floor(Math.random() * 11 ) + 2;
let secondCard = Math.floor(Math.random() * 11 ) + 2;
let cards = [firstCard,secondCard];
let sum = firstCard + secondCard;
console.log(sum);

let hasBlackjack = false;
let isAlive = true;
let message = "";

let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let messageEL = document.getElementById("message-el");
function startGame(){
    renderGame();
}
function renderGame(){
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
    sumEl.textContent = "Sum is: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    }else if(sum === 21){
        message = "You've got Blackjack!"
        hasBlackjack = true;
    }else {
        message = "You are out of the game! :( ";
        isAlive = false;
    };
    messageEL.textContent = message;
}
function newCard(){
    let card = Math.floor(Math.random() * 11 ) + 2;
    sum += card;
    cards.push(newCard);
    renderGame();
}



