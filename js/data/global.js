const computerCards = document.querySelector("#computerCards")
const playerCards = document.querySelector("#playerCards")
const compScore = document.getElementById('computerScore')
const playScore = document.getElementById('humanScore')
const result = document.getElementById('result')
const computerPower = document.getElementById('computerPower')
const playerPower = document.getElementById('playerPower')
const trick = document.querySelectorAll(".visuallyShow")

let resultOutcome = false
let playerDeck
let computerDeck 
let fullDeck 
let modifiedDeck;
let playerDamage;
let computerDamage;
let startClicked = false
let stackingComputerDeck = true
let numberOfCards = 6
let playerSelect = []
let computerSelect = []
let playerScore = 0
let computerScore = 0
let flip = false

playScore.innerText= playerScore
compScore.innerText= computerScore






