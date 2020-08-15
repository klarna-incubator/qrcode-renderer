import { Polinomial } from './Polinomial'

describe('Polinomial', () => {
  it('sums two polinomials', () => {
    const leftHandSide = Polinomial.fromCoef([1, 1, 2, 3])
    const rightHandSide = Polinomial.fromCoef([1, 0, 1, 17])

    expect(leftHandSide.sum(rightHandSide).toCoef()).toEqual([2, 1, 3, 20])
  })

  it('multiplies two polinomials', () => {
    const polinomial1 = Polinomial.fromCoef([1, 1])
    const polinomial2 = Polinomial.fromCoef([1, 2])
    const expectedResult = [1, 3, 2]

    expect(polinomial1.multiply(polinomial2).toCoef()).toEqual(expectedResult)
  })

  it('multiplies polinomials with more than two elements', () => {
    /**
     *            3x + 2
     * 3x3 + 2x2 + x + 0
     * -----------------
     * + 9x4 + 6x3
     * + 6x3 + 4x2
     * + 3x2 + 2x
     * -----------------
     * 9x4 + 12x3 + 7x2 + 2x + 0
     */
    const leftHandSide = Polinomial.fromCoef([0, 1, 2, 3])
    const RightHandSide = Polinomial.fromCoef([2, 3])
    const expectedCoefficients = [0, 2, 7, 12, 9]

    // COMBAK: this is failing with the last coefficient being 5 instead of 9
    // This happens because 3 = α^25 but α^50 = 5, which is bullshit in my head
    // Check if you're doing something wrong there.
    // We still need to add the modulo operations whenever summing the coefficients,
    // but this shouldn't affect these results as 50 is way too far away from 255 to hit that wall.
    expect(leftHandSide.multiply(RightHandSide).toCoef()).toEqual(
      expectedCoefficients
    )
  })

  test('poly multiplication', () => {
    const polinomial1 = [1, 1]
    const polinomial2 = [1, 2]
    const expectedResult = [1, 3, 2]
    const result: number[] = Array(
      polinomial1.length - 1 + (polinomial2.length - 1) + 1
    ).fill(0)

    for (const p2i in polinomial2) {
      for (const p1i in polinomial1) {
        const i = Number(p2i) + Number(p1i)
        result[i] += polinomial2[p2i] * polinomial1[p1i]
      }
    }

    expect(result).toEqual(expectedResult)
  })
})
