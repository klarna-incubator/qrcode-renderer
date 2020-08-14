import { Level } from 'encoder/errorDetection'

export interface EncodingResult {
  input: string
  binary: number
  data: Uint8Array
  version: number
  level: Level
}
