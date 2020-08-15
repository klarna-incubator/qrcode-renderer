import { Polinomial } from './Polinomial'

export const generatorPolinomial = (_numberOfCodewords: number) => {
  // TODO: make this recurse based on numberOfCodewords
  return Polinomial.fromCoef([1, 1]).multiply(Polinomial.fromCoef([1, 2]))
}
