function selectCards(){
    let deck = []
    for(let i = 0; i < numberOfCards; i++){
        const cardNumber = Math.floor(Math.random()*modifiedDeck.length)
        const card = modifiedDeck[cardNumber]
        deck.push(card)
        if(stackingComputerDeck){
            computerCards.appendChild(createcard(card))
            computerCards.classList.add('cards','pc')
        }else{
            playerCards.appendChild(createcard(card))
            playerCards.classList.add('cards','user')
        }
        modifiedDeck = modifiedDeck.filter((i) => i.id !== card.id)
    }
    stackingComputerDeck = false
    return deck
}