
let board = [
    ["r", "n", "b", "q", "k", "b", "n", "r"],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    ["R", "N", "B", "Q", "K", "B", "N", "R"]
];


const pieceIcons = {
    "r": "♜", "n": "♞", "b": "♝", "q": "♛", "k": "♚", "p": "♟",
    "R": "♖", "N": "♘", "B": "♗", "Q": "♕", "K": "♔", "P": "♙"
};


let selectedSquare = null;


function renderBoard() {
    const chessBoard = document.getElementById("chess-board");
    chessBoard.innerHTML = ""; 

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement("div");
            square.classList.add("square"); 

           
            if ((row + col) % 2 === 0) {
                square.classList.add("white");
            } else {
                square.classList.add("black");
            }

           
            const piece = board[row][col];
            if (piece) {
                square.textContent = pieceIcons[piece];
            }

          
            if (selectedSquare && selectedSquare[0] === row && selectedSquare[1] === col) {
                square.classList.add("selected");
            }

           
            square.dataset.row = row;
            square.dataset.col = col;

           
            square.onclick = () => handleSquareClick(row, col);

            chessBoard.appendChild(square);
        }
    }
}
function createRain() {
    const rainContainer = document.getElementById("rain-container");

    for (let i = 0; i < 150; i++) {
        const raindrop = document.createElement("div");
        raindrop.className = "raindrop";
        raindrop.style.left = Math.random() * 100 + "vw";
        raindrop.style.animationDuration = Math.random() * 2 + 2 + "s"; 
        raindrop.style.animationDelay = Math.random() * 2 + "s";
        rainContainer.appendChild(raindrop);
    }
}



function handleSquareClick(row, col) {
    const piece = board[row][col];

    if (selectedSquare) {
        const [prevRow, prevCol] = selectedSquare;

       
        if (row !== prevRow || col !== prevCol) {
            board[row][col] = board[prevRow][prevCol];
            board[prevRow][prevCol] = ""; 
        }

        selectedSquare = null; 
    } else if (piece) {
        selectedSquare = [row, col]; 
    }

    renderBoard(); 
}


createRain();
renderBoard();
