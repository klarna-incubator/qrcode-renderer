import { GroupDataCodewordsConfig } from '../ecCodewordsPerVersion'

export const groupCodewordsInBlocks = (
  codewords: number[],
  {
    group1,
    group2,
  }: { group1: GroupDataCodewordsConfig; group2: GroupDataCodewordsConfig }
) => [
  ...Array(group1.numberOfDataBlocks)
    .fill(0)
    .map((_, index) => {
      const start = index * group1.dataCodewordsPerBlock
      const end = start + group1.dataCodewordsPerBlock

      return codewords.slice(start, end)
    }),
  ...Array(group2.numberOfDataBlocks)
    .fill(0)
    .map((_, index) => {
      const group1Length =
        group1.numberOfDataBlocks * group1.dataCodewordsPerBlock
      const start = group1Length + index * group2.dataCodewordsPerBlock
      const end = start + group2.dataCodewordsPerBlock

      return codewords.slice(start, end)
    }),
]
