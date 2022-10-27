//const searchButton = document.querySelector("#searchButton")
//const searchForm = document.querySelector("#search-bar")
const assignCardsButton = document.querySelector("#cardButton")
const computerCards = document.querySelector("#computerCards")
const playerCards = document.querySelector("#playerCards")
const body = document.querySelector("body")
const maindiv = document.querySelector("#main")
const pointsSection = document.querySelector("#pointsSection")

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
    
    console.log(playerDeck[0])        
    console.log(computerDeck[0])



}


function gameOutcome(){
    //resultMsg = document.createElement('p')
    //resultMsg.innerText(gmResult)
    assignCardsButton.innerText = gmResult
}


//card event listener
document.addEventListener('click', (e) =>{ //e for event
    reset//
    modifiedDeck = []  
  
  
    //body.removeChild(computerCardPropertiesContainer)

    if(e.target.matches('.card-img')){
        console.log('target')
        console.log(e.target)
        const card = e.target.closest('img') 
        //const img = e.target
        
    
        //modifiedDeck = fullDeckOfCards.filter(i => i.id === card.id)// ???? Why don't you work - what's your ask ???
        
        // centuries later...the for loop enters the stage
        for(const item of computerDeck){
            if(item.id === card.id){
                console.log('item')
                console.log(item.id)
                modifiedDeck.push(item)
            }
        }
        
        console.log('computer card id')
        console.log(card.id)            
        
        console.log('modified deck')
        console.log(modifiedDeck)
         

        let test = playerPointsContainer
        if(test === document.querySelector("#crdPrpContainer1")){
            console.log('query worked')
        } else {
            console.log('query did not work')
            console.log('')
        }

        // compare user and computer deck
        console.log('player img id '+ playerDeck[0].id)
        console.log('player hp '+ playerDeck[0].hp)        
        console.log('computer hp '+ modifiedDeck[0].hp)
        console.log('computer img id '+ modifiedDeck[0].id)
        //console.log(img)
        
        
        
        if(Number(playerDeck[0].hp) > Number(modifiedDeck[0].hp)){        
            console.log('player wins!')

            gmResult = 'player wins!' 
            playerPoints.innerText = `Player Img ID : ${playerDeck[0].id}, HP: ${playerDeck[0].hp}`
            computerPoints.innerText = `Computer Img ID : ${modifiedDeck[0].id}, HP: ${modifiedDeck[0].hp}`
            
        } else if(Number(playerDeck[0].hp) === Number(modifiedDeck[0].hp)){
            console.log('draw!')
            
            gmResult = 'draw!'
            playerPoints.innerText = `Player Img ID : ${playerDeck[0].id}, HP: ${playerDeck[0].hp}`
            computerPoints.innerText = `Computer Img ID : ${modifiedDeck[0].id}, HP: ${modifiedDeck[0].hp}`

            }else {        
            console.log('computer wins!')

            gmResult = 'computer wins!',
            computerPoints.innerText = `Computer Img ID : ${modifiedDeck[0].id}, HP: ${modifiedDeck[0].hp}`
            playerPoints.innerText = `Player Img ID : ${playerDeck[0].id}, HP: ${playerDeck[0].hp}`
             
        }
        pointsSection.append(playerPointsContainer)
        pointsSection.append(computerPointsContainer)

        gameOutcome()

        //let testcard = (fullDeckOfCards.filter((i) => i.id === card.id))
        //card.src = testcard[0].images.small
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
