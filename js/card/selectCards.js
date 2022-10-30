function selectCards(){
    let deck = []
    let num = 0;
    let row = "row1"
    for(let i = 0; i < numberOfCards; i++){
        const cardNumber = Math.floor(Math.random()*modifiedDeck.length)
        const card = modifiedDeck[cardNumber]
        deck.push(card)
        if(num>2) row = "row2"
        if(stackingComputerDeck){
            computerCards.appendChild(createcard(card, row))
            computerCards.classList.add('cards','pc',row)
            num++
        }else{
            playerCards.appendChild(createcard(card, row))
            playerCards.classList.add('cards','user',row)
            num++
        }
        modifiedDeck = modifiedDeck.filter((i) => i.id !== card.id)
    }
    stackingComputerDeck = false
    return deck
}