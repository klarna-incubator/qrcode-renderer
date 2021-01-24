import { Polinomial } from '../../errorCorrection/Polinomial'
import { FINDER_PATTERN_OUTER_SIZE } from '../fixedPatterns/finder'
import Pixel from '../pixel'
import { Matrix } from '../types'

// a12 + a11 + a10 + a9 + a8 + a5 + a2 + 1
const generatorPolinomialCoefs = {
  12: 1,
  11: 1,
  10: 1,
  9: 1,
  8: 1,
  5: 1,
  2: 1,
  0: 1,
}

const ensureLength = (length: number, bitArray: number[]) =>
  bitArray
    .join('')
    .padStart(length, '0')
    .split('')
    .map(Number)

const getVersionBits = (version: number) => version.toString(2).padStart(6, '0')

export const createVersionBits = (version: number) => {
  if (version < 7) {
    return []
  }

  const versionBits = getVersionBits(version)
    .split('')
    .map(Number)

  const generator = Polinomial.fromCoefExponents(generatorPolinomialCoefs)

  const versionPoly = Polinomial.fromCoef(
    versionBits.slice().reverse()
  ).multiply(Polinomial.fromCoefExponents({ [generator.greaterPower()]: 0 }))

  const errorCorrectionBits = ensureLength(
    12,
    versionPoly
      .modulo(generator)
      .toCoef()
      .reverse()
  )

  return [...versionBits, ...errorCorrectionBits]
}

export const addVersionBits = (versionBits: number[], matrix: Matrix) => {
  const bottomLeftOrigin = {
    x: 0,
    y: matrix.length - 1 - FINDER_PATTERN_OUTER_SIZE - 3,
  }

  const topRightOrigin = {
    x: matrix.length - 1 - FINDER_PATTERN_OUTER_SIZE - 3,
    y: 0,
  }

  versionBits.forEach((bit, index) => {
    const pixel = bit === 0 ? Pixel.WHITE : Pixel.BLACK

    matrix[bottomLeftOrigin.y + (index % 3)][
      bottomLeftOrigin.x + Math.floor(index / 3)
    ] = pixel

    matrix[topRightOrigin.y + Math.floor(index / 3)][
      topRightOrigin.x + (index % 3)
    ] = pixel
  })
}
