const Mode = {
  NUMERIC: 0b0001,
  ALPHANUMERIC: 0b0010,
  BYTE: 0b0100,
  KANJI: 0b1000,
} as const

export type ModeKeys = keyof typeof Mode
export type ModeValues = typeof Mode[ModeKeys]
export default Mode
