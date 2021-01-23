import { splitIntoCodewords } from '.'

describe('errorCorrection > splitIntoCodewords', () => {
  it('splits a bitarray into groups of 8', () => {
    expect(splitIntoCodewords('101010010100101001001011')).toEqual([
      '10101001',
      '01001010',
      '01001011',
    ])
  })
})
