document.addEventListener('click', (e) =>{ //e for event
    let cardId = e.target.parentNode.id
    let cardClass = e.target.parentNode.classList
    if(cardClass[1] === "human" && computerSelect.length === 0) {
        for(let i = 0; i < playerDeck.length; i++){
            if(playerDeck[i].id === cardId){
                playerSelect[0] = playerDeck[i]
                playerDamage = findHighestAttack(playerSelect[0])
                playerPower.innerText = `${playerDamage} Max Damage`
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
    if(computerSelect.length === 1 && playerSelect.length ===1 && resultOutcome === false){
        computerDamage = findHighestAttack(computerSelect[0])
        
    
        if(computerDamage > playerDamage){
            computerScore++
            result.innerText = `Lost by ${computerDamage-playerDamage} Damage!`
        }else if(computerDamage === playerDamage){
            computerScore++
            playerScore++
            result.innerText = "Stalemate!"
        }else{
            playerScore++//h2 inner text
            result.innerText = `Won by ${playerDamage-computerDamage} Damage!`
        }  
        trick.forEach(tri => {
            tri.classList = "power visuallyHidden"
        });
        result.classList = "enlarge"

        computerPower.innerText = `${computerDamage} Max Damage`

        playerDeck = playerDeck.filter((i) => i.id !== playerSelect[0].id)
        computerDeck = computerDeck.filter((i) => i.id !== computerSelect[0].id)
          
        
        resultOutcome = true
        playScore.innerText= playerScore
        compScore.innerText= computerScore
       
        updateScore()
        removeCard()

        if(playerDeck.length === 0){
            if(computerScore > playerScore){
                result.innerText = "You Lost!"
            }
            else if(computerScore === playerScore){
                result.innerText = "Draw!"
            }else{
                result.innerText = "You Won!"
            } 
        }    
    }
})



