import { EncodingResult, Matrix } from './types'
import Pixel, { PixelValue } from './pixel'
import { calculateDarkModuleCoordinates, DarkModule } from './darkModule'
import { addTimingPattern } from './fixedPatterns/timing'
import { addFinderPattern } from './fixedPatterns/finder'
import { addAlignmentPattern } from './fixedPatterns/alignment'

const calculateQrCodeSize = ({ version }: EncodingResult): number =>
  (version - 1) * 4 + 21

const build2DArray = <T>(size: number, initial: T) =>
  Array(size)
    .fill(null)
    .map(() => Array<T>(size).fill(initial))

export const generateMatrix = (encodingResult: EncodingResult): Matrix => {
  const qrCodeSize = calculateQrCodeSize(encodingResult)

  const matrix = build2DArray<PixelValue>(qrCodeSize, Pixel.EMPTY)

  addFinderPattern(matrix)
  addAlignmentPattern(encodingResult.version, matrix)
  addTimingPattern(matrix)

  // adding dark module
  const [darkModuleX, darkModuleY] = calculateDarkModuleCoordinates(
    encodingResult
  )
  matrix[darkModuleX][darkModuleY] = DarkModule

  // TODO: reserve version information area
  // TODO: place the data bits

  return matrix
}
