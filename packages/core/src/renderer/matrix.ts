import { EncodingResult, Matrix } from './types'
import {
  calculateFinderPatternCoordinates,
  FINDER_PATTERN_OUTER_SIZE,
  FINDER_PATTERN,
} from 'renderer/finderPattern'

const calculateQrCodeSize = ({ version }: EncodingResult): number =>
  (version - 1) * 4 + 21

export const generateMatrix = (encodingResult: EncodingResult): Matrix => {
  const qrCodeSize = calculateQrCodeSize(encodingResult)
  const finderPatternCoordinates = calculateFinderPatternCoordinates(qrCodeSize)

  const matrix: Matrix = Array(qrCodeSize).fill([])

  for (const coordinates of Object.values(finderPatternCoordinates)) {
    for (let x = 0; x < FINDER_PATTERN_OUTER_SIZE; x++) {
      for (let y = 0; y < FINDER_PATTERN_OUTER_SIZE; y++) {
        matrix[coordinates[0] + x][coordinates[1] + y] = FINDER_PATTERN[x][y]
      }
    }
  }

  return matrix
}
