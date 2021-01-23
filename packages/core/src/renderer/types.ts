import { Level } from '../level'
import { PixelValue } from './pixel'

export type Matrix = PixelValue[][]

export type Pattern = Readonly<Readonly<PixelValue[]>[]>

export type Coordinates<
  X extends number = number,
  Y extends number = number
> = [X, Y]

export interface EncodingResult {
  data: Uint8Array
  version: number
  level: Level
}
