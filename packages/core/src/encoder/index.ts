import encodeAlphanumeric, {
  canEncode as canEncodeAlphanumeric,
} from './alphanumeric'
import encodeNumeric, { canEncode as canEncodeNumeric } from './numeric'
import encodeByte from './byte'
import { Level } from './errorDetection/sizeByMode'
import { selectErrorDetection } from './errorDetection'
import BitArray from './BitArray'
import { calculateCharacterCountSize } from './characterCount'
import { createEndPadding } from './padding'

type Input = string | number

export interface EncoderOptions {
  minimumVersion?: number
  level?: Level
}

const createEncodedSegment = (input: string) => {
  if (canEncodeNumeric(input)) {
    return encodeNumeric(input)
  }

  if (canEncodeAlphanumeric(input)) {
    return encodeAlphanumeric(input)
  }

  // TODO: Add support to kanji
  return encodeByte(input)
}

const encoder = (input: Input, options: EncoderOptions = {}) => {
  const stringInput = input.toString()

  const segment = createEncodedSegment(stringInput)
  const { version, level } = selectErrorDetection(
    segment.mode,
    options.minimumVersion,
    options.level,
    segment.dataSize
  )

  const buffer = new BitArray()

  buffer.push(segment.mode, 4)
  buffer.push(
    segment.dataSize.toString(2),
    calculateCharacterCountSize(segment.mode, version)
  )
  buffer.push(segment.data)
  buffer.push(createEndPadding(version, level, buffer.size()))

  return {
    version,
    level,
    mode: segment.mode,
    data: buffer.toUintArray(),
  }
}

export default encoder
