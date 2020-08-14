import { generateMatrix } from './matrix'
import { simpleString } from './fixtures'
import { FINDER_PATTERN, FINDER_PATTERN_OUTER_SIZE } from './finderPattern'

describe('renderer > matrix > generateMatrix', () => {
  const simpleStringMatrix = generateMatrix(simpleString)

  it('adds top left finder pattern', () => {
    const finderPatternArea = simpleStringMatrix
      .slice(0, FINDER_PATTERN_OUTER_SIZE)
      .map(row => row.slice(0, FINDER_PATTERN_OUTER_SIZE))

    expect(finderPatternArea).toEqual(FINDER_PATTERN)
  })
})
