let listWords = ["parent" ,  "ananas" , "talk" , "elephant" , "computer"] 
let wordToFind = listWords[Math.floor(Math.random() * listWords.length)]
console.log(wordToFind);
let sizeOfTheWord = wordToFind.length;
let containerWord = document.querySelector("#flex-container") ;
let containerCardsToMove = document.querySelector("#flex-container2") ;
let RandomLetters = new Array()
let wordTemp = wordToFind;
let rand

let arrangeTheCards = ()=>{
    for(index in wordToFind) {
        console.log(wordToFind[index]);
    
        let myDiv = document.createElement("div");
        let myP = document.createElement("p");
        myP.innerHTML = wordToFind[index]
        myDiv.appendChild(myP);
    
        let myDiv2 = document.createElement("div");
        let myP2 = document.createElement("p");
        myP2.innerHTML = shuffled[index]
        myDiv2.appendChild(myP2);
     
    
        containerWord.appendChild(myDiv)
        containerCardsToMove.appendChild(myDiv2)
        
    };}

let shuffled = wordTemp.split('').sort(function(){return 0.5-Math.random()}).join('');

arrangeTheCards();




