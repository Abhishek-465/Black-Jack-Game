let hasBlackjack=false
let isAlive=false
let message=""
let cards=[]
let sum=0
let messageEl=document.getElementById("message-el")
function startgame(){
    sum=0
    isAlive=true
    hasBlackjack=false
    document.getElementById("bet").innerHTML="$ 125"
    let firstcard=getrandom()
    let secondcard=getrandom()
    cards=[firstcard,secondcard]
    rendergame()
}
function getrandom(){
    let n= Math.floor(Math.random()*13 +1)
    if(n===1){
        n=11
    }
    else if(n>=11 && n<=13){
        n=10
    }
    return n
}
function rendergame(){

    document.querySelector("#cards-el").textContent="Cards: ";
    for(let i=0;i<cards.length;i++){
        document.getElementById("cards-el").textContent+=cards[i]+" "
        sum+=cards[i]

    }
    document.getElementById("sum-el").textContent="Sum: "+sum;
    
    if(sum <=20){
        message="Do you want to draw a new card?"
        
    }
    else if(sum===21){
        message="wohoo!! You have the Blackjack!"
        hasBlackjack=true
        document.getElementById("bet").innerHTML="Victory!!"
    }
    else{
        message="You are out of the game!"
        isAlive=false
    
    }
    messageEl.textContent=message
}
function newcard(){
    if(isAlive===true || hasBlackjack===true){
    let card=getrandom()
    cards.push(card)
    rendergame()
}
}