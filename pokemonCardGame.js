//const searchButton = document.querySelector("#searchButton")
//const searchForm = document.querySelector("#search-bar")
const assignCardsButton = document.querySelector("#cardButton")
const computerCards = document.querySelector("#computerCards")
const playerCards = document.querySelector("#playerCards")
const main = document.querySelector('#main')

let playerDeck
let computerDeck 
let fullDeck 
let modifiedDeck;
let notClicked = true
let switchedToPlayer = true
let numberOfCards = 6

cardLoad()

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
    fullDeck = _data.data
    modifiedDeck = _data.data
    assignCardsButton.innerText = "Start!"
}

assignCardsButton.addEventListener('click', (event)=>{
    event.preventDefault()
    if(assignCardsButton.innerText !== "Loading..."){
        if(notClicked){
            assignCardsButton.innerText = "Reset?"
            notClicked = false
            cardPull()
        }else{
            assignCardsButton.innerText = "Start!"
            reset()
        }
    }
    cards = document.querySelectorAll('.card')
})

function cardPull(){
    computerDeck = selectCards()
    playerDeck = selectCards()
}

function selectCards(){
    let deck = []
    for(let i = 0; i < numberOfCards; i++){
        const cardNumber = Math.floor(Math.random()*modifiedDeck.length)
        const card = modifiedDeck[cardNumber]
        deck.push(card)
        if(switchedToPlayer){
            computerCards.appendChild(createcard(card))
            computerCards.classList.add('cards','pc')
        }else{
            playerCards.appendChild(createcard(card))
            playerCards.classList.add('cards','user')
        }
        modifiedDeck = modifiedDeck.filter((i) => i.id !== card.id)
        console.log(modifiedDeck.length)
    }
    switchedToPlayer = false
    return deck
}

function createcard(card){
    const div = document.createElement("div")
    const top = document.createElement("img")
    const bottom = document.createElement("img")
    //let type = card.types[0] type of pokemon
    let id = card.id

    div.classList.add(`card`, /*`${type.toLowerCase()}`*/)
    top.setAttribute("id", id)
    //nametag.innerText = card.name
    if(switchedToPlayer){
        top.src = "../src/pokemonCard.png"
        top.classList.add("top")
        bottom.src = card.images.small
        bottom.classList.add("bottom")
        div.append(bottom)
    }else{
        top.src = card.images.small
    }
    div.append(top)
    return div
}

document.addEventListener('click', (e) =>{ //e for event
    if(e.path[0].classList[0].includes('top') || e.path[0].classList[0].includes('bottom')){
        let cards = e.path[1]
        cards.classList.toggle('is-flipped')
    }
})

function reset(){
    playerDeck = {}
    computerDeck = {}
    modifiedDeck = JSON.parse(JSON.stringify(fullDeck))
    notClicked = true
    switchedToPlayer = true
    computerCards.classList = ""
    playerCards.classList = ""
    while (computerCards.hasChildNodes() && playerCards.hasChildNodes()) {
        computerCards.removeChild(computerCards.firstChild)
        playerCards.removeChild(playerCards.firstChild)
    }
}
