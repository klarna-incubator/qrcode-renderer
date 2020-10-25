import { Coordinates, Pattern } from './types'
import Pixel from './pixel'

const { BLACK, WHITE } = Pixel

export const FINDER_PATTERN_OUTER_SIZE = 7
export const FINDER_PATTERN_INNER_WHITE_SIZE = 5
export const FINDER_PATTERN_INNER_BLACK_SIZE = 3

export const FINDER_PATTERN: Pattern = [
  [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
  [BLACK, WHITE, WHITE, WHITE, WHITE, WHITE, BLACK],
  [BLACK, WHITE, BLACK, BLACK, BLACK, WHITE, BLACK],
  [BLACK, WHITE, BLACK, BLACK, BLACK, WHITE, BLACK],
  [BLACK, WHITE, BLACK, BLACK, BLACK, WHITE, BLACK],
  [BLACK, WHITE, WHITE, WHITE, WHITE, WHITE, BLACK],
  [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
] as const

// const buildFinderPattern = (): Matrix => {
//   const edgeRow = Array(FINDER_PATTERN_OUTER_SIZE).fill(BLACK)
//   const secondToEdgeRow = [
//     BLACK,
//     ...Array(FINDER_PATTERN_INNER_WHITE_SIZE).fill(WHITE),
//     BLACK,
//   ]
//   const innerRows = Array(FINDER_PATTERN_INNER_BLACK_SIZE).fill([
//     BLACK,
//     WHITE,
//     ...Array(FINDER_PATTERN_INNER_BLACK_SIZE).fill(BLACK),
//     WHITE,
//     BLACK,
//   ])
//
//   return [edgeRow, secondToEdgeRow, ...innerRows, secondToEdgeRow, edgeRow]
// }

export interface FinderPatternCoordinates {
  TOP_LEFT: Coordinates<0, 0>
  TOP_RIGHT: Coordinates<number, 0>
  BOTTOM_LEFT: Coordinates<0>
}

export const calculateFinderPatternCoordinates = (
  qrCodeSize: number
): FinderPatternCoordinates => ({
  TOP_LEFT: [0, 0],
  TOP_RIGHT: [qrCodeSize - FINDER_PATTERN_OUTER_SIZE, 0],
  BOTTOM_LEFT: [0, qrCodeSize - FINDER_PATTERN_OUTER_SIZE],
})
