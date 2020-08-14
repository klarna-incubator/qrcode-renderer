import * as alphanumericEncoder from './encodingFunctions/alphanumeric'
import * as numericEncoder from './encodingFunctions/numeric'
import * as byteEncoder from './encodingFunctions/byte'
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
  if (numericEncoder.canEncode(input)) {
    return numericEncoder.encode(input)
  }

  if (alphanumericEncoder.canEncode(input)) {
    return alphanumericEncoder.encode(input)
  }

  // TODO: Add support to kanji
  return byteEncoder.encode(input)
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
