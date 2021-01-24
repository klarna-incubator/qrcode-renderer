import Pixel from '../pixel'
import { Matrix } from '../types'
import { applyMatrix, buildMatrix } from '../matrix'

export const wrapWithQuietZone = (matrix: Matrix) => {
  const size = matrix.length

  const biggerMatrix = buildMatrix(size + 8, Pixel.WHITE)

  applyMatrix(biggerMatrix, matrix, 4)

  return biggerMatrix
}
