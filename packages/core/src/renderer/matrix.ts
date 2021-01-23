import { Matrix } from './types'
import Pixel from './pixel'

export const buildMatrix = <T>(size: number, initial: T) =>
  Array(size)
    .fill(null)
    .map(() => Array<T>(size).fill(initial))

export const applyMatrix = (target: Matrix, source: Matrix) => {
  for (let x = 0; x < source.length; ++x) {
    for (let y = 0; y < source.length; ++y) {
      if (source[y][x] !== Pixel.EMPTY) {
        target[y][x] = source[y][x]
      }
    }
  }
}
