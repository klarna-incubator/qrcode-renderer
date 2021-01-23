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
import Pixel, { PixelValue } from './pixel'
import { calculateDarkModuleCoordinates, DarkModule } from './darkModule'
import { addTimingPattern } from './fixedPatterns/timing'

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

const build2DArray = <T>(size: number, initial: T) =>
  Array(size)
    .fill(null)
    .map(() => Array<T>(size).fill(initial))

export const generateMatrix = (encodingResult: EncodingResult): Matrix => {
  const qrCodeSize = calculateQrCodeSize(encodingResult)
  const finderPatternCoordinates = calculateFinderPatternCoordinates(qrCodeSize)

  const matrix = build2DArray<PixelValue>(qrCodeSize, Pixel.EMPTY)
  addTimingPattern(matrix)

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

  // adding dark module
  const [darkModuleX, darkModuleY] = calculateDarkModuleCoordinates(
    encodingResult
  )
  matrix[darkModuleX][darkModuleY] = DarkModule

  // TODO: reserve version information area
  // TODO: place the data bits

  return matrix
}
