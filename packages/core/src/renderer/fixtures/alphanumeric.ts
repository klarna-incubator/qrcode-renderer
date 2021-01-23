import { EncodingResult } from '../types'

export const simpleString: EncodingResult = {
  version: 3,
  level: 'M',
  data: Uint8Array.from(
    '00100001100110110001101010100110010101000110001111011101001011100010101001010101010101000111101101110100010011101111010001101110111011100110101100011110101101101000001010001110100011111100110100110001100111010101001010110101000110100010010101111110101000001010001101010010101111001100110101101100000000001110110000010001111011000001000111101100000100011100101110111101001000000111000010111111100011011101100110010111011010000110001101110111100010011100011000000101000011000111000011100011011111000011110111011011011010001011100001110011100101010110111111011010'
      .split('')
      .map(Number)
  ),
}
