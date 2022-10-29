const playChart = document.getElementById("playerChartHolder")
const compChart = document.getElementById("computerChartHolder")
const assignCardsButton = document.querySelector("#cardButton")

assignCardsButton.addEventListener('click', (event)=>{
    event.preventDefault()
    assignCardsButton.disable = true;
    if(assignCardsButton.innerText !== "Loading..."){
        assignCardsButton.disable = false;
        playChart.classList = ""
        compChart.classList = ""
        
        if(!startClicked){
            startClicked = true
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