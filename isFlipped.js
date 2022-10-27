document.addEventListener('click', (e) =>{ //e for event
    if(e.path[0].classList.length > 0 && (e.path[0].classList[0].includes('top') || e.path[0].classList[0].includes('bottom'))){
        let cards = e.path[1]
        cards.classList.toggle('is-flipped')
    }
})