import { EncodingResult } from './types'

const FINDER_PATTERN_OUTER_SIZE = 7

type Coordinates<X extends number = number, Y extends number = number> = [X, Y]

interface FinderPatternCoordinates {
  TOP_LEFT: Coordinates<0, 0>
  TOP_RIGHT: Coordinates<number, 0>
  BOTTOM_LEFT: Coordinates<0, number>
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

export const generateMatrix = (encodingResult: EncodingResult): number[][] => {
  const qrCodeSize = calculateQrCodeSize(encodingResult)
  const finderPatternCoordinates = calculateFinderPatternCoordinates(qrCodeSize)

  return [[]]
}
