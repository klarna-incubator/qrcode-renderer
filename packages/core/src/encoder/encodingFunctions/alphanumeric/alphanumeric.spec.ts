import Mode from '../../mode'
import { Segment } from '../segment'
import { encode, canEncode } from '.'

describe('encoder > alphanumeric', () => {
  it('encodes the input and include Mode.ALPHANUMERIC', () => {
    const input = 'AC-42'
    const result = [
      '00111001110', // AC
      '11100111001', // -4
      '000010', // 2 (odd groups have 6 bits)
    ]

    const segment: Segment = {
      mode: Mode.ALPHANUMERIC,
      dataSize: input.length,
      data: result.join(''),
    }

    expect(encode(input)).toEqual(segment)
  })

  describe('#canEncode', () => {
    it('is true for alphanumeric strings', () => {
      expect(canEncode('POTATOS ARE TASTY')).toBe(true)
      expect(canEncode('3132131')).toBe(true)
      expect(canEncode('$POTATOS ARE TAST/Y.IES/')).toBe(true)
    })

    it('is false for non-alphanumeric strings', () => {
      expect(canEncode('MYEMAIL@COLDMAIL.COM')).toBe(false)
      expect(canEncode('💄')).toBe(false)
    })

    it('is false for lowercase characters', () => {
      expect(canEncode('this is not alphanumeric')).toBe(false)
    })
  })
})
