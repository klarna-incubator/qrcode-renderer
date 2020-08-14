import { EncodingResult } from './types'

type Matrix = number[][]

const FINDER_PATTERN_OUTER_SIZE = 7
const FINDER_PATTERN_INNER_WHITE_SIZE = 5
const FINDER_PATTERN_INNER_BLACK_SIZE = 3
const PIXEL = {
  WHITE: 0,
  BLACK: 1,
}

const buildFinderPattern = (): Matrix => {
  const edgeRow = Array(FINDER_PATTERN_OUTER_SIZE).fill(PIXEL.BLACK)
  const secondToEdgeRow = [PIXEL.BLACK,  ...Array(FINDER_PATTERN_INNER_WHITE_SIZE).fill(PIXEL.WHITE), PIXEL.BLACK]
  const innerRows = Array(FINDER_PATTERN_INNER_BLACK_SIZE).fill([ PIXEL.BLACK, PIXEL.WHITE, ...Array(FINDER_PATTERN_INNER_BLACK_SIZE).fill(PIXEL.BLACK), PIXEL.WHITE, PIXEL.BLACK ])

  return [edgeRow, secondToEdgeRow, ...innerRows, secondToEdgeRow, edgeRow]
}

type Coordinates<X extends number = number, Y extends number = number> = [X, Y]


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
  const finderPatternModules = buildFinderPattern()

  const matrix: Matrix = Array(qrCodeSize).fill([])

  for (const coordinates of Object.values(finderPatternCoordinates)) {
    for (let x = 0; x < FINDER_PATTERN_OUTER_SIZE; x++) {
      for (let y = 0; y < FINDER_PATTERN_OUTER_SIZE; y++) {
        matrix[coordinates[0] + x][coordinates[1] + y] = finderPatternModules[x][y]
      }
    }
  }

  return matrix
}
