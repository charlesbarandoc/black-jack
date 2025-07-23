let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageel = document.getElementById("message-el")
let sumeel = document.getElementById("sum-el")
let cardsel = document.getElementById("cards-el")

function getRandomCard() {
    return Math.floor( Math.random()*13 ) + 1
}


function startGame() {
    renderGame()
}


function renderGame() {

    cardsel.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsel.textContent += cards[i] + " "
    }

    sumeel.textContent = "Sum: " + sum 
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }


    messageel.textContent = message
}

function newCard() {
    let card = getRandomCard()
    sum += card
    card.push(card)
    startGame()
}
