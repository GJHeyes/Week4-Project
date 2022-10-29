cardLoad()
async function cardLoad(){
    const response = await fetch(`https://api.pokemontcg.io/v2/cards`)
    const _data = await response.json()
    fullDeck = _data.data
    modifiedDeck = _data.data
    assignCardsButton.innerText = "Start!"
    assignCardsButton.classList.remove("loading")
}

