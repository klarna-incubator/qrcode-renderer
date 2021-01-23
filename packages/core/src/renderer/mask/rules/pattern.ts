import Pixel, { PixelValue } from '../../pixel'

const { BLACK, WHITE } = Pixel

// This, followed or preceded by four whites is what we're looking for
const pattern = [BLACK, WHITE, BLACK, BLACK, BLACK, WHITE, BLACK].join('')
const fourWhites = [WHITE, WHITE, WHITE, WHITE].join('')

export const penalizePatternInRow = (row: PixelValue[]) => {
  const occurrences = row.reduce<number>((num, _char, index) => {
    const fromThisPoint = row.slice(index).join('')

    num += fromThisPoint.startsWith(fourWhites + pattern) ? 1 : 0

    if (fromThisPoint.startsWith(pattern + fourWhites)) {
      num += 1
    } else if (index < 4 && fromThisPoint.startsWith(pattern)) {
      // We count cells outside of the QRcode as white for this purpose
      if (row.slice(0, index).every(cell => cell === Pixel.WHITE)) {
        num += 1
      }
    }

    return num
  }, 0)

  return occurrences * 40
}
