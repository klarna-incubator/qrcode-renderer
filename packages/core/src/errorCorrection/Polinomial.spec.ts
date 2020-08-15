import { Polinomial } from './Polinomial'

describe('Polinomial', () => {
  it('sums two polinomials', () => {
    const leftHandSide = Polinomial.fromCoef([1, 1, 2, 3])
    const rightHandSide = Polinomial.fromCoef([1, 0, 1, -1])

    expect(leftHandSide.sum(rightHandSide).toCoef()).toEqual([2, 1, 3, 2])
  })

  it('multiplies two polinomials', () => {
    const polinomial1 = Polinomial.fromCoef([1, 1])
    const polinomial2 = Polinomial.fromCoef([1, 2])
    const expectedResult = [1, 3, 2]

    expect(polinomial1.multiply(polinomial2).toCoef()).toEqual(expectedResult)
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
