import { Level } from 'encoder/errorDetection'
import { PixelValue } from './pixel'

export type Matrix = PixelValue[][]

export type Coordinates<
  X extends number = number,
  Y extends number = number
> = [X, Y]

export interface EncodingResult {
  input: string
  binary: number
  data: Uint8Array
  version: number
  level: Level
}
