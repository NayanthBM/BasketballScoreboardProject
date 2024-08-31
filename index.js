let homeScore = document.getElementById("home_score")
let guestScore = document.getElementById("guest_score")

let homeIncrement = 0
let guestIncrement = 0

function incrementHomeOne() {
    homeIncrement += 1
    homeScore.textContent = homeIncrement
}

function incrementHomeTwo() {
    homeIncrement += 2
    homeScore.textContent = homeIncrement
}

function incrementHomeThree() {
    homeIncrement += 3
    homeScore.textContent = homeIncrement
}
function resetHomeScore() {
    homeIncrement = 0
    homeScore.textContent = homeIncrement
}



function incrementGuestOne() {
    guestIncrement += 1
    guestScore.textContent = guestIncrement
}

function incrementGuestTwo() {
    guestIncrement += 2
    guestScore.textContent = guestIncrement
}

function incrementGuestThree() {
    guestIncrement += 3
    guestScore.textContent = guestIncrement
}

function resetGuestScore() {
    guestIncrement = 0
    guestScore.textContent = guestIncrement
}
