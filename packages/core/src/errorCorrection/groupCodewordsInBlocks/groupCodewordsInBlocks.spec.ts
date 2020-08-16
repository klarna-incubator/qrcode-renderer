import { groupCodewordsInBlocks } from '.'

const codewords = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

describe('errorCorrection > groupCodewordsInBlocks', () => {
  it('groups the codewords according to the block description', () => {
    expect(
      groupCodewordsInBlocks(codewords, {
        group1: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 3 },
        group2: { numberOfDataBlocks: 1, dataCodewordsPerBlock: 4 },
      })
    ).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9, 10],
    ])
  })
})
