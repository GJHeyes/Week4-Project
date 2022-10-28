let scored = false

document.addEventListener('click', (e) =>{ //e for event
    let cardId = e.target.parentNode.id
    let cardClass = e.target.parentNode.classList
    if(cardClass[1] === "human" && playerSelect.length === 0) {
        for(let i = 0; i < playerDeck.length; i++){
            if(playerDeck[i].id === cardId){
                playerSelect[0] = playerDeck[i]
            }
        }
    }
    if(cardClass[1] === "cpu" && computerSelect.length === 0 && playerSelect.length !=0) {
        for(let i = 0; i < computerDeck.length; i++){
            if(computerDeck[i].id === cardId){
                computerSelect[0] = computerDeck[i]
            }
        }
    }
    if(computerSelect.length === 1 && playerSelect.length ===1 && scored === false){
        let computerHealth = Number(computerSelect[0].hp)
        let playerHealth = Number(playerSelect[0].hp)
        if(computerHealth > playerHealth){
            computerScore++
            result.innerText = "Computer Wins!"

        }else if(computerHealth === playerHealth){
            computerScore++
            playerScore++
            result.innerText = "Draw!"
        }else{
            playerScore++//h2 inner text
            result.innerText = "You Win!"
        }  
        scored = true
        playerDeck = playerDeck.filter((i) => i.id !== playerSelect[0].id)
        computerDeck = computerDeck.filter((i) => i.id !== computerSelect[0].id)
        assignCardsButton.classList.add('hidden')
        playScore.innerText= playerScore
        compScore.innerText= computerScore
        updateScore()
        removeCard()
    }
    if(playerDeck.length === 0 && computerDeck.length === 0){
        computerCards.classList.add('hidden')
        playerCards.classList.add('hidden')
    }
})

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  
async function removeCard() {
    await delay(1500);
    document.getElementById(computerSelect[0].id).remove()
    document.getElementById(playerSelect[0].id).remove()
    result.innerText = ""
    assignCardsButton.classList.remove('hidden')
    computerSelect = []
    playerSelect = []
    flip = false
    scored = false
    //h2 innertext  = ""
}



