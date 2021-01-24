import { EncodingResult, Matrix } from './types'
import Pixel, { PixelValue } from './pixel'
import { addTimingPattern } from './fixedPatterns/timing'
import { addFinderPattern } from './fixedPatterns/finder'
import { addAlignmentPattern } from './fixedPatterns/alignment'
import { addFormatInformationAreaPattern } from './fixedPatterns/formatInformationArea'
import { addVersionInformationArea } from './fixedPatterns/versionInformationArea'
import { addDataBits } from './dataPatterns/dataBits'
import { buildMatrix } from './matrix'
import { createMaskedMatrices } from './mask/create'
import { decideBestMask } from './mask/decide'

const calculateQrCodeSize = ({ version }: EncodingResult): number =>
  (version - 1) * 4 + 21

export const renderModules = (encodingResult: EncodingResult): Matrix => {
  const qrCodeSize = calculateQrCodeSize(encodingResult)

  const fixedMatrix = buildMatrix<PixelValue>(qrCodeSize, Pixel.EMPTY)
  // we want a separate matrix to store the data, so we can mask it afterwards
  const dataMatrix = buildMatrix<PixelValue>(qrCodeSize, Pixel.EMPTY)

  addFinderPattern(fixedMatrix)
  addAlignmentPattern(encodingResult.version, fixedMatrix)
  addTimingPattern(fixedMatrix)
  addFormatInformationAreaPattern(encodingResult.version, fixedMatrix)
  addVersionInformationArea(encodingResult.version, fixedMatrix)

  // This will only mutate the dataMatrix
  addDataBits(encodingResult.data, fixedMatrix, dataMatrix)

  const maskedMatrices = createMaskedMatrices(
    encodingResult.level,
    encodingResult.version,
    fixedMatrix,
    dataMatrix
  )
  const bestMask = decideBestMask(maskedMatrices)

  // add format and version information

  return bestMask
}
