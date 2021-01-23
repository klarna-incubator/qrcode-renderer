import { logAlpha, antilogAlpha } from '.'

/**
 * You'll notice that there are exceptions on some of the tests below.
 * Like, iterating up until 254 instead of 255 for some stuff.
 * This is because we're transforming between two sets, let's call them:
 *
 * 1) The GF(256) set
 *  This set is the integer set contining every number between 0 and 255 inclusive.
 *  We're going to use these as the coefficients in our polinomials.
 *  The 0 value is kinda not used because if a coefficient is zero, it means it doesn't exist.
 *  That means we can look at this set as being (0,255] in fact.
 *
 * 2) The set containing alpha exponents
 *  This set contains all integers between 1 and 254 inclusive.
 *  It is defined as being the exponents in the alpha base for numbers in the GF(256) set except 0.
 *  We'll use these when we want to multiply coefficients, since the product of two exponentials
 *  in the same base results in the sum of its exponents instead.
 */

describe('errorCorrection > alpha', () => {
  describe('#logAlpha', () => {
    it('is the inverse of antilogAlpha for GF(256) numbers', () => {
      // Iterate [0, 254], since antilogAlpha(255) is 1
      for (let i = 0; i < 255; ++i) {
        expect(logAlpha(antilogAlpha(i))).toBe(i)
      }
    })

    it('is an isomorphism over the set that has all possible exponents of alpha bar zero', () => {
      const alphaExponents = new Set<number>()

      // logAlpha(0) is not covered
      for (let i = 1; i < 256; ++i) {
        alphaExponents.add(logAlpha(i))
      }

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

      // antilogAlpha(255) not covered
      for (let i = 0; i < 255; ++i) {
        gfNumbers.add(antilogAlpha(i))
      }

      expect(gfNumbers.size).toBe(255)
      expect(
        Array.from(gfNumbers).every(number => number < 256 && number >= 0)
      ).toBe(true)
    })
  })
})
