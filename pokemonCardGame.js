//const searchButton = document.querySelector("#searchButton")

//const GameStats = require("./GameStats")

//const searchForm = document.querySelector("#search-bar")
const assignCardsButton = document.querySelector("#cardButton")
const computerCards = document.querySelector("#computerCards")
const playerCards = document.querySelector("#playerCards")
const body = document.querySelector("body")
const maindiv = document.querySelector("#main")
const pointsSection1 = document.querySelector("#pointsSection1")
const pointsSection2 = document.querySelector("#pointsSection2")

const playerCollection = []
const computerCollection = []


let playerDeck
let computerDeck 
let fullDeckOfCards;
let notClicked
let switchedToPlayer
let numberOfCards = 6
let modifiedDeck = []

let gmResult //outcome each time two cards are matched
let resultMsg //html element that holds gmResult

    //containers to hold elements that display card properties that were matched
let playerPointsContainer = document.createElement('div') 
let computerPointsContainer = document.createElement('div')

playerPointsContainer.setAttribute('id', 'crdPrpContainer1') 
computerPointsContainer.setAttribute('id', 'crdPrpContainer2')

playerPointsContainer.classList.add('crdPrpContainer')
computerPointsContainer.classList.add('crdPrpContainer')

//elements to display card properties that were matched
let playerPoints = document.createElement('p')  //html element that holds card properties used when matching cards
let computerPoints = document.createElement('p')

 //set class to target the above properties
playerPoints.classList.add('match-card-properties')
computerPoints.classList.add('match-card-properties')

playerPointsContainer.append(playerPoints)
computerPointsContainer.append(computerPoints)



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
//cardLoad()

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
    pointsSection1.innerText =""
    pointsSection2.innerText =""
}
//reset()


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
    computerDeck = selectCards()
    playerDeck = selectCards()

    pointsSection1.innerText =""
    pointsSection2.innerText =""
    
    console.log(playerDeck[0])        
    console.log(computerDeck[0])

}




//pop deck by card id
function popDeck(xID, xDeck, xCollection){
    let xIndex
    switch (xDeck.toLowerCase()){
        case('full deck'):        
        for(const item of fullDeckOfCards){
            if(item.id === xID){
                    //push card to target collection
                    xCollection.toLowerCase() === 'player collection' ? playerCollection.push(item) : computerCollection.push(item)
                    xIndex = fullDeckOfCards.indexOf(item)                
                    fullDeckOfCards.splice(xIndex,1) //remove card from full deck
                    break;
                }
            };
        break;
        case('computer deck'):
        for(const item of computerDeck){
            if(item.id === xID){
                xCollection.toLowerCase() === 'player collection' ? playerCollection.push(item) : computerCollection.push(item)
                xIndex = computerDeck.indexOf(item)                
                computerDeck.splice(xIndex,1) //remove card from computer deck
                break;
            }
        };
        break;
        case('player deck'):
        for(const item of playerDeck){
            if(item.id === xID){
                xCollection.toLowerCase() === 'player collection' ? playerCollection.push(item) : computerCollection.push(item)
                xIndex = playerDeck.indexOf(item)                
                playerDeck.splice(xIndex,1) //remove card from player deck
                break;
            }
        }
        break;         
    }      

}


function gameOutcome(){
 

    if(Number(playerDeck[0].hp) > Number(modifiedDeck[0].hp)){        
        console.log('player wins!')

        gmResult = 'player wins!' 
        playerPoints.innerText = `(P) Img ID : ${playerDeck[0].id}, HP: ${playerDeck[0].hp}`
        computerPoints.innerText = `(C) Img ID : ${modifiedDeck[0].id}, HP: ${modifiedDeck[0].hp}`        
        
       popDeck(modifiedDeck[0].id, 'computer deck', 'player collection') //remove card from computer deck, move to player collection
       popDeck(playerDeck[0].id, 'player deck', 'player collection') //remove card from computer deck, move to player collection
       //popDeck(modifiedDeck[0].id, 'full deck', 'player collection') //remove card from full deck and move to player collection
        
    } else if(Number(playerDeck[0].hp) === Number(modifiedDeck[0].hp)){
        console.log('draw!')
        
        gmResult = 'draw!'
        playerPoints.innerText = `(P) Img ID : ${playerDeck[0].id}, HP: ${playerDeck[0].hp}`
        computerPoints.innerText = `(C) Img ID : ${modifiedDeck[0].id}, HP: ${modifiedDeck[0].hp}`

        popDeck(modifiedDeck[0].id, 'computer deck', 'computer collection') //remove card from computer deck, move to computer collection
        popDeck(playerDeck[0].id, 'player deck', 'player collection') //remove card from player deck, move to player collection

        }else {        
        console.log('computer wins!')

        gmResult = 'computer wins!',
        computerPoints.innerText = `(C) Img ID : ${modifiedDeck[0].id}, HP: ${modifiedDeck[0].hp}`
        playerPoints.innerText = `(P) Img ID : ${playerDeck[0].id}, HP: ${playerDeck[0].hp}`        
        
        popDeck(playerDeck[0].id, 'player deck', 'computer collection') //remove card from player deck, move to computer collection        
        popDeck(modifiedDeck[0].id, 'computer deck', 'computer collection') //remove card from computer deck, move to computer collection

         
    }

    //display
    pointsSection1.innerText = 'Player'
    pointsSection2.innerText = 'Computer'
    pointsSection1.append(playerPointsContainer)
    pointsSection2.append(computerPointsContainer)

    assignCardsButton.innerText = gmResult
}


//card event listener
document.addEventListener('click', (e) =>{ //e for event
    reset
    modifiedDeck = []           

    if(e.target.matches('.card-img')){
        
        // identify the computer card which the user clicked
        const card = e.target.closest('img') 
        //const img = e.target        
            
        
        //push the card to a filtered deck - 'modifiedDeck[]'
        for(const item of computerDeck){
            if(item.id === card.id){
                //console.log('item')
                //console.log(item.id)
                modifiedDeck.push(item)
            }
        }
          
        // * debug compare user and computer deck
        console.log('player img id '+ playerDeck[0].id)
        console.log('player hp '+ playerDeck[0].hp)        
        console.log('computer hp '+ modifiedDeck[0].hp)
        console.log('computer img id '+ modifiedDeck[0].id)     
        console.log(modifiedDeck)

        //determine game outcome
        gameOutcome()

        console.log('player deck')
        console.log(playerDeck)
        console.log('computer deck')
        console.log(computerDeck)

        console.log('player collection')
        console.log(playerCollection)
        console.log('computer collection')
        console.log(computerCollection)

        console.log('..................')
        console.log('..................')
    }
})



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
    img.classList.add('card-img') //target card images
    img.setAttribute("id", card.id)
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


function main(){
    cardLoad()
    reset()
    //event listeners
    console.log(fullDeckOfCards)
    console.log(playerDeck)
    console.log(computerDeck)  
}

main()
