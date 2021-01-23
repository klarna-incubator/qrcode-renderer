import { Matrix } from '../types'
import Pixel from '../pixel'

const { BLACK, WHITE } = Pixel

export const FINDER_PATTERN = [
  [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
  [BLACK, WHITE, WHITE, WHITE, WHITE, WHITE, BLACK],
  [BLACK, WHITE, BLACK, BLACK, BLACK, WHITE, BLACK],
  [BLACK, WHITE, BLACK, BLACK, BLACK, WHITE, BLACK],
  [BLACK, WHITE, BLACK, BLACK, BLACK, WHITE, BLACK],
  [BLACK, WHITE, WHITE, WHITE, WHITE, WHITE, BLACK],
  [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
] as const

export const FINDER_PATTERN_OUTER_SIZE = FINDER_PATTERN.length

const calculateCoordinates = (qrCodeSize: number) => ({
  TOP_LEFT: [0, 0],
  TOP_RIGHT: [qrCodeSize - FINDER_PATTERN_OUTER_SIZE, 0],
  BOTTOM_LEFT: [0, qrCodeSize - FINDER_PATTERN_OUTER_SIZE],
})

export const addFinderPattern = (matrix: Matrix) => {
  const qrCodeSize = matrix.length
  const finderPatternCoordinates = calculateCoordinates(qrCodeSize)

  for (const [originX, originY] of Object.values(finderPatternCoordinates)) {
    for (let x = 0; x < FINDER_PATTERN_OUTER_SIZE; x++) {
      for (let y = 0; y < FINDER_PATTERN_OUTER_SIZE; y++) {
        matrix[originY + y][originX + x] = FINDER_PATTERN[y][x]
      }
    }

    const horizontalSeparatorOrigin = {
      x: originX === 0 ? 0 : originX - 1,
      y: originY === 0 ? FINDER_PATTERN_OUTER_SIZE : originY - 1,
    }
    for (let x = 0; x < FINDER_PATTERN_OUTER_SIZE + 1; ++x) {
      matrix[horizontalSeparatorOrigin.y][horizontalSeparatorOrigin.x + x] =
        Pixel.WHITE
    }

    const verticalSeparatorOrigin = {
      x: originX === 0 ? FINDER_PATTERN_OUTER_SIZE : originX - 1,
      y: originY === 0 ? 0 : originY - 1,
    }
    for (let y = 0; y < FINDER_PATTERN_OUTER_SIZE + 1; ++y) {
      matrix[verticalSeparatorOrigin.y + y][verticalSeparatorOrigin.x] =
        Pixel.WHITE
    }
  }
}
