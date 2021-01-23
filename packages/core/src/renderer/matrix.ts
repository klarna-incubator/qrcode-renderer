import { EncodingResult, Matrix } from './types'
import Pixel, { PixelValue } from './pixel'
import { addTimingPattern } from './fixedPatterns/timing'
import { addFinderPattern } from './fixedPatterns/finder'
import { addAlignmentPattern } from './fixedPatterns/alignment'
import { addFormatInformationAreaPattern } from './fixedPatterns/formatInformationArea'
import { addVersionInformationArea } from './fixedPatterns/versionInformationArea'
import { addDataBits } from './dataBits'

const calculateQrCodeSize = ({ version }: EncodingResult): number =>
  (version - 1) * 4 + 21

const build2DArray = <T>(size: number, initial: T) =>
  Array(size)
    .fill(null)
    .map(() => Array<T>(size).fill(initial))

const applyMatrix = (target: Matrix, source: Matrix) => {
  for (let x = 0; x < source.length; ++x) {
    for (let y = 0; y < source.length; ++y) {
      if (source[y][x] !== Pixel.EMPTY) {
        target[y][x] = source[y][x]
      }
    }
  }
}

export const generateMatrix = (encodingResult: EncodingResult): Matrix => {
  const qrCodeSize = calculateQrCodeSize(encodingResult)

  const fixedMatrix = build2DArray<PixelValue>(qrCodeSize, Pixel.EMPTY)
  // we want a separate matrix to store the data, so we can mask it afterwards
  const dataMatrix = build2DArray<PixelValue>(qrCodeSize, Pixel.EMPTY)

  addFinderPattern(fixedMatrix)
  addAlignmentPattern(encodingResult.version, fixedMatrix)
  addTimingPattern(fixedMatrix)
  addFormatInformationAreaPattern(encodingResult.version, fixedMatrix)
  addVersionInformationArea(encodingResult.version, fixedMatrix)

  // This will only mutate the dataMatrix
  addDataBits(encodingResult.data, fixedMatrix, dataMatrix)

  applyMatrix(dataMatrix, fixedMatrix)

  return dataMatrix
}
