import { EncodingResult } from './types'

const FINDER_PATTERN_OUTER_SIZE = 7
const PIXEL = {
  WHITE: 0,
  BLACK: 1,
}

type Coordinates<X extends number = number, Y extends number = number> = [X, Y]
type Matrix = number[][]

interface FinderPatternCoordinates {
  TOP_LEFT: Coordinates<0, 0>
  TOP_RIGHT: Coordinates<number, 0>
  BOTTOM_LEFT: Coordinates<0>
}

const calculateQrCodeSize = ({ version }: EncodingResult): number =>
  (version - 1) * 4 + 21

const calculateFinderPatternCoordinates = (
  qrCodeSize: number
): FinderPatternCoordinates => ({
  TOP_LEFT: [0, 0],
  TOP_RIGHT: [qrCodeSize - FINDER_PATTERN_OUTER_SIZE, 0],
  BOTTOM_LEFT: [0, qrCodeSize - FINDER_PATTERN_OUTER_SIZE],
})

export const generateMatrix = (encodingResult: EncodingResult): Matrix => {
  const qrCodeSize = calculateQrCodeSize(encodingResult)
  const finderPatternCoordinates = calculateFinderPatternCoordinates(qrCodeSize)

  const matrix: Matrix = Array(qrCodeSize).fill([])

  matrix[finderPatternCoordinates.TOP_LEFT[0]].push(
    ...Array(FINDER_PATTERN_OUTER_SIZE).fill(PIXEL.BLACK)
  )

  return matrix
}
