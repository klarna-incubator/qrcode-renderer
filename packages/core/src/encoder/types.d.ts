import { ModeValues } from './mode'

export interface Segment {
  mode: ModeValues
  dataSize: number
  data: Uint8Array
}
