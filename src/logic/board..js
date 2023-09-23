import { WINNER_COMBOS } from "../constant"

export const checkWinnerfrom =  (boardToCheck) => {
    // revisamos todas las combinaciones ganadoras
    // para ver si X u O ganó
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if(
        boardToCheck[a] && // 0 -> x u o
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    // si no hay ganador
    return null
  }

  export const checkEndGame = (newBoard) => {
    // reivsamos si hay un empate
    // si no hay más espacios vacíos
    // en el tablero

    /// newBoard = ['x', 'o', 'x', .... etc ]
    return newBoard.every((square => square !== null))
  }