
// creare una funxzione che permette di visualizzare la griglia al click

document.getElementById("playBtn").addEventListener("click", initGame )

const numbersArray = generateRandomOrderNumbers(100);

const gridElem = document.querySelector(".grid");


function initGame() {
for (let i = 0; i < numbersArray.length; i++) {
    const curNumber = numbersArray[i];
    // Generare la cella della griglia quando avviene il click di gioco
    const cell = generateGridCell(curNumber);
    cell.addEventListener("click", initGame)
  
    gridElem.append(cell);
  }
}
  
// Funzioni per generare i numeri e la griglia???



// generare la griglia tramite questa funzione 
function generateGridCell(innerNumber) {

    //Creiamo una cella
    const newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.innerHTML = innerNumber;

   return newCell;

}