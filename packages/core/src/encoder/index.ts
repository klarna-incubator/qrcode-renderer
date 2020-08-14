import encodeAlphanumeric, {
  canEncode as canEncodeAlphanumeric,
} from './alphanumeric'
import encodeNumeric, { canEncode as canEncodeNumeric } from './numeric'
import encodeByte from './byte'
import { Level, levels } from './errorDetection/sizeByMode'
import { selectErrorDetection } from './errorDetection'
import BitArray from './BitArray'
import { calculateCharacterCountSize } from './characterCount'
import dataCodewords from './dataCodewords'

type Input = string | number

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

export interface EncoderOptions {
  minimumVersion?: number
  level?: Level
}

const BYTE = 8

const padByte1 = Number(236)
  .toString(2)
  .padStart(BYTE, '0')

const padByte2 = Number(17)
  .toString(2)
  .padStart(BYTE, '0')

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

  const requiredNumberOfBits =
    dataCodewords.slice(version - 1, version - 1 + 4)[levels.indexOf(level)] *
    BYTE

  const sizeOfTerminator = Math.min(4, requiredNumberOfBits - buffer.size())
  buffer.push('', sizeOfTerminator)

  const sizeOfBitPad = BYTE - (buffer.size() % BYTE)
  if (sizeOfBitPad !== BYTE) {
    // 8 % 8 == 0
    buffer.push('', sizeOfBitPad)
  }

  // padd bytes
  const sizeOfBytePad = (requiredNumberOfBits - buffer.size()) / BYTE
  for (let i = 0; i < sizeOfBytePad; i++) {
    buffer.push(i % 2 === 0 ? padByte1 : padByte2)
  }

  return {
    version,
    level,
    mode: segment.mode,
    data: buffer.toUintArray(),
  }
}

export default encoder
