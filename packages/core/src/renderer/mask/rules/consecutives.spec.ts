import { penalizeConsecutivesInRow } from './consecutives'

describe('renderer > mask > rules > consecutives > penalizeConsecutivesInRow', () => {
  it('assigns 3 points for each 5 consecutives items in a row', () => {
    expect(
      penalizeConsecutivesInRow([0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1])
    ).toBe(3)
  })

  it('assigns 1 more point for each extra consecutive', () => {
    expect(
      penalizeConsecutivesInRow([0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1])
    ).toBe(3 + 1 + 3 + 2)
  })

  it('counts only consecutives', () => {
    expect(
      penalizeConsecutivesInRow([0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0])
    ).toBe(0)
  })
})
