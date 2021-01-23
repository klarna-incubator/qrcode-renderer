import Pixel from '../pixel'
import { Matrix } from '../types'

export const addFormatInformationAreaPattern = (
  version: number,
  matrix: Matrix
) => {
  matrix[4 * version + 9][8] = Pixel.BLACK
}
