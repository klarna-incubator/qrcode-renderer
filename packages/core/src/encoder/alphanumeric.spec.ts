import Mode from './mode'
import { Segment } from './types'
import BitArray from './BitArray'
import encodeAlphanumeric from './alphanumeric'

describe('encoder > alphanumeric', () => {
  it('encodes the input and include Mode.ALPHANUMERIC', () => {
    const input = 'AC-42'
    const result = [
      '0010', // mode alphanumeric
      '000000101', // input.length in 9 bits
      '00111001110', // AC
      '11100111001', // -4
      '000010', // 2 (odd groups have 6 bits)
    ]

    const segment: Segment = {
      mode: Mode.ALPHANUMERIC,
      dataSize: input.length,
      payload: BitArray.fromBinaryString(result.join('')),
    }

    expect(encodeAlphanumeric(input)).toEqual(segment)
  })
})
