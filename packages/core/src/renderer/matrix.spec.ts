import { generateMatrix } from './matrix'
import { simpleString } from './fixtures'
import { FINDER_PATTERN, FINDER_PATTERN_OUTER_SIZE } from './finderPattern'

describe('renderer > matrix > generateMatrix', () => {
  const simpleStringMatrix = generateMatrix(simpleString)

  it('adds top left finder pattern', () => {
    const finderPatternArea = simpleStringMatrix
      .slice(0, FINDER_PATTERN_OUTER_SIZE)
      .map(row => row.slice(0, FINDER_PATTERN_OUTER_SIZE))

    expect(finderPatternArea).toEqual(FINDER_PATTERN)
  })

  it('adds the timing patterns', () => {
    const column6 = simpleStringMatrix[6].join('')

    expect(column6).toEqual('111111101010101111111')

    const row6 = simpleStringMatrix.map(column => column[6]).join('')

    expect(row6).toEqual('111111101010101111111')
  })

  it('renders correct QR code', () => {
    const toString = (item: 1 | 0 | null) =>
      item === 0 ? '\u2591' : item === 1 ? '\u2593' : '\u00B7'

    const result = simpleStringMatrix
      .map(row => row.map(toString).join(' '))
      .join('\n')

    expect(result).toMatchInlineSnapshot(`
      "▓ ▓ ▓ ▓ ▓ ▓ ▓ ░ · · · · · ░ ▓ ▓ ▓ ▓ ▓ ▓ ▓
      ▓ ░ ░ ░ ░ ░ ▓ ░ · · · · · ░ ▓ ░ ░ ░ ░ ░ ▓
      ▓ ░ ▓ ▓ ▓ ░ ▓ ░ · · · · · ░ ▓ ░ ▓ ▓ ▓ ░ ▓
      ▓ ░ ▓ ▓ ▓ ░ ▓ ░ · · · · · ░ ▓ ░ ▓ ▓ ▓ ░ ▓
      ▓ ░ ▓ ▓ ▓ ░ ▓ ░ · · · · · ░ ▓ ░ ▓ ▓ ▓ ░ ▓
      ▓ ░ ░ ░ ░ ░ ▓ ░ · · · · · ░ ▓ ░ ░ ░ ░ ░ ▓
      ▓ ▓ ▓ ▓ ▓ ▓ ▓ ░ ▓ ░ ▓ ░ ▓ ░ ▓ ▓ ▓ ▓ ▓ ▓ ▓
      ░ ░ ░ ░ ░ ░ ░ ░ · · · · · ░ ░ ░ ░ ░ ░ ░ ░
      · · · · · · ▓ · · · · · · · · · · · · · ·
      · · · · · · ░ · · · · · · · · · · · · · ·
      · · · · · · ▓ · · · · · · · · · · · · · ·
      · · · · · · ░ · · · · · · · · · · · · · ·
      · · · · · · ▓ · · · · · · · · · · · · · ·
      ░ ░ ░ ░ ░ ░ ░ ░ ▓ · · · · · · · · · · · ·
      ▓ ▓ ▓ ▓ ▓ ▓ ▓ ░ · · · · · · · · · · · · ·
      ▓ ░ ░ ░ ░ ░ ▓ ░ · · · · · · · · · · · · ·
      ▓ ░ ▓ ▓ ▓ ░ ▓ ░ · · · · · · · · · · · · ·
      ▓ ░ ▓ ▓ ▓ ░ ▓ ░ · · · · · · · · · · · · ·
      ▓ ░ ▓ ▓ ▓ ░ ▓ ░ · · · · · · · · · · · · ·
      ▓ ░ ░ ░ ░ ░ ▓ ░ · · · · · · · · · · · · ·
      ▓ ▓ ▓ ▓ ▓ ▓ ▓ ░ · · · · · · · · · · · · ·"
    `)
  })
})
