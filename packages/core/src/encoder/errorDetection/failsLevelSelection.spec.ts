import Mode from '../mode'
import { selectErrorDetection } from '.'

describe('encoder > errorDetection', () => {
  it('fails when providing an invalid version', () => {
    expect(() => {
      selectErrorDetection(Mode.NUMERIC, 145, 'L', 32)
    }).toThrow()
  })

  it('fails when the data size cannot be represented with a standard QRCode', () => {
    expect(() => {
      selectErrorDetection(Mode.NUMERIC, undefined, undefined, 10_000)
    }).toThrow()
  })
})
