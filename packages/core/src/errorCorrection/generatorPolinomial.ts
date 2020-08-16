import { Polinomial } from './Polinomial'

export const generatorPolinomial = (numberOfCodewords: number): Polinomial => {
  if (numberOfCodewords === 1) {
    return Polinomial.fromCoefExponents({ 0: 0, 1: 0 })
  }

  return generatorPolinomial(numberOfCodewords - 1).multiply(
    Polinomial.fromCoefExponents({ 0: numberOfCodewords - 1, 1: 0 })
  )
}
