import Pixel from '../../pixel'
import { Matrix } from '../../types'

export const penalizeRatioOfColors = (matrix: Matrix) => {
  const numOfModules = matrix.length ** 2
  const numOfDarkModules = matrix.reduce(
    (acc, row) => acc + row.filter(cell => cell === Pixel.BLACK).length,
    0
  )

  const percentageOfDarkModules = (100 * numOfDarkModules) / numOfModules
  const previousMultipleOfFive = Math.floor(percentageOfDarkModules / 5)
  const nextMultipleOfFive = previousMultipleOfFive + 1

  return (
    Math.min(
      Math.abs(previousMultipleOfFive - 10),
      Math.abs(nextMultipleOfFive - 10)
    ) * 10
  )
}
