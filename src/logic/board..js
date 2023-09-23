import { WINNER_COMBOS } from "../constant"

export const checkWinnerfrom =  (boardToCheck) => {
    // we review all the winning combinations
    // to see if X or O won
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
    // if there is no winner
    return null
  }

  export const checkEndGame = (newBoard) => {
    // we check if there is a tie
    // if there are no more empty spaces
    // on the board

    /// newBoard = ['x', 'o', 'x', .... etc ]
    return newBoard.every((square => square !== null))
  }