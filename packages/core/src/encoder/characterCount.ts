import Mode, { ModeValue } from './mode'

const countByMode = {
  [Mode.NUMERIC]: [10, 12, 14],
  [Mode.ALPHANUMERIC]: [9, 11, 13],
  [Mode.BYTE]: [8, 16, 16],
  [Mode.KANJI]: [8, 10, 12],
}

export const calculateCharacterCountSize = (
  mode: ModeValue,
  version: number
) => {
  const [lessThan9, lessThan26, lessThan40] = countByMode[mode]

  if (version <= 9) {
    return lessThan9
  }

  if (version <= 26) {
    return lessThan26
  }

  return lessThan40
}
