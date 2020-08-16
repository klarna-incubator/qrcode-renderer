import { errorCorrection } from '.'

describe('errorCorrection', () => {
  it('correctly creates error correction codewords for the given data', () => {
    const HELLOWORLD =
      '00100000010110110000101101111000110100010111001011011100010011010100001101000000111011000001000111101100000100011110110000010001'
    const ecCodeword = [196, 35, 39, 119, 235, 215, 231, 226, 93, 23]

    // 1-M has a single ecCodeword
    expect(errorCorrection(1, 'M', HELLOWORLD)).toEqual([ecCodeword])
  })
})
