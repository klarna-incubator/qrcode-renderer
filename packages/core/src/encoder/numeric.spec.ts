import Mode from './mode'
import { Segment } from './types'
import BitArray from './BitArray'
import encodeNumeric from './numeric'

describe('encoder > numeric', () => {
  it('encodes the input and include Mode.NUMERIC', () => {
    const input = '01234567'
    const result = [
      '0000001100', // 012
      '0101011001', // 345
      '1000011', // 67 (last group can have from 7 to 10 bits)
    ]

    const segment: Segment = {
      mode: Mode.NUMERIC,
      dataSize: input.length,
      data: BitArray.fromBinaryString(result.join('')),
    }

    expect(encodeNumeric(input)).toEqual(segment)
  })
})
