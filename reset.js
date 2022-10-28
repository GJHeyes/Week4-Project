function reset(){
    playerDeck = {}
    computerDeck = {}
    modifiedDeck = JSON.parse(JSON.stringify(fullDeck))
    notClicked = true
    stackingComputerDeck = true
    computerCards.classList = ""
    playerCards.classList = ""
    playerScore = 0
    computerScore = 0
    chart.classList.add("hidden")
    while (computerCards.hasChildNodes() && playerCards.hasChildNodes()) {
        computerCards.removeChild(computerCards.firstChild)
        playerCards.removeChild(playerCards.firstChild)
    }
}