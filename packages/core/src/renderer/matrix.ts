import { EncodingResult, Matrix } from './types'
import {
  calculateFinderPatternCoordinates,
  FINDER_PATTERN_OUTER_SIZE,
  FINDER_PATTERN,
} from './finderPattern'

const calculateQrCodeSize = ({ version }: EncodingResult): number =>
  (version - 1) * 4 + 21

const build2DArray = (size: number) =>
  Array(size)
    .fill(null)
    .map(() => Array(size).fill(null))

export const generateMatrix = (encodingResult: EncodingResult): Matrix => {
  const qrCodeSize = calculateQrCodeSize(encodingResult)
  const finderPatternCoordinates = calculateFinderPatternCoordinates(qrCodeSize)

  const matrix: Matrix = build2DArray(qrCodeSize)

  for (const coordinates of Object.values(finderPatternCoordinates)) {
    for (let x = 0; x < FINDER_PATTERN_OUTER_SIZE; x++) {
      for (let y = 0; y < FINDER_PATTERN_OUTER_SIZE; y++) {
        matrix[coordinates[1] + y][coordinates[0] + x] = FINDER_PATTERN[y][x]
      }
    }
  }

  return matrix
}
