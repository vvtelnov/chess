const chessBoard = document.createElement("div");
chessBoard.classList.add("chess-board");
document.body.append(chessBoard);

let isLastRow = false;  // neded to put letters to the board.
const letterArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']; 

// Creating a chess board.
for (let i=0; i<64; i++) {
	let currentCell = document.createElement("div");
	currentCell.classList.add("chess-board__cell");
	chessBoard.append(currentCell);

	// Setting white and black cells.
	if (Math.floor(i / 8) % 2) {
		if (i % 2 == 0) {
			currentCell.classList.add("chess-board__cell_color_black");
		} else {
			currentCell.classList.add("chess-board__cell_color_white");
		}
	} else {
		if (i % 2 != 0) {
			currentCell.classList.add("chess-board__cell_color_black");
		} else {
			currentCell.classList.add("chess-board__cell_color_white");
		}
	}

	// Adding id with a cell numner to current cell.
	currentCell.setAttribute('id', i);

	// Adding numbers and letters to the board.
	currentRowNumb = 8 - i / 8;
	currentColumnNumb = i % 8;

	let isFirstColumnInRow = currentRowNumb % 1 == 0;
	if (isFirstColumnInRow) {
		let currentSpanElm = document.createElement("span");
		currentSpanElm.classList.add("chess-board__cell_text_number");
		currentCell.append(currentSpanElm);
		currentSpanElm.innerText = currentRowNumb;
	}    

	if (currentRowNumb == 1) {
		isLastRow = true;
	}

	if (isLastRow) {
		let currentSpanElm = document.createElement("span");
		currentSpanElm.classList.add("chess-board__cell_text_letter");
		currentCell.append(currentSpanElm);
		currentSpanElm.innerText = letterArr[currentColumnNumb];
	}
}
