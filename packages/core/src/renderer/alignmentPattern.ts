import Pixel from './pixel'
import { Pattern, Coordinates } from './types'

const { BLACK, WHITE } = Pixel

export const ALIGNMENT_PATTERN_OUTER_SIZE = 5
export const ALIGNMENT_PATTERN_INNER_WHITE_SIZE = 3
export const ALIGNMENT_PATTERN_INNER_BLACK_SIZE = 1

export const ALIGNMENT_PATTERN: Pattern = [
  [BLACK, BLACK, BLACK, BLACK, BLACK],
  [BLACK, WHITE, WHITE, WHITE, BLACK],
  [BLACK, WHITE, BLACK, WHITE, BLACK],
  [BLACK, WHITE, WHITE, WHITE, BLACK],
  [BLACK, BLACK, BLACK, BLACK, BLACK],
] as const

export const ALIGNMENT_PATTERN_LOCATIONS_TABLE = [
  [], // version 'zero'
  [],
  [6, 18],
  [6, 22],
  [6, 26],
  [6, 30],
  [6, 34],
  [6, 22, 38],
  [6, 24, 42],
  [6, 26, 46],
  [6, 28, 50],
  [6, 30, 54],
  [6, 32, 58],
  [6, 34, 62],
  [6, 26, 46, 66],
  [6, 26, 48, 70],
  [6, 26, 50, 74],
  [6, 30, 54, 78],
  [6, 30, 56, 82],
  [6, 30, 58, 86],
  [6, 34, 62, 90],
  [6, 28, 50, 72, 94],
  [6, 26, 50, 74, 98],
  [6, 30, 54, 78, 102],
  [6, 28, 54, 80, 106],
  [6, 32, 58, 84, 110],
  [6, 30, 58, 86, 114],
  [6, 34, 62, 90, 118],
  [6, 26, 50, 74, 98, 122],
  [6, 30, 54, 78, 102, 126],
  [6, 26, 52, 78, 104, 130],
  [6, 30, 56, 82, 108, 134],
  [6, 34, 60, 86, 112, 138],
  [6, 30, 58, 86, 114, 142],
  [6, 34, 62, 90, 118, 146],
  [6, 30, 54, 78, 102, 126, 150],
  [6, 24, 50, 76, 102, 128, 154],
  [6, 28, 54, 80, 106, 132, 158],
  [6, 32, 58, 84, 110, 136, 162],
  [6, 26, 54, 82, 110, 138, 166],
  [6, 30, 58, 86, 114, 142, 170],
]

const cartesianProduct = <T>(...sets: T[][]): T[][] =>
  sets.reduce<T[][]>((acc, set) => acc.flatMap(x => set.map(y => [...x, y])), [
    [],
  ])

const excludeIlegalCoordinates = (
  locations: number[],
  coordinates: Coordinates[]
): Coordinates[] => {
  const first = locations[0]
  const last = locations[locations.length - 1]
  const excludeCoordinates = [
    [first, first],
    [first, last],
    [last, first],
  ]

  return coordinates.filter(
    ([x, y]) => !excludeCoordinates.some(([a, b]) => a === x && b === y)
  )
}

export const calculateAlignmentPatternsCoordinates = (version: number) => {
  // Table has pattern centers, subtracting 2 yields top left corners
  const locations = ALIGNMENT_PATTERN_LOCATIONS_TABLE[version].map(x => x - 2)

  const allCoordinates = cartesianProduct(locations, locations) as Coordinates[]

  return excludeIlegalCoordinates(locations, allCoordinates)
}
