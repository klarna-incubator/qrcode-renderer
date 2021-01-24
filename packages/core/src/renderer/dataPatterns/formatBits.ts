import { Polinomial } from '../../errorCorrection/Polinomial'
import { Level } from '../../level'
import { FINDER_PATTERN_OUTER_SIZE } from '../fixedPatterns/finder'
import Pixel from '../pixel'
import { Matrix } from '../types'

const getLevelBits = (level: Level) => {
  switch (level) {
    case 'M':
      return '00'
    case 'L':
      return '01'
    case 'H':
      return '10'
    case 'Q':
      return '11'
  }
}

const getMaskBits = (mask: number) => mask.toString(2).padStart(3, '0')

// Equivalent to a10 + a8 + a5 + a4 + a2 + a + 1
const generatorPolinomialCoefs = {
  10: 1,
  8: 1,
  5: 1,
  4: 1,
  2: 1,
  1: 1,
  0: 1,
}

// We need to XOR with this as the last step
const maskString = [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0]

const ensureLength = (length: number, bitArray: number[]) =>
  bitArray
    .join('')
    .padStart(length, '0')
    .split('')
    .map(Number)

export const createFormatBits = (level: Level, mask: number) => {
  const levelBits = getLevelBits(level)
  const maskBits = getMaskBits(mask)

  const formatBits = (levelBits + maskBits).split('').map(Number)
  const generator = Polinomial.fromCoefExponents(generatorPolinomialCoefs)

  // Here we multiply so that we divide with the generator the correct amount of times
  const formatPoly = Polinomial.fromCoef(formatBits.slice().reverse()).multiply(
    Polinomial.fromCoefExponents({ [generator.greaterPower()]: 0 })
  )

  const errorCorrectionBits = ensureLength(
    10,
    formatPoly
      .modulo(generator)
      .toCoef()
      .reverse()
  )

  return [...formatBits, ...errorCorrectionBits].map(
    (bit, index) => bit ^ maskString[index]
  )
}

export const addFormatBits = (formatBits: number[], matrix: Matrix) => {
  formatBits.forEach((bit, index) => {
    const pixel = bit === 0 ? Pixel.WHITE : Pixel.BLACK

    if (index < 5) {
      matrix[FINDER_PATTERN_OUTER_SIZE + 1][index] = pixel
      matrix[matrix.length - 1 - index][FINDER_PATTERN_OUTER_SIZE + 1] = pixel
    }

    if (index === 6) {
      matrix[FINDER_PATTERN_OUTER_SIZE + 1][7] = pixel
      matrix[matrix.length - 7][FINDER_PATTERN_OUTER_SIZE + 1] = pixel
    }

    if (index > 6 && index <= 8) {
      matrix[FINDER_PATTERN_OUTER_SIZE + 1 - index + 7][8] = pixel
      matrix[FINDER_PATTERN_OUTER_SIZE + 1][
        matrix.length - FINDER_PATTERN_OUTER_SIZE - 1 + index - 7
      ] = pixel
    }

    if (index >= 9) {
      matrix[FINDER_PATTERN_OUTER_SIZE - index + 7][8] = pixel
      matrix[FINDER_PATTERN_OUTER_SIZE + 1][
        matrix.length - FINDER_PATTERN_OUTER_SIZE - 1 + index - 7
      ] = pixel
    }
  })
}
