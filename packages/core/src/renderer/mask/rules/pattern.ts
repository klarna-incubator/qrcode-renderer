import Pixel, { PixelValue } from '../../pixel'

const { BLACK, WHITE } = Pixel

// This, followed or preceded by three whites is what we're looking for
const pattern = [
  WHITE,
  BLACK,
  WHITE,
  BLACK,
  BLACK,
  BLACK,
  WHITE,
  BLACK,
  WHITE,
].join('')
const threeWhites = [WHITE, WHITE, WHITE].join('')

export const penalizePatternInRow = (row: PixelValue[]) => {
  const rowWithPadding = [
    WHITE,
    WHITE,
    WHITE,
    WHITE,
    ...row,
    WHITE,
    WHITE,
    WHITE,
    WHITE,
  ]

  const occurrences = rowWithPadding.reduce<number>((num, _char, index) => {
    const fromThisPoint = rowWithPadding.slice(index).join('')

    if (fromThisPoint.startsWith(threeWhites + pattern)) {
      num += 1
    }

    if (fromThisPoint.startsWith(pattern + threeWhites)) {
      num += 1
    }

    return num
  }, 0)

  return occurrences * 40
}
