//const searchButton = document.querySelector("#searchButton")
//const searchForm = document.querySelector("#search-bar")

const computerCards = document.querySelector("#computerCards")
const playerCards = document.querySelector("#playerCards")

let playerDeck
let computerDeck 
let fullDeck 
let modifiedDeck;
let notClicked = true
let stackingComputerDeck = true
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

//on flip change colour of opponents background colour based on type













