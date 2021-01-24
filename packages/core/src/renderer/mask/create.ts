import { Level } from '../../level'
import { addVersionBits, createVersionBits } from '../dataPatterns/versionBits'
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
  formatBits: number[],
  versionBits: number[]
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
  addVersionBits(versionBits, maskedMatrix)

  return maskedMatrix
}

export const createMaskedMatrices = (
  level: Level,
  version: number,
  fixedMatrix: Matrix,
  dataMatrix: Matrix
) => {
  return Array(8)
    .fill(0)
    .map((_zero, index) => {
      const formatBits = createFormatBits(level, index)
      const versionBits = createVersionBits(version)

      const maskingFunction: MaskingFunction = (position, pixel) =>
        mask(index, position, pixel)

      return maskMatrix(
        fixedMatrix,
        dataMatrix,
        maskingFunction,
        formatBits,
        versionBits
      )
    })
}
