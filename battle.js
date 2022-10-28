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
        if(computerSelect[0].hp > playerSelect[0].hp){
            computerScore++

        }else if(computerSelect[0].hp === playerSelect[0].hp){
            computerScore++
            playerScore++
        }else{
            playerScore++
        }  
        console.log("player Score" + playerScore + "  " + "computer Score" + computerScore)
        scored = true
        playerDeck = playerDeck.filter((i) => i.id !== playerSelect[0].id)
        computerDeck = computerDeck.filter((i) => i.id !== computerSelect[0].id)
        test()
    }
})

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  
async function test() {
    await delay(1500);
    document.getElementById(computerSelect[0].id).remove()
    document.getElementById(playerSelect[0].id).remove()
    computerSelect = []
    playerSelect = []
    flip = false
    scored = false
}