const computerCards = document.querySelector("#computerCards")
const playerCards = document.querySelector("#playerCards")
const compScore = document.getElementById('computerScore')
const playScore = document.getElementById('humanScore')
const result = document.getElementById('result')

let playerDeck
let computerDeck 
let fullDeck 
let modifiedDeck;
let notClicked = true
let stackingComputerDeck = true
let numberOfCards = 6
let playerSelect = []
let computerSelect = []
let playerScore = 0
let computerScore = 0
let flip = false

playScore.innerText= playerScore
compScore.innerText= computerScore






