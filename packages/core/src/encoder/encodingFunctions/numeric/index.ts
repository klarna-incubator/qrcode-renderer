import Mode from '../../mode'
import { Segment } from '../segment'
import BitArray from '../../BitArray'

export const canEncode = (input: string) => /^[0-9]+$/.test(input)

const groupLength = (group: string) => {
  switch (group.length) {
    case 3:
      return 10
    case 2:
      return 7
    default:
      return 4
  }
}

export const encode = (input: string): Segment => {
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
  for (const group of groups) {
    const bitFormat = Number(group).toString(2)
    bitArray.push(bitFormat, groupLength(group))
  }

  return {
    mode: Mode.NUMERIC,
    dataSize: input.length,
    data: bitArray.toString(),
  }
}
