import Mode from '../mode'
import { selectErrorDetection } from './index'

describe('encoder > errorDetection', () => {
  describe('with manual level selection', () => {
    const testCases = [
      [
        'numeric',
        Mode.NUMERIC,
        [
          // version, mode, dataSize, expectedSize
          [1, 'M', 15, 34],
          [15, 'H', 529, 530],
        ],
      ],
      [
        'alphanumeric',
        Mode.ALPHANUMERIC,
        [
          [1, 'M', 8, 20],
          [15, 'L', 668, 758],
        ],
      ],
      [
        'byte',
        Mode.BYTE,
        [
          [1, 'M', 7, 14],
          [15, 'L', 459, 520],
        ],
      ],
    ] as const

    describe.each(testCases)(`mode %s`, (_, mode, versionsAndSizes) => {
      it.each(versionsAndSizes)(
        `selects version %p with fixed level %s for dataSize %p size %p`,
        (version, level, dataSize, expected) => {
          expect(
            selectErrorDetection(mode, undefined, level, dataSize)
          ).toEqual({ level, size: expected, version })
        }
      )
    })
  })
})
