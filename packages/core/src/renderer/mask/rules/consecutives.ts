import Pixel, { PixelValue } from '../../pixel'

export const penalizeConsecutivesInRow = (row: PixelValue[]) => {
  let penalty = 0

  const consecutives = {
    amount: 0,
    color: Pixel.EMPTY as PixelValue,
  }
  for (const cell of row) {
    if (cell === consecutives.color) {
      consecutives.amount++
    } else {
      if (consecutives.amount >= 5) {
        penalty += 3 + consecutives.amount - 5
      }
      consecutives.amount = 1
      consecutives.color = cell
    }
  }

  if (consecutives.amount >= 5) {
    penalty += 3 + consecutives.amount - 5
  }

  return penalty
}
