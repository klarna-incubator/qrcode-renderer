import { EncodingResult, Matrix } from './types'
import {
  calculateFinderPatternCoordinates,
  FINDER_PATTERN_OUTER_SIZE,
  FINDER_PATTERN,
} from './finderPattern'
import Pixel from './pixel'
import { calculateDarkModuleCoordinates, DarkModule } from './darkModule'

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
    // add Finder pattern
    for (let x = 0; x < FINDER_PATTERN_OUTER_SIZE; x++) {
      for (let y = 0; y < FINDER_PATTERN_OUTER_SIZE; y++) {
        matrix[coordinates[0] + x][coordinates[1] + y] = FINDER_PATTERN[x][y]
      }
    }

    // add horizontal separator
    const isHigher = coordinates[1] > FINDER_PATTERN_OUTER_SIZE
    for (
      let x = 0;
      x <= FINDER_PATTERN_OUTER_SIZE && coordinates[0] + x < qrCodeSize;
      x++
    ) {
      matrix[coordinates[0] + x][
        coordinates[1] + (isHigher ? -1 : FINDER_PATTERN_OUTER_SIZE)
      ] = Pixel.WHITE
    }

    // add vertical separator
    const isLeft = coordinates[0] > FINDER_PATTERN_OUTER_SIZE
    for (
      let y = 0;
      y <= FINDER_PATTERN_OUTER_SIZE && coordinates[1] + y < qrCodeSize;
      y++
    ) {
      matrix[coordinates[0] + (isLeft ? -1 : FINDER_PATTERN_OUTER_SIZE)][
        coordinates[1] + y
      ] = Pixel.WHITE
    }
  }

  // TODO: add alignmentPatterns

  // TODO: add timing patterns

  // adding dark module
  const [darkModuleX, darkModuleY] = calculateDarkModuleCoordinates(
    encodingResult
  )
  matrix[darkModuleX][darkModuleY] = DarkModule

  // TODO: reserve version information area
  // TODO: place the data bits

  return matrix
}
