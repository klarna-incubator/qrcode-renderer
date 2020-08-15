import { generatorPolinomial } from './generatorPolinomial'

describe('errorCorrection > generatorPolinomial', () => {
  it('creates the correct polinomial for two error correction codewords', () => {
    expect(generatorPolinomial(2).toCoef()).toEqual([1, 3, 2])
  })
})
