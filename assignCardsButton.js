const playChart = document.getElementById("playerChartHolder")
const compChart = document.getElementById("computerChartHolder")
const assignCardsButton = document.querySelector("#cardButton")
assignCardsButton.addEventListener('click', (event)=>{
    event.preventDefault()
    assignCardsButton.disable = true;
    if(assignCardsButton.innerText !== "Loading..."){
        assignCardsButton.disable = false;
        playChart.classList.remove("hidden")
        compChart.classList.remove("hidden")
        if(notClicked){
            assignCardsButton.innerText = "Reset?"
            notClicked = false
            deskAssign()
        }else{
            assignCardsButton.innerText = "Start!"
            reset()
        }
    }
})