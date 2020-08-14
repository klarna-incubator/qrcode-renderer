import Mode from '../mode'
import { selectErrorDetection } from './index'

describe('encoder > errorDetection', () => {
  describe('with optimal version and level selection', () => {
    const testCases = [
      [
        'numeric',
        Mode.NUMERIC,
        [
          // version, mode, dataSize, expectedSize
          [1, 'M', 31, 34],
          [1, 'M', 34, 34],
          [15, 'L', 1107, 1250],
          [1, 'H', 15, 17],
        ],
      ],
      [
        'alphanumeric',
        Mode.ALPHANUMERIC,
        [
          [1, 'M', 19, 20],
          [1, 'M', 20, 20],
          [15, 'L', 750, 758],
          [1, 'H', 9, 10],
        ],
      ],
      [
        'byte',
        Mode.BYTE,
        [
          [1, 'M', 12, 14],
          [1, 'M', 14, 14],
          [15, 'L', 515, 520],
          [1, 'H', 6, 7],
        ],
      ],
    ] as const

    describe.each(testCases)(`mode %s`, (_, mode, versionsAndSizes) => {
      it.each(versionsAndSizes)(
        `selects version %p (level %s) for dataSize %p size %p`,
        (version, level, dataSize, expected) => {
          expect(
            selectErrorDetection(mode, undefined, undefined, dataSize)
          ).toEqual({ level, size: expected, version })
        }
      )
    })
  })
})
