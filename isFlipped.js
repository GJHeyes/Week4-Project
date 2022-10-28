document.addEventListener('click', (e) =>{ //e for event
    let cardClassList = e.target.parentNode.classList
    if(cardClassList.length > 0 && cardClassList[1].includes('computer')) {
        cardClassList.toggle('is-not-flipped')
        cardClassList.toggle('is-flipped')
    }
})