import { EncodingResult, Matrix, Pattern, Coordinates } from './types'
import {
  calculateFinderPatternCoordinates,
  FINDER_PATTERN_OUTER_SIZE,
  FINDER_PATTERN,
} from './finderPattern'
import {
  ALIGNMENT_PATTERN,
  calculateAlignmentPatternsCoordinates,
} from './alignmentPattern'
import Pixel from './pixel'
import { calculateDarkModuleCoordinates, DarkModule } from './darkModule'

const calculateQrCodeSize = ({ version }: EncodingResult): number =>
  (version - 1) * 4 + 21

const copyPatternToMatrix = (
  pattern: Pattern,
  [x0, y0]: Coordinates,
  matrix: Matrix
): void => {
  for (let x = 0; x < pattern.length; x++) {
    for (let y = 0; y < pattern[0].length; y++) {
      matrix[x0 + x][y0 + y] = pattern[x][y]
    }
  }
}

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
    copyPatternToMatrix(FINDER_PATTERN, coordinates, matrix)

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

  // add alignmentPatterns
  const alignmentPatternsCoordinates = calculateAlignmentPatternsCoordinates(
    encodingResult.version
  )
  alignmentPatternsCoordinates.forEach(coordinates =>
    copyPatternToMatrix(ALIGNMENT_PATTERN, coordinates, matrix)
  )

  // add timing patterns
  for (let x = 0; x < qrCodeSize; x++) {
    if (!matrix[x][6]) {
      matrix[x][6] = x % 2 === 0 ? Pixel.BLACK : Pixel.WHITE
    }
  }

  for (let y = 0; y < qrCodeSize; y++) {
    if (!matrix[6][y]) {
      matrix[6][y] = y % 2 === 0 ? Pixel.BLACK : Pixel.WHITE
    }
  }

  // adding dark module
  const [darkModuleX, darkModuleY] = calculateDarkModuleCoordinates(
    encodingResult
  )
  matrix[darkModuleX][darkModuleY] = DarkModule

  // TODO: reserve version information area
  // TODO: place the data bits

  return matrix
}
