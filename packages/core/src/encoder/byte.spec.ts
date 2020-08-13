import Mode from './mode'
import { Segment } from './types'
import BitArray from './BitArray'
import encodeByte from './byte'

describe('encoder > byte', () => {
  it('encodes the input and include Mode.BYTE', () => {
    const input = 'http://a.b'
    const result = [
      '01101000', // h
      '01110100', // t
      '01110100', // t
      '01110000', // p
      '00111010', // :
      '00101111', // /
      '00101111', // /
      '01100001', // a
      '00101110', // .
      '01100010', // b
    ]

    const segment: Segment = {
      mode: Mode.BYTE,
      dataSize: 10,
      data: BitArray.fromBinaryString(result.join('')),
    }

    expect(encodeByte(input)).toEqual(segment)
  })

  it('works with emojis (surrogate chars)', () => {
    const input = '💄👀💥'
    const result = [
      '11110000100111111001001010000100', // 💄
      '11110000100111111001000110000000', // 👀
      '11110000100111111001001010100101', // 💥
    ]

    const segment: Segment = {
      mode: Mode.BYTE,
      dataSize: 12,
      data: BitArray.fromBinaryString(result.join('')),
    }

    expect(encodeByte(input)).toEqual(segment)
  })
})
