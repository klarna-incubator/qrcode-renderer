import { ModeValues } from './mode'

export interface Segment {
  mode: ModeValues
  dataSize: number
  payload: Uint8Array
}
