const Mode = {
  NUMERIC: '0001',
  ALPHANUMERIC: '0010',
  BYTE: '0100',
  KANJI: '1000',
} as const

export type ModeKey = keyof typeof Mode
export type ModeValue = typeof Mode[ModeKey]
export default Mode
