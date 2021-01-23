import Pixel from '../pixel'
import { Matrix } from '../types'

export const addTimingPattern = (matrix: Matrix) => {
  for (let position = 0; position < matrix.length; position++) {
    const color = position % 2 === 0 ? Pixel.BLACK : Pixel.WHITE

    matrix[position][6] = color
    matrix[6][position] = color
  }
}
