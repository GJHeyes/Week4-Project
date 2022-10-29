function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
  
async function removeCard() {
    await delay(1500);
    document.getElementById(computerSelect[0].id).remove()
    document.getElementById(playerSelect[0].id).remove()
    if(playerDeck.length === 0 && computerDeck.length === 0){
        computerCards.classList.add('hidden')
        playerCards.classList.add('hidden')
        assignCardsButton.classList.remove('hidden')
    }
    result.innerText = ""
    computerSelect = []
    playerSelect = []
    flip = false
    resultOutcome = false
}