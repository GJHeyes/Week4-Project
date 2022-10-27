function createcard(card){
    const div = document.createElement("div")
    const top = document.createElement("img")
    const bottom = document.createElement("img")
    //let type = card.types[0] type of pokemon
    top.setAttribute("id", card.id)
    //nametag.innerText = card.name
    if(switchedToPlayer){
        top.src = "../src/pokemonCard.png"
        top.classList.add("top")
        bottom.src = card.images.small
        bottom.classList.add("bottom")
        div.append(bottom)
        div.classList.add(`card`, 'computer'/*`${type.toLowerCase()}`*/)
    }else{
        top.src = card.images.small
        div.classList.add(`card`, 'human')
    }
    div.append(top)
    return div
}