import { Level, levels } from './level'
import dataCodewords from './dataCodewords'

const BYTE = 8

const padByte1 = Number(236)
  .toString(2)
  .padStart(BYTE, '0')

const padByte2 = Number(17)
  .toString(2)
  .padStart(BYTE, '0')

export const createEndPadding = (
  version: number,
  level: Level,
  size: number
) => {
  let totalSize = size

  const requiredNumberOfBits =
    dataCodewords.slice(version - 1, version - 1 + 4)[levels.indexOf(level)] *
    BYTE

  const sizeOfTerminator = Math.min(4, requiredNumberOfBits - totalSize)
  const terminator = '0'.repeat(sizeOfTerminator)
  totalSize += sizeOfTerminator

  // Total number of bits until totalSize is a multiple of 8
  const sizeOfBitPad = (8 - (totalSize % BYTE)) % BYTE
  const bitPadding = '0'.repeat(sizeOfBitPad)
  totalSize += sizeOfBitPad

  const sizeOfBytePad = requiredNumberOfBits - totalSize
  const bytePadding = ''.padEnd(sizeOfBytePad, padByte1 + padByte2)

  return `${terminator}${bitPadding}${bytePadding}`
}
