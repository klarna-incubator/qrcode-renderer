import Pixel, { PixelValue } from '../pixel'

const maskPixel = (pixel: PixelValue) => (rule: boolean) => {
  if (rule) {
    return pixel === Pixel.WHITE ? Pixel.BLACK : Pixel.WHITE
  } else {
    return pixel
  }
}

export const mask = (
  maskNumber: number,
  position: { x: number; y: number },
  pixel: PixelValue
) => {
  const mask = maskPixel(pixel)
  const mod2 = (position.x * position.y) % 2
  const mod3 = (position.x * position.y) % 3

  switch (maskNumber) {
    case 0:
      return mask((position.x + position.y) % 2 === 0)
    case 1:
      return mask(position.y % 2 === 0)
    case 2:
      return mask(position.x % 3 === 0)
    case 3:
      return mask((position.x + position.y) % 3 === 0)
    case 4:
      return mask(
        (Math.floor(position.y / 2) + Math.floor(position.x / 3)) % 2 === 0
      )
    case 5:
      return mask(mod2 + mod3 === 0)
    case 6:
      return mask((mod2 + mod3) % 2 === 0)
    case 7:
      return mask((((position.x + position.y) % 2) + mod3) % 2 === 0)
    default:
      throw new Error(
        `Invalid mask provided: ${maskNumber}. Only masks between 0-7 are supported.`
      )
  }
}
