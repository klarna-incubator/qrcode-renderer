import { createVersionBits } from './versionBits'

describe('renderer > dataPatterns > versionBits', () => {
  it('does not create any bits for versions lesser than 7', () => {
    expect(createVersionBits(0)).toEqual([])
    expect(createVersionBits(3)).toEqual([])
    expect(createVersionBits(5)).toEqual([])
    expect(createVersionBits(6)).toEqual([])
  })

  it('creates the correct bits for version 7', () => {
    expect(createVersionBits(7).join('')).toEqual('000111110010010100')
  })

  it('creates the correct bits for version 25', () => {
    expect(createVersionBits(25).join('')).toEqual('011001000111100001')
  })

  it('creates the correct bits for version 7', () => {
    expect(createVersionBits(40).join('')).toEqual('101000110001101001')
  })
})
