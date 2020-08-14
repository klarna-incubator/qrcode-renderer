import Mode from './mode'
import { Segment } from './types'
import BitArray from './BitArray'

export const canEncode = (input: string) => /^[0-9]+$/.test(input)

/**
 * Encoder for QR Code symbols (Version 1-H symbol)
 */
export default (input: string): Segment => {
  const numberOfGroups = Math.ceil(input.length / 3)
  const groups = Array(numberOfGroups)
    .fill(null)
    .map((_, i) =>
      input.slice(
        i * 3 /* groups of 3 */,
        i * 3 + 3 /* last index is index + 3 */
      )
    )

  const bitArray = new BitArray()
  groups.forEach((group, i) => {
    const bitFormat = Number(group).toString(2)
    const bitLength = i !== groups.length - 1 ? 10 : bitFormat.length

    bitArray.push(bitFormat, bitLength)
  })

  return {
    mode: Mode.NUMERIC,
    dataSize: input.length,
    data: bitArray.toUintArray(),
  }
}
