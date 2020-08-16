import { Polinomial } from '../Polinomial'

export const createGeneratorPolinomial = (
  numberOfCodewords: number
): Polinomial => {
  if (numberOfCodewords === 1) {
    return Polinomial.fromCoefExponents({ 0: 0, 1: 0 })
  }

  return createGeneratorPolinomial(numberOfCodewords - 1).multiply(
    Polinomial.fromCoefExponents({ 0: numberOfCodewords - 1, 1: 0 })
  )
}
