const chart = document.getElementById("Bar")
const assignCardsButton = document.querySelector("#cardButton")
assignCardsButton.addEventListener('click', (event)=>{
    event.preventDefault()
    assignCardsButton.disable = true;
    if(assignCardsButton.innerText !== "Loading..."){
        assignCardsButton.disable = false;
        chart.classList.remove("hidden")
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