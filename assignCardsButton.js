const assignCardsButton = document.querySelector("#cardButton")
assignCardsButton.addEventListener('click', (event)=>{
    event.preventDefault()
    assignCardsButton.disable = true;
    if(assignCardsButton.innerText !== "Loading..."){
        assignCardsButton.disable = false;
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