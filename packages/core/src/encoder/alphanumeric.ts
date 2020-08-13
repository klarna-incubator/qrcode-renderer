import Mode from './mode'
import { Segment } from './types'
import BitArray from './BitArray'

const ENCODING_TABLE = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:'

export default (input: string): Segment => {
  const bitArray = new BitArray()
  bitArray.push(Number(Mode.ALPHANUMERIC).toString(2), 4) // mode
  bitArray.push(Number(input.length).toString(2), 9) // input length

  // data groups
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
    payload: bitArray.toUintArray(),
  }
}
