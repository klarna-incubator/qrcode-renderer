import Pixel from '../pixel'
import { Matrix } from '../types'

export const addTimingPattern = (matrix: Matrix) => {
  for (let position = 0; position < matrix.length; position++) {
    const color = position % 2 === 0 ? Pixel.BLACK : Pixel.WHITE

    if (matrix[position][6] === Pixel.EMPTY) {
      matrix[position][6] = color
    }
    if (matrix[6][position] === Pixel.EMPTY) {
      matrix[6][position] = color
    }
  }
}
