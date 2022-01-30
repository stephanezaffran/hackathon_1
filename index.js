let listWords = ["parent", "ananas", "talk", "elephant", "computer"]
let wordToFind = listWords[Math.floor(Math.random() * listWords.length)]
let form = document.querySelector('form')
let sizeOfTheWord = wordToFind.length;
let containerWord = document.querySelector("#flex-container");
let containerCardsToMove = document.querySelector("#flex-container2");
let errorDiv = document.querySelector("#flex-container4");
let wordTemp = wordToFind;

let shuffled = wordTemp.split('').sort(function() { return 0.5 - Math.random() }).join('');

let handleDragStart = (e) => {
    // console.log("drag");
    e.dataTransfer.setData("text/plain", e.target.id);
}
let handleDragOver = (e) => {
    e.preventDefault();
}
let reload = () => { window.location = "./game.html" }

let handleDrop = (e) => {
    e.preventDefault();
    // Get the data, which is the id of the drop target
    let data = e.dataTransfer.getData("text");
    //move the elem on the destination 
    e.target.appendChild(document.querySelector("#" + data)).style.backgroundColor = "slateblue";
    // Clear the drag data cache (for all formats/types)
    e.dataTransfer.clearData();
}

let arrangeTheCards = () => {
    for (index in wordToFind) {
        // console.log(wordToFind[index]);

        let myDiv = document.createElement("div");
        myDiv.setAttribute("id", `destinationItem${index}`);
        let myP = document.createElement("p");
        myP.style.display = "none"
        myP.innerHTML = wordToFind[index]
        myDiv.appendChild(myP);

        let myDiv2 = document.createElement("div");
        myDiv2.draggable = true;

        myDiv2.setAttribute("id", `draggableItem${index}`);
        let myP2 = document.createElement("p");
        myP2.innerHTML = shuffled[index]
        myDiv2.appendChild(myP2);


        containerWord.appendChild(myDiv)
        containerCardsToMove.appendChild(myDiv2)

        myDiv2.addEventListener('dragstart', handleDragStart);
        myDiv.addEventListener('dragover', handleDragOver);
        myDiv.addEventListener('drop', handleDrop);

    };
}
let errorMessage = (msg) => {

    let div = document.createElement("div");
    let P = document.createElement("p");
    P.innerHTML = "error please click reload"
    div.appendChild(P);
    errorDiv.appendChild(div);
}

let subFunction = (e) => {
    e.preventDefault();
    let goodLetters = 0
    console.log(containerWord);
    let numberOfChildren = containerWord.childElementCount;
    let childrenOfContainerWord = containerWord.childNodes;
    let childrenOfChild = new Array();
    console.log(childrenOfContainerWord)
    childrenOfContainerWord
    for (i = 1; i < numberOfChildren + 1; i++) {
        console.log(childrenOfContainerWord[i]);
        if (childrenOfContainerWord[i].childElementCount != 2) {
            errorMessage("error");
            break;
        } else {
            childrenOfChild = childrenOfContainerWord[i].childNodes;
            console.log(childrenOfChild);
            if (childrenOfChild[0].textContent != childrenOfChild[1].firstChild.textContent) {
                errorMessage("badLetters");
                break;
            } else {
                goodLetters++
            }
        }
        console.log(containerWord[i]);
    }

    if (goodLetters == numberOfChildren) {
        let div = document.createElement("div");
        let P = document.createElement("p");
        P.innerHTML = "congratulation you win"
        div.appendChild(P);
        errorDiv.appendChild(div);
    }
}

let mySubmit = form.addEventListener('submit', subFunction)

arrangeTheCards();