import encodeAlphanumeric, {
  canEncode as canEncodeAlphanumeric,
} from './alphanumeric'
import encodeNumeric, { canEncode as canEncodeNumeric } from './numeric'
import encodeByte from './byte'
import { Level } from './errorDetection/sizeByMode'

type Input = string | number

const createEncodedSegment = (input: string) => {
  switch (true) {
    case canEncodeAlphanumeric(input):
      return encodeAlphanumeric(input)

    case canEncodeNumeric(input):
      return encodeNumeric(input)

    // TODO: Add support to kanji

    default:
      return encodeByte(input)
  }
}

const encoder = (input: Input, errorDetectionLevel?: Level) => {
  const stringInput = input.toString()

  const segment = createEncodedSegment(stringInput)
  // encode
  // detect version
  // encode size and add padding
  // ?

  return stringInput
}

export default encoder
