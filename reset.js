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
    playerChartHolder.classList.add("hidden")
    computerChartHolder.classList.add("hidden")
    playScore.innerText= playerScore
    compScore.innerText= computerScore
    computerCards.classList.remove('hidden')
    playerCards.classList.remove('hidden')
    updateScore()
    while (computerCards.hasChildNodes() && computerCards.hasChildNodes()) {
        computerCards.removeChild(computerCards.firstChild)
        playerCards.removeChild(playerCards.firstChild)
    }
}