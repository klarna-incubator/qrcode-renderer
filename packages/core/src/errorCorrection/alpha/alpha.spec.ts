import { logAlpha, antilogAlpha } from '.'

describe('errorCorrection > alpha', () => {
  describe('#logAlpha', () => {
    it('is the inverse of antilogAlpha for GF(256) numbers', () => {
      for (let i = 0; i < 255; ++i) {
        expect(logAlpha(antilogAlpha(i))).toBe(i)
      }
      // 255 is not part of the alpha exponentials set
      expect(logAlpha(antilogAlpha(255))).toBe(0)
    })

    it('is an isomorphism over the set that has all possible exponents of alpha bar zero', () => {
      const alphaExponents = new Set<number>()

      // logAlpha(0) is not covered
      for (let i = 1; i < 256; ++i) {
        alphaExponents.add(logAlpha(i))
      }

      // Doesn't include 255
      expect(alphaExponents.size).toBe(255)
      expect(
        Array.from(alphaExponents).every(number => number < 256 && number >= 0)
      ).toBe(true)
    })
  })

  describe('#antilogAlpha', () => {
    it('is the inverse of logAlpha for GF(256) numbers', () => {
      for (let i = 1; i < 256; ++i) {
        expect(antilogAlpha(logAlpha(i))).toBe(i)
      }
    })

    it('is equals to 2^n for n < 8', () => {
      for (let i = 0; i < 8; ++i) {
        expect(antilogAlpha(i)).toBe(2 ** i)
      }
    })

    it('is almost an isomorphism over GF(256)', () => {
      const gfNumbers = new Set<number>()

      for (let i = 0; i < 255; ++i) {
        gfNumbers.add(antilogAlpha(i))
      }

      // Would be an isomorphism if size were 256, almost there!
      // It so happens both 0 and 255 return 1, and this is expected.
      expect(gfNumbers.size).toBe(255)
      expect(
        Array.from(gfNumbers).every(number => number < 256 && number >= 0)
      ).toBe(true)
    })
  })
})
