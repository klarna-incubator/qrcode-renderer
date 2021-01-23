import { createEndPadding } from '.'

describe('encoder > padding > createEndPadding', () => {
  it('properly creates the padding', () => {
    expect(createEndPadding(3, 'M', 294)).toBe(
      '0000000000111011000001000111101100000100011110110000010001'
    )
  })
})
