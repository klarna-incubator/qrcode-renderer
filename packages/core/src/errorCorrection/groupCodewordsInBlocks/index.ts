import { GroupDataCodewordsConfig } from '../ecCodewordsPerVersion'

export const groupCodewordsInBlocks = (
  codewords: number[],
  [headGroup, ...tailGroups]: GroupDataCodewordsConfig[]
): number[][] => {
  if (codewords.length === 0) {
    return []
  }

  const [numberOfDataBlocks, dataCodewordsPerBlock] = headGroup

  return [
    ...Array(numberOfDataBlocks)
      .fill(0)
      .map((_, index) => {
        const start = index * dataCodewordsPerBlock
        const end = start + dataCodewordsPerBlock

        return codewords.slice(start, end)
      }),
    ...groupCodewordsInBlocks(
      codewords.slice(numberOfDataBlocks * dataCodewordsPerBlock),
      tailGroups
    ),
  ]
}
