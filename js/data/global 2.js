const computerCards = document.querySelector("#computerCards")
const playerCards = document.querySelector("#playerCards")
const compScore = document.getElementById('computerScore')
const playScore = document.getElementById('playerScore')
const result = document.getElementById('result')
const computerPower = document.getElementById('computerPower')
const playerPower = document.getElementById('playerPower')
const trick = document.querySelectorAll(".visuallyShow")
const compChart = document.getElementById('computerChart').getContext('2d');
const playChart = document.getElementById('playerChart').getContext('2d');
const compChartHolder = document.getElementById('computer-container')
const playChartHolder = document.getElementById('player-container')
let numberOfCards
if(window.matchMedia("(max-width: 480px)").matches){
    numberOfCards = 4
}
else{
    numberOfCards = 6
}

let resultOutcome = false
let playerDeck
let computerDeck 
let fullDeck 
let modifiedDeck;
let playerDamage;
let computerDamage;
let startClicked = false
let stackingComputerDeck = true

let playerSelect = []
let computerSelect = []
let playerScore = 0
let computerScore = 0
let flip = false

playScore.innerText= playerScore
compScore.innerText= computerScore






