import * as alphanumericEncoder from './encodingFunctions/alphanumeric'
import * as numericEncoder from './encodingFunctions/numeric'
import * as byteEncoder from './encodingFunctions/byte'
import { Level } from './level'
import { selectErrorDetection } from './errorDetection'
import BitArray from './BitArray'
import { calculateCharacterCountSize } from './characterCount'
import { createEndPadding } from './padding'
import { ensure } from './ensure'

type Input = string | number

export interface EncoderOptions {
  minimumVersion?: number
  level?: Level
}

const encodeSegment = (input: string) =>
  ensure(encoder => encoder.canEncode(input), [
    numericEncoder,
    alphanumericEncoder,
    byteEncoder,
  ]).encode(input)

const encoder = (input: Input, options: EncoderOptions = {}) => {
  const stringInput = input.toString()

  const segment = encodeSegment(stringInput)
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
