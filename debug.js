
const fetch = require('isomorphic-fetch')

async function cardLoad(){
    const response = await fetch(`https://api.pokemontcg.io/v2/cards`)
    const _data = await response.json()
    fullDeckOfCards = _data.data
    //assignCardsButton.innerText = "Start!"
}
cardLoad()

console.log(typeof(fullDeckOfCards))


console.log(typeof(fullDeckOfCards))



//