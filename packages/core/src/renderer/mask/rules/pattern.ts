import Pixel, { PixelValue } from '../../pixel'

const { BLACK, WHITE } = Pixel

// This, followed or preceded by four whites is what we're looking for
const pattern = [BLACK, WHITE, BLACK, BLACK, BLACK, WHITE, BLACK].join('')
const fourWhites = [WHITE, WHITE, WHITE, WHITE].join('')

export const penalizePatternInRow = (row: PixelValue[]) => {
  const occurrences = row.reduce<number>((num, _char, index) => {
    const fromThisPoint = row.slice(index).join('')

    num += fromThisPoint.startsWith(fourWhites + pattern) ? 1 : 0

    num += fromThisPoint.startsWith(pattern + fourWhites) ? 1 : 0

    return num
  }, 0)

  return occurrences * 40
}
