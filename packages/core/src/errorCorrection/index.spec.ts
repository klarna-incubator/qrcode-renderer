import { errorCorrection } from '.'

describe('errorCorrection', () => {
  it('correctly creates error correction codewords for a HELLOWORLD string', () => {
    const HELLOWORLD = Uint8Array.from(
      '00100000010110110000101101111000110100010111001011011100010011010100001101000000111011000001000111101100000100011110110000010001'
        .split('')
        .map(Number)
    )

    // 1-M has a single group
    const [{ errorCorrection: ecCodewords, codewords }] = errorCorrection(
      1,
      'M',
      HELLOWORLD
    )

    // prettier-ignore
    expect((ecCodewords)).toEqual([196, 35, 39, 119, 235, 215, 231, 226, 93, 23])
    // prettier-ignore
    expect((codewords)).toEqual([
      32, 91, 11, 120, 209,
      114, 220, 77, 67, 64,
      236, 17, 236, 17, 236, 17,
    ])
  })
})
