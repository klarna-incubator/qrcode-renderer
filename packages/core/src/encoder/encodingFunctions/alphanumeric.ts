import Mode from '../mode'
import { Segment } from '../types'
import BitArray from '../BitArray'

const ENCODING_TABLE = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:'

export const canEncode = (input: string) =>
  Array.from(input).every(char => ENCODING_TABLE.includes(char))

/**
 * Encoder for QR Code symbols (Version 1-H symbol)
 */
export const encode = (input: string): Segment => {
  const bitArray = new BitArray()
  const encodedInput = input.split('').map(char => ENCODING_TABLE.indexOf(char))
  const numberOfGroups = Math.ceil(encodedInput.length / 2)

  Array(numberOfGroups)
    .fill(null)
    .map((_, i) =>
      encodedInput.slice(
        i * 2 /* groups of 2 */,
        i * 2 + 2 /* last index is index + 2 */
      )
    )
    .forEach(([x, y]) => {
      y != null
        ? bitArray.push(Number(x * 45 + y).toString(2), 11)
        : bitArray.push(Number(x).toString(2), 6)
    })

  return {
    mode: Mode.ALPHANUMERIC,
    dataSize: input.length,
    data: bitArray.toString(),
  }
}
