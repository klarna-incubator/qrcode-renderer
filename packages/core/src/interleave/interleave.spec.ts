import encoder from '../encoder'
import { errorCorrection } from '../errorCorrection'
import { interleave } from '.'

const dataToString = (data: Uint8Array | number[]) =>
  Array.from(data)
    .map(num => num.toString(2))
    .join('')

const dataToInt = (data: Uint8Array) =>
  Array(data.length / 8)
    .fill(0)
    .map((_, index) => {
      const word = data.slice(index * 8, (index + 1) * 8).join('')

      return parseInt(word, 2)
    })

describe('interleave', () => {
  it('mixes the codewords by getting a word for each group in sequence', () => {
    const data = [
      {
        codewords: [1, 2, 3],
        errorCorrection: [],
      },
      {
        codewords: [4, 5, 6],
        errorCorrection: [],
      },
      {
        codewords: [7, 8, 9],
        errorCorrection: [],
      },
    ]

    // We transform the data before comparing for better readability
    expect(dataToInt(interleave(data))).toEqual([1, 4, 7, 2, 5, 8, 3, 6, 9])
  })

  it('appends leftovers to the end', () => {
    const data = [
      {
        codewords: [1, 2, 3],
        errorCorrection: [],
      },
      {
        codewords: [4, 5, 6, 7],
        errorCorrection: [],
      },
      {
        codewords: [8, 9, 10, 11],
        errorCorrection: [],
      },
    ]

    expect(dataToInt(interleave(data)))
      // We transform the data before comparing for better readability
      .toEqual([1, 4, 8, 2, 5, 9, 3, 6, 10, 7, 11])
  })

  it('mixes the errorCorrection words by getting a word for each group in sequence', () => {
    const data = [
      {
        codewords: [],
        errorCorrection: [1, 2, 3],
      },
      {
        codewords: [],
        errorCorrection: [4, 5, 6, 7],
      },
      {
        codewords: [],
        errorCorrection: [8, 9, 10, 11],
      },
    ]

    expect(dataToInt(interleave(data)))
      // We transform the data before comparing for better readability
      .toEqual([1, 4, 8, 2, 5, 9, 3, 6, 10, 7, 11])
  })

  it('properly interleaves real world data', () => {
    const data = 'https://github.com/klarna-incubator/qrcode-renderer'.toUpperCase()

    const encoded = encoder(data)

    expect(dataToString(encoded.data)).toEqual(
      '0010000110011011000110101010011001010100011000111101110100101110001010100101010101010100011110110111010001001110111101000110111011101110011010110001111010110110100000101000111010001111110011010011000110011101010100101011010100011010001001010111111010100000101000110101001010111100110011010110110000000000111011000001000111101100000100011110110000010001'
    )

    const groups = errorCorrection(encoded.version, encoded.level, encoded.data)

    expect(dataToString(interleave(groups))).toEqual(
      '00100001100110110001101010100110010101000110001111011101001011100010101001010101010101000111101101110100010011101111010001101110111011100110101100011110101101101000001010001110100011111100110100110001100111010101001010110101000110100010010101111110101000001010001101010010101111001100110101101100000000001110110000010001111011000001000111101100000100011100101110111101001000000111000010111111100011011101100110010111011010000110001101110111100010011100011000000101000011000111000011100011011111000011110111011011011010001011100001110011100101010110111111011010'
    )
  })
})
