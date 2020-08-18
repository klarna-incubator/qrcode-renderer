import { groupCodewordsInBlocks } from '.'

const codewords = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

describe('errorCorrection > groupCodewordsInBlocks', () => {
  it('groups the codewords according to the block description', () => {
    expect(
      groupCodewordsInBlocks(codewords, [
        // group1: 2 blocks with 3 codewords each
        [2, 3],
        // group2: 1 block with 4 codewords
        [1, 4],
      ])
    ).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9, 10],
    ])
  })
})
