import { range } from '../range'
import Pixel from '../pixel'
import { Matrix } from '../types'
import { FINDER_PATTERN_OUTER_SIZE } from './finder'

const getInformationAreaCoordinates = (qrCodeSize: number) => {
  return [
    {
      x: FINDER_PATTERN_OUTER_SIZE + 1,
      y: 0,
      width: 1,
      height: FINDER_PATTERN_OUTER_SIZE + 2,
    },
    {
      x: 0,
      y: FINDER_PATTERN_OUTER_SIZE + 1,
      width: FINDER_PATTERN_OUTER_SIZE + 2,
      height: 1,
    },
    {
      x: qrCodeSize - FINDER_PATTERN_OUTER_SIZE - 1,
      y: FINDER_PATTERN_OUTER_SIZE + 1,
      width: FINDER_PATTERN_OUTER_SIZE + 1,
      height: 1,
    },
    {
      x: FINDER_PATTERN_OUTER_SIZE + 1,
      y: qrCodeSize - FINDER_PATTERN_OUTER_SIZE - 1,
      width: 1,
      height: FINDER_PATTERN_OUTER_SIZE + 1,
    },
  ]
}

export const addFormatInformationAreaPattern = (
  version: number,
  matrix: Matrix
) => {
  // AKA. the dark module
  matrix[4 * version + 9][8] = Pixel.BLACK

  for (const coordinate of getInformationAreaCoordinates(matrix.length)) {
    for (const x of range(coordinate.x, coordinate.width)) {
      for (const y of range(coordinate.y, coordinate.height)) {
        if (matrix[y][x] === Pixel.EMPTY) {
          matrix[y][x] = Pixel.WHITE
        }
      }
    }
  }
}
