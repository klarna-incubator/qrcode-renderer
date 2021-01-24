import { Matrix } from '../../types'

export const penalizeSquaresInRow = (matrix: Matrix, y: number) => {
  if (y === matrix.length - 1) {
    // No squares to be formed in the last line
    return 0
  }

  let penalty = 0
  for (let x = 0; x < matrix.length - 1; ++x) {
    const color = matrix[y][x]

    if (
      matrix[y + 1][x] === color &&
      matrix[y][x + 1] === color &&
      matrix[y + 1][x + 1] === color
    ) {
      penalty += 3
    }
  }

  return penalty
}
