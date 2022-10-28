const assignCardsButton = document.querySelector("#cardButton")
assignCardsButton.addEventListener('click', (event)=>{
    event.preventDefault()
    if(assignCardsButton.innerText !== "Loading..."){
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