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
        data: Uint8Array.from(encodedInput.split('').map(Number)),
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
        data: Uint8Array.from(encodedInput.split('').map(Number)),
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
        data: Uint8Array.from(encodedInput.split('').map(Number)),
      }

      expect(encode(input)).toEqual(expected)
    })
  })
})
