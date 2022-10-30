function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
  
async function removeCard() {
    await delay(2000);
    document.getElementById(computerSelect[0].id).remove()
    document.getElementById(playerSelect[0].id).remove()
    result.classList="small"
    if(playerDeck.length === 0 && computerDeck.length === 0){
        playChartHolder.classList.add('hidden')
        compChartHolder.classList.add('hidden')
        computerCards.classList.add('hidden')
        playerCards.classList.add('hidden')
        result.classList.add('hidden')
        assignCardsButton.classList.remove('hidden')
    }
    trick.forEach(tri => {
        tri.classList = "power visuallyShow"
    });
    result.innerText=""
    playerPower.innerText=""
    computerPower.innerText= ""
    computerSelect = []
    playerSelect  = []
    flip= false
    resultOutcome= false
}
