import Mode from '../mode'
import { selectErrorDetection } from './index'

describe('encoder > errorDetection', () => {
  describe('with manual version selection', () => {
    const testCases = [
      [
        'numeric',
        Mode.NUMERIC,
        [
          // version, mode, dataSize, expectedSize
          [40, 'H', 31, 3057],
          [1, 'Q', 26, 27],
          [20, 'Q', 920, 1159],
        ],
      ],
      [
        'alphanumeric',
        Mode.ALPHANUMERIC,
        [
          [40, 'H', 15, 1852],
          [1, 'M', 18, 20],
          [20, 'Q', 560, 702],
        ],
      ],
      [
        'byte',
        Mode.BYTE,
        [
          [40, 'H', 15, 1273],
          [1, 'M', 13, 14],
          [20, 'Q', 383, 482],
        ],
      ],
    ] as const

    describe.each(testCases)(`mode %s`, (_, mode, versionsAndSizes) => {
      it.each(versionsAndSizes)(
        `with fixed version %p selects level %s for dataSize %p size %p`,
        (version, level, dataSize, expected) => {
          expect(
            selectErrorDetection(mode, version, undefined, dataSize)
          ).toEqual({ level, size: expected, version })
        }
      )
    })
  })
})
