import Mode from './mode'
import { Segment } from './types'
import BitArray from './BitArray'
import encodeNumeric, { canEncode } from './numeric'

describe('encoder > numeric', () => {
  it('encodes the input and include Mode.NUMERIC', () => {
    const input = '01234567'
    const result = [
      '0000001100', // 012
      '0101011001', // 345
      '1000011', // 67 (last group can have from 7 to 10 bits)
    ]

    const segment: Segment = {
      mode: Mode.NUMERIC,
      dataSize: input.length,
      data: BitArray.fromBinaryString(result.join('')),
    }

    expect(encodeNumeric(input)).toEqual(segment)
  })

  describe('#canEncode', () => {
    it('is true for positive integers', () => {
      expect(canEncode('1234')).toBe(true)
      expect(canEncode('0')).toBe(true)
    })

    it('is false for negative integers', () => {
      expect(canEncode('-2')).toBe(false)
      expect(canEncode('-0')).toBe(false)
      expect(canEncode('-321231')).toBe(false)
    })

    it('is false for floating point numbers', () => {
      expect(canEncode('0.12')).toBe(false)
      expect(canEncode('3.14')).toBe(false)
    })

    it('is false for non-number strings', () => {
      expect(canEncode('potatos are tasty')).toBe(false)
      expect(canEncode('🥔')).toBe(false)
      expect(canEncode('    212')).toBe(false)
    })
  })
})
