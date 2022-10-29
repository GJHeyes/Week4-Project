function findHighestAttack(card){
    let cardAttacks = 
    {
        data: [{
            error: "",
            attack: 0,
        },{
            error:"",
            attack:0
        },{
            error:"",
            attack:0,
        }]
    }
    if(card.hasOwnProperty("attacks")){
        for(let i = 0; i<3;i++){
            if(card.attacks.length >i){
                if(typeof card.attacks[i] !== undefined){
                    cardAttacks.data[i].error = card.attacks[i].damage
                    cardAttacks.data[i].error = cardAttacks.data[i].error.replace("×", "").replace("+", "").replace("-", "")
                    cardAttacks.data[i].attack = Number(cardAttacks.data[i].error)
                }
            }
        }
    }

    if(cardAttacks.data[0].attack >= cardAttacks.data[1].attack && cardAttacks.data[0].attack >= cardAttacks.data[2].attack){ //1 strong
        return cardAttacks.data[0].attack   
    }
    else if(cardAttacks.data[1].attack >= cardAttacks.data[2].attack){// 2 strong
        return cardAttacks.data[1].attack
    }
    else{
        return cardAttacks.data[2].attack
    }
}