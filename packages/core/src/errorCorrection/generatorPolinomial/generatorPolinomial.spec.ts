import { createGeneratorPolinomial } from '.'

describe('errorCorrection > createGeneratorPolinomial', () => {
  it('creates the correct polinomial for two error correction codewords', () => {
    // α0x2 + α25x1 + α1x0
    expect(createGeneratorPolinomial(2).toExponents()).toEqual({
      0: 1,
      1: 25,
      2: 0,
    })
  })

  it('creates the correct polinomial for three error correction codewords', () => {
    // α0x3 + α198x2 + α199x1 + α3x0
    expect(createGeneratorPolinomial(3).toExponents()).toEqual({
      0: 3,
      1: 199,
      2: 198,
      3: 0,
    })
  })

  it('creates the correct polinomial for seven error correction codewords', () => {
    // α0x7 + α87x6 + α229x5 + α146x4 + α149x3 + α238x2 + α102x + α21
    expect(createGeneratorPolinomial(7).toExponents()).toEqual({
      0: 21,
      1: 102,
      2: 238,
      3: 149,
      4: 146,
      5: 229,
      6: 87,
      7: 0,
    })
  })

  it('creates the correct polinomial for ten error correction codewords', () => {
    // α0x10 + α251x9 + α67x8 + α46x7 + α61x6 + α118x5 + α70x4 + α64x3 + α94x2 + α32x + α45
    expect(createGeneratorPolinomial(10).toExponents()).toEqual({
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
    })
  })
})
