cardLoad()
async function cardLoad(){
    //const response = await fetch(`https://api.pokemontcg.io/v2/cards`)
    const response = await fetch(`../js/data/data.txt`)
    const _data = await response.json()
    fullDeck = JSON.parse(JSON.stringify(_data.data))
    modifiedDeck = JSON.parse(JSON.stringify(fullDeck)).filter((i) => i.hasOwnProperty("attacks") === true && (i.attacks[0].damage !== "" && i.attacks[1] !== undefined && i.attacks[1].damage !== ""))
    assignCardsButton.innerText = "Start!"
    assignCardsButton.classList.remove("loading")
}

