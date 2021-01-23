import Pixel from '../pixel'
import { Matrix } from '../types'

export const TIMING_FIXED_POSITION = 6

export const addTimingPattern = (matrix: Matrix) => {
  for (let position = 0; position < matrix.length; position++) {
    const color = position % 2 === 0 ? Pixel.BLACK : Pixel.WHITE

    if (matrix[position][TIMING_FIXED_POSITION] === Pixel.EMPTY) {
      matrix[position][TIMING_FIXED_POSITION] = color
    }
    if (matrix[TIMING_FIXED_POSITION][position] === Pixel.EMPTY) {
      matrix[TIMING_FIXED_POSITION][position] = color
    }
  }
}
