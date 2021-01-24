import { Level } from '../../level'
import { addFormatBits, createFormatBits } from '../dataPatterns/formatBits'
import { buildMatrix, applyMatrix } from '../matrix'
import Pixel, { PixelValue } from '../pixel'
import { Matrix } from '../types'
import { mask } from './mask'

type MaskingFunction = (
  position: { x: number; y: number },
  pixel: PixelValue
) => PixelValue

const maskMatrix = (
  fixed: Matrix,
  data: Matrix,
  maskingFunction: MaskingFunction,
  formatBits: number[]
) => {
  const maskedMatrix = buildMatrix<PixelValue>(fixed.length, Pixel.EMPTY)

  applyMatrix(maskedMatrix, data)

  for (let x = 0; x < maskedMatrix.length; ++x) {
    for (let y = 0; y < maskedMatrix.length; ++y) {
      if (maskedMatrix[y][x] !== Pixel.EMPTY) {
        maskedMatrix[y][x] = maskingFunction({ x, y }, maskedMatrix[y][x])
      }
    }
  }

  applyMatrix(maskedMatrix, fixed)
  addFormatBits(formatBits, maskedMatrix)

  return maskedMatrix
}

export const createMaskedMatrices = (
  level: Level,
  fixedMatrix: Matrix,
  dataMatrix: Matrix
) => {
  // COMBAK: adjust back to 8
  return Array(1)
    .fill(0)
    .map((_zero, index) => {
      const formatBits = createFormatBits(level, index)

      const maskingFunction: MaskingFunction = (position, pixel) =>
        mask(index, position, pixel)

      return maskMatrix(fixedMatrix, dataMatrix, maskingFunction, formatBits)
    })
}
