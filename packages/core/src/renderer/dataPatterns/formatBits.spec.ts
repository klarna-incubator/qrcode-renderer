import { createFormatBits } from './formatBits'

describe('renderer > dataPatterns >  formatBits', () => {
  it('creates the correct bits for a level L mask 4 pattern', () => {
    expect(createFormatBits('L', 4).join('')).toEqual('110011000101111')
  })

  it('creates the correct bits for a level H mask 7 pattern', () => {
    expect(createFormatBits('H', 7).join('')).toEqual('000100000111011')
  })

  it('creates the correct bits for a level M mask 0 pattern', () => {
    expect(createFormatBits('M', 0).join('')).toEqual('101010000010010')
  })
})
