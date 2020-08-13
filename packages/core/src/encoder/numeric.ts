import Mode from './mode'
import { Segment } from './types'
import BitArray from './BitArray'

/**
 * Encoder for QR Code symbols (Version 1-H symbol)
 */
export default (input: string): Segment => {
  const numberOfGroups = Math.ceil(input.length / 3)
  const groups = Array(numberOfGroups)
    .fill(null)
    .map((_, i) => input.substr(i * 3, 3))

  const bitArray = new BitArray()
  bitArray.push(Number(Mode.NUMERIC).toString(2), 4) // mode
  bitArray.push(Number(input.length).toString(2), 10) // input length

  // data groups
  groups.forEach((group, i) => {
    const bitFormat = Number(group).toString(2)
    const bitLength = i !== groups.length - 1 ? 10 : bitFormat.length

    bitArray.push(bitFormat, bitLength)
  })

  return {
    mode: Mode.NUMERIC,
    dataSize: input.length,
    payload: bitArray.toUintArray(),
  }
}
