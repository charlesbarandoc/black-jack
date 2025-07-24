let player = {
    name: "Per",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageel = document.getElementById("message-el")
let sumeel = document.getElementById("sum-el")
let cardsel = document.getElementById("cards-el")
let playerel = document.getElementById("player-el")


playerel.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

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
    
    

    if ( hasBlackJack === false && isAlive === true) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    } 
}

