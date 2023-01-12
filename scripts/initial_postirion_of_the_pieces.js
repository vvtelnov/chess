// array of all chess pieces.
const allChessPiecesObj = {
	0: ['rook_1', 'black'],
	1: ['knight_1', 'black'],
	2: ['bishop_white', 'black'],
	3: ['queen_', 'black'],
	4: ['king_', 'black'],
	5: ['bishop_black', 'black'],
	6: ['knight_2', 'black'],
	7: ['rook_2', 'black'],
	8: ['pawn_a', 'black'],
	9: ['pawn_b', 'black'],
	10: ['pawn_c', 'black'],
	11: ['pawn_d', 'black'],
	12: ['pawn_e', 'black'],
	13: ['pawn_f', 'black'],
	14: ['pawn_g', 'black'],
	15: ['pawn_h', 'black'],
	
	48: ['pawn_a', 'white'],
	49: ['pawn_b', 'white'],
	50: ['pawn_c', 'white'],
	51: ['pawn_d', 'white'],
	52: ['pawn_e', 'white'],
	53: ['pawn_f', 'white'],
	54: ['pawn_g', 'white'],
	55: ['pawn_h', 'white'],
	56: ['rook_1', 'white'],
	57: ['knight_1', 'white'],
	58: ['bishop_black', 'white'],
	59: ['queen_', 'white'],
	60: ['king_', 'white'],
	61: ['bishop_white', 'white'],
	62: ['knight_2', 'white'],
	63: ['rook_2', 'white'],
}


let blackPieces = {};
let whitePieces = {};

for (let currCell = 0; currCell < 64; currCell++) {
	if (currCell in allChessPiecesObj) {
		let currPiece = allChessPiecesObj[currCell][0];
		let currColor = allChessPiecesObj[currCell][1];
		blackPieces[allChessPiecesObj[currCell]] = new Pawn(
			currColor,
			currPiece.slice(0, currPiece.indexOf('_')),
			currCell
		);
	}
}

