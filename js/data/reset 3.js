function reset(){
    playerScore = 0
    computerScore = 0
    startClicked = false
    stackingComputerDeck = true
    playerDeck = {}
    computerDeck = {}
    modifiedDeck = JSON.parse(JSON.stringify(fullDeck)).filter((i) => i.hasOwnProperty("attacks") === true && (i.attacks[0].damage !== "" && i.attacks[1] !== undefined && i.attacks[1].damage !== ""))

    playScore.innerText= playerScore
    compScore.innerText= computerScore
    playChartHolder.classList.add("hidden")
    compChartHolder.classList.add("hidden")
    updateScore()
    while (computerCards.hasChildNodes()) {
        computerCards.removeChild(computerCards.firstChild)
        playerCards.removeChild(playerCards.firstChild)
    }
}