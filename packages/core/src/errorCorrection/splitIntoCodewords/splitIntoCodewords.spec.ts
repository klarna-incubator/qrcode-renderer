import BitArray from '../../encoder/BitArray'
import { splitIntoCodewords } from '.'

describe('errorCorrection > splitIntoCodewords', () => {
  it('splits a bitarray into groups of 8', () => {
    const input = BitArray.fromString('101010010100101001001011').toUintArray()

    expect(splitIntoCodewords(input)).toEqual(
      ['10101001', '01001010', '01001011'].map(str => parseInt(str, 2))
    )
  })
})
