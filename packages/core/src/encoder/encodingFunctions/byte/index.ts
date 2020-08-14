import Mode from '../../mode'
import { Segment } from '../segment'
import BitArray from '../../BitArray'
import TextEncoder from 'encoder/encodingFunctions/byte/TextEncoder' // path defined in tsconfig to support both node.js and browsers

export const canEncode = (_input: string) => true

export const encode = (input: string): Segment => {
  const bitArray = new BitArray()
  const utf8Input = Array.from(new TextEncoder().encode(input))

  utf8Input.forEach(charCode => {
    bitArray.push(Number(charCode).toString(2), 8)
  })

  return {
    mode: Mode.BYTE,
    dataSize: utf8Input.length,
    data: bitArray.toString(),
  }
}
