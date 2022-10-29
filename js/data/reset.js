function reset(){
    playerScore = 0
    computerScore = 0
    startClicked = false
    stackingComputerDeck = true
    computerCards.classList = ""
    playerCards.classList = ""
    playerDeck = {}
    computerDeck = {}
    modifiedDeck = JSON.parse(JSON.stringify(fullDeck)).filter((i) => i.hasOwnProperty("attacks") === true && (i.attacks[0].damage !== "" && i.attacks[1] !== undefined && i.attacks[1].damage !== ""))

    playScore.innerText= playerScore
    compScore.innerText= computerScore
    playerChartHolder.classList.add("hidden")
    computerChartHolder.classList.add("hidden")
    computerCards.classList.remove('hidden')
    playerCards.classList.remove('hidden')
    updateScore()
    while (computerCards.hasChildNodes()) {
        computerCards.removeChild(computerCards.firstChild)
        playerCards.removeChild(playerCards.firstChild)
    }
}