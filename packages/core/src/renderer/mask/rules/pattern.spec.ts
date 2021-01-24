import { PixelValue } from '../../pixel'
import { penalizePatternInRow } from './pattern'

describe('renderer > mask > rules > pattern > penalizeSquaresInColumn', () => {
  const pattern: PixelValue[] = [0, 1, 0, 1, 1, 1, 0, 1, 0]

  it('assigns no penalty to a row that does not present the pattern', () => {
    expect(penalizePatternInRow([0, 1, 0, 1, 0, 0, 0, 0, 0])).toBe(0)
  })

  it('assigns no penalty to a row that has the pattern but less than 3 whites around it', () => {
    expect(penalizePatternInRow([1, 0, 1, ...pattern, 0, 0, 1])).toBe(0)
  })

  it('assigns 40 points to a row that contains the pattern', () => {
    expect(penalizePatternInRow([1, 0, ...pattern, 0, 0, 0, 0, 1])).toBe(40)
  })

  it('assigns 40 points for each time the pattern appears', () => {
    expect(
      penalizePatternInRow([1, ...pattern, 0, 0, 0, 0, ...pattern, 1])
    ).toBe(80)
  })

  it('assigns 40 points for each time the pattern overlaps', () => {
    expect(penalizePatternInRow([0, ...pattern, 0, 0, 0, 0])).toBe(80)
  })

  it('assings 40 points to a row that contains the pattern, but has the zeroes outside of the visible area', () => {
    expect(penalizePatternInRow([...pattern, 1, 1, 1])).toBe(40)
    expect(penalizePatternInRow([0, ...pattern, 1, 1, 1])).toBe(40)
    expect(penalizePatternInRow([0, 0, ...pattern, 1, 1, 1])).toBe(40)
    expect(penalizePatternInRow([0, 0, 0, ...pattern, 1, 1, 1])).toBe(40)
  })
})
