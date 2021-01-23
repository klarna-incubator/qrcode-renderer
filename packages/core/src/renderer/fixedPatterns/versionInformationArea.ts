import { Matrix } from '../types'
import { range } from '../range'
import Pixel from '../pixel'
import { FINDER_PATTERN_OUTER_SIZE } from './finder'

const getVersionInformationAreaCoord = (qrCodeSize: number) => [
  {
    x: 0,
    y: qrCodeSize - FINDER_PATTERN_OUTER_SIZE - 1 - 3,
    width: 6,
    height: 3,
  },
  {
    x: qrCodeSize - FINDER_PATTERN_OUTER_SIZE - 1 - 3,
    y: 0,
    width: 3,
    height: 6,
  },
]

export const addVersionInformationArea = (version: number, matrix: Matrix) => {
  if (version < 7) {
    return
  }

  for (const coordinate of getVersionInformationAreaCoord(matrix.length)) {
    for (const x of range(coordinate.x, coordinate.width)) {
      for (const y of range(coordinate.y, coordinate.height)) {
        matrix[y][x] = Pixel.WHITE
      }
    }
  }
}
