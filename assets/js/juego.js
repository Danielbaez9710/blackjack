let deck=[];
const tipos= ['C','D','H','S'];
const especiales=['J','K','Q','A'];

for(i=2;i<=10;i++){
    
    for (tipo of tipos){
        deck.push(i+tipo);
    }
}

for(especial of especiales){
    for(tipo of tipos){
        deck.push(especial+tipo)
    }
}
console.log(deck);