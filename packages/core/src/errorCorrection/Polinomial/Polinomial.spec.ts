import { Polinomial } from '.'

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

  it('correctly gets the rest of the division of two polynomials', () => {
    // 32x25 + 91x24 + 11x23 + 120x22 + 209x21 + 114x10 + 220x9 + 77x8 + 67x7 + 64x6 + 236x5 + 17x4 + 236x3 + 17x2 + 236x1 + 17
    // prettier-ignore
    const HELLOWORLD = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 236, 17, 236, 
      17, 236, 64, 67, 77, 220, 114, 209, 120, 11, 91, 32
    ]

    // α0x10 + α251x9 + α67x8 + α46x7 + α61x6 + α118x5 + α70x4 + α64x3 + α94x2 + α32x1 + α45
    const exampleGeneratorPolinomial = {
      0: 45,
      1: 32,
      2: 94,
      3: 64,
      4: 70,
      5: 118,
      6: 61,
      7: 46,
      8: 67,
      9: 251,
      10: 0,
    }

    // 196x9 + 35x8 + 39x7 + 119x6 + 235x5 + 215x4 + 231x3 + 226x2 + 93x1 + 23
    const expectedResult = [23, 93, 226, 231, 215, 235, 119, 39, 35, 196]

    const leftHandSide = Polinomial.fromCoef(HELLOWORLD)
    const rightHandSide = Polinomial.fromCoefExponents(
      exampleGeneratorPolinomial
    )
    expect(leftHandSide.modulo(rightHandSide).toCoef()).toEqual(expectedResult)
  })
})
