import { logAlpha, antilogAlpha } from './alpha'

describe('errorCorrection > alpha', () => {
  describe('#logAlpha', () => {
    it('is the inverse of antilogAlpha for GF(256) numbers', () => {
      for (let i = 0; i < 255; ++i) {
        expect(logAlpha(antilogAlpha(i))).toBe(i)
      }
      // 255 seems to be an exception?
      expect(logAlpha(antilogAlpha(255))).toBe(0)
    })
  })

  describe('#antilogAlpha', () => {
    it('is the inverse of logAlpha for GF(256) numbers', () => {
      for (let i = 0; i < 256; ++i) {
        expect(antilogAlpha(logAlpha(i))).toBe(i)
      }
    })
  })
})
