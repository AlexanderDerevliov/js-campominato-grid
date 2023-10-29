
// creare una funxzione che permette di visualizzare la griglia al click

document.getElementById("playBtn").addEventListener("click", initGame )

const numbersArray = generateNumbers(100);

const gridElem = document.querySelector(".grid");

  // Generare la cella della griglia quando avviene il click di gioco
function initGame() {
for (let i = 0; i < numbersArray.length; i++) {
    const curNumber = numbersArray[i];
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