import { ModeValue } from './mode'

export interface Segment {
  mode: ModeValue
  dataSize: number
  data: Uint8Array
}
