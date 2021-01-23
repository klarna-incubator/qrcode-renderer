import { EncodingResult, Matrix, Pattern, Coordinates } from './types'
import {
  ALIGNMENT_PATTERN,
  calculateAlignmentPatternsCoordinates,
} from './alignmentPattern'
import Pixel, { PixelValue } from './pixel'
import { calculateDarkModuleCoordinates, DarkModule } from './darkModule'
import { addTimingPattern } from './fixedPatterns/timing'
import { addFinderPattern } from './fixedPatterns/finder'

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

  const matrix = build2DArray<PixelValue>(qrCodeSize, Pixel.EMPTY)

  addFinderPattern(matrix)
  addTimingPattern(matrix)

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
