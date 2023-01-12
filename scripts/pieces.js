class Piece {
	constructor(color, pieceName, initialPosition) {
		this.color = color;
		this.pieceName = pieceName;
		this.sourceToPiece = "../chess_pieces/".concat(pieceName, "_", color, ".png");
		this.cellPosition = initialPosition;
		
		// To create chess piece and put it to the board.
		this.chessPiece = document.createElement('img');
		this.chessPiece.classList.add("chess-piece");
		this.chessPiece.setAttribute("src", this.sourceToPiece);
		// document.querySelectorAll(".chess-board__cell")[initialPosition].append(this.chessPiece);
		document.getElementById(initialPosition).append(this.chessPiece);
	}

	takePiece(pieceToBeTaken) {
		console.log(this.color, this.pieceName, 'takes', pieceToBeTaken.color, pieceToBeTaken.pieceName);
		this.cellPosition = pieceToBeTaken.cellPosition;
		pieceToBeTaken.beTaken();
		this.changePositionOnDesk(this.cellPosition);
	}

	changePositionOnDesk(targetCell) {
		document.querySelectorAll(".chess-board__cell")[targetCell].append(this.chessPiece);
	}

	beTaken() {
		this.chessPiece.remove();
	}

}

class Pawn extends Piece {
	constructor(color, piece, initialPosition) {
		super(color, piece, initialPosition);
	}
}

class knight extends Piece {
	constructor(color, piece, initialPosition) {
		super(color, piece, initialPosition);
	}
}

class bishop extends Piece {
	constructor(color, piece, initialPosition) {
		super(color, piece, initialPosition);
	}
}

class Rook extends Pawn {
	constructor(color, piece, initialPosition) {
		super(color, piece, initialPosition);
	}
}

class queen extends Piece {
	constructor(color, piece, initialPosition) {
		super(color, piece, initialPosition);
	}
}

class king extends Piece {
	constructor(color, piece, initialPosition) {
		super(color, piece, initialPosition);
	}
}


