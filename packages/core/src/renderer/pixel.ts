const Pixel = {
  WHITE: 0,
  BLACK: 1,
  EMPTY: null,
} as const

export type PixelKey = keyof typeof Pixel
export type PixelValue = typeof Pixel[PixelKey]
export default Pixel
