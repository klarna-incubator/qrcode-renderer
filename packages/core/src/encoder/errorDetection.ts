import Mode, { ModeValue } from './mode'

export type Level = 'L' | 'M' | 'Q' | 'H'

const selectErrorDetection = (
  dataSize: number,
  mode: ModeValue,
  version: number | undefined,
  level: Level | undefined
) => {
  if (version && (version < 1 || version > 40)) {
    throw new Error('Invalid QRCode version provided') // COMBAK: improve error handling
  }
}
