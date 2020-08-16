import { Polinomial } from './Polinomial'

describe('Polinomial', () => {
  it('multiplies two polinomials', () => {
    const polinomial1 = Polinomial.fromCoef([1, 1])
    const polinomial2 = Polinomial.fromCoef([1, 2])
    const expectedResult = [1, 3, 2]

    expect(polinomial1.multiply(polinomial2).toCoef()).toEqual(expectedResult)
  })

  it('correctly multiplies the one product that matters', () => {
    const leftHandSide = Polinomial.fromCoefExponents({ 0: 0, 1: 0 })
    const rightHandSide = Polinomial.fromCoefExponents({ 0: 1, 1: 0 })

    expect(leftHandSide.multiply(rightHandSide).toExponents()).toEqual({
      0: 1,
      1: 25,
      2: 0,
    })
  })
})
