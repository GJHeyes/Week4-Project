

assignCardsButton.addEventListener('click', (event)=>{
    event.preventDefault()
    assignCardsButton.disable = true;
    if(assignCardsButton.innerText !== "Loading..."){
        assignCardsButton.disable = false;
        playChartHolder.classList.remove("hidden")
        compChartHolder.classList.remove("hidden")    
        if(!startClicked){
            startClicked = true
            computerCards.classList.remove('hidden')
            playerCards.classList.remove('hidden')
            result.classList.remove('hidden')
            assignCardsButton.classList.add('hidden')
            assignCardsButton.innerText = "Reset?"
            
            computerDeck = selectCards()
            playerDeck = selectCards()
        }else{
            assignCardsButton.innerText = "Start!"
            reset()
        }
    }
})