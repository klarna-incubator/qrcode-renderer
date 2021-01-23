import BitArray from './BitArray'
import encode from './index'
import Mode from './mode'

describe('encoder', () => {
  describe('with a number input', () => {
    it('returns the encoded data, level and version', () => {
      const input = 12345
      const encodedInput =
        '000100000001010001111011010110100000000011101100000100011110110000010001'

      const expected = {
        version: 1,
        level: 'H',
        mode: Mode.NUMERIC,
        data: BitArray.fromString(encodedInput).toUintArray(),
      }

      expect(encode(input)).toEqual(expected)
    })
  })

  describe('with a alphanumeric input', () => {
    it('returns the encoded data, level and version', () => {
      const input = '$HIGH$'
      const encodedInput =
        '001000000011011010010010011001110100110010001000000000001110110000010001'

      const expected = {
        version: 1,
        level: 'H',
        mode: Mode.ALPHANUMERIC,
        data: BitArray.fromString(encodedInput).toUintArray(),
      }

      expect(encode(input)).toEqual(expected)
    })

    it('encodes correctly a real life link', () => {
      const input = 'https://github.com/klarna-incubator/qrcode-renderer'.toUpperCase()
      const encodedInput =
        '0010000110011011000110101010011001010100011000111101110100101110001010100101010101010100011110110111010001001110111101000110111011101110011010110001111010110110100000101000111010001111110011010011000110011101010100101011010100011010001001010111111010100000101000110101001010111100110011010110110000000000111011000001000111101100000100011110110000010001'

      const expected = {
        version: 3,
        level: 'M',
        mode: Mode.ALPHANUMERIC,
        data: BitArray.fromString(encodedInput).toUintArray(),
      }

      expect(encode(input)).toEqual(expected)
    })
  })

  describe('with a byte input', () => {
    it('returns the encoded data, level and version', () => {
      const input = 'qrcode-renderer'
      const encodedInput =
        '01000000111101110001011100100110001101101111011001000110010100101101011100100110010101101110011001000110010101110010011001010111001000001110110000010001'

      const expected = {
        version: 1,
        level: 'L',
        mode: Mode.BYTE,
        data: BitArray.fromString(encodedInput).toUintArray(),
      }

      expect(encode(input)).toEqual(expected)
    })
  })
})
