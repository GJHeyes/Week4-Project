//const searchButton = document.querySelector("#searchButton")
//const searchForm = document.querySelector("#search-bar")
const assignCardsButton = document.querySelector("#cardButton")
const computerCards = document.querySelector("#computerCards")
const playerCards = document.querySelector("#playerCards")

let playerDeck
let computerDeck 
let fullDeckOfCards;
let notClicked 
let switchedToPlayer
let numberOfCards = 6

//^^possible user defined between 2-10^^

//could have a win loss put into a bar chart
//have a match 2 cards game

//searchbar(command line to say what to do) -- attack
//swap card search function
//reshuffle function
//hide computers stats behind a shield
//click your card, click their card, which ever has the most attack power wins
//would have to flip their card - both cards burn.  chart keeps track of score

/*searchForm.addEventListener('submit', (event)=>{
    event.preventDefault()
    const data = new FormData(searchForm).get("info").toLowerCase().replace(" ", "%20")
    
    //data
})*/

async function cardLoad(){
    const response = await fetch(`https://api.pokemontcg.io/v2/cards`)
    const _data = await response.json()
    fullDeckOfCards = _data.data
    assignCardsButton.innerText = "Start!"
}
cardLoad()

function reset(){
    playerDeck = {}
    computerDeck = {}
    fullDeckOfCards;
    notClicked = true
    switchedToPlayer = true
    computerCards.classList = ""
    playerCards.classList = ""
    while (computerCards.hasChildNodes() && playerCards.hasChildNodes()) {
        computerCards.removeChild(computerCards.firstChild)
        playerCards.removeChild(playerCards.firstChild)
    }
}
reset()

assignCardsButton.addEventListener('click', (event)=>{
    event.preventDefault()
    if(assignCardsButton.innerText !== "Loading..."){
        if(notClicked){
            assignCardsButton.innerText = "Reset?"
            notClicked = false
            cardPull()
        }else{
            assignCardsButton.innerText = "Start!"
            notClicked = true
            reset()
        }
    }
})

function cardPull(){
    playerDeck = selectCards()
    computerDeck = selectCards()
}

function selectCards(){
    let deck = []
    for(let i = 0; i < numberOfCards; i++){
        const cardNumber = Math.floor(Math.random()*fullDeckOfCards.length)
        const card = fullDeckOfCards[cardNumber]
        deck.push(card)
        if(switchedToPlayer){
            computerCards.appendChild(createcard(card))
            computerCards.classList.add('cards','pc')
        }else{
            playerCards.appendChild(createcard(card))
            playerCards.classList.add('cards','user')
        }
        fullDeckOfCards = fullDeckOfCards.filter((i) => i.id !== card.id)
    }
    switchedToPlayer = false
    return deck
}


function createcard(card){
    const div = document.createElement("div")
    //const nametag = document.createElement('h2')
    const img = document.createElement("img")
    let type = card.types[0]

    div.classList.add(`card`, `${type.toLowerCase()}`)
    //nametag.innerText = card.name
    if(switchedToPlayer){
        img.src = "../src/pokemonCard.png"
    }else{
        img.src = card.images.small
    }
    
    div.append(img)
    return div
}
const myChart = new Chart(
    document.getElementById('mychart'),
        lables ['winner','looser','draw'], //points?
        datasets [{
            label: 'who is the winner',
            data:[1,2,3,4,5,6             
            ],
            //backgroundColor: 'green'
            backgroundColor:[
                'red',
                'blue',
                'yellow'
            ]

        }], 
);
const lables = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];

const data = {
  labels: labels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {}
};