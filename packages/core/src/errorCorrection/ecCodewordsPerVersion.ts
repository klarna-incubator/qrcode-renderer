export interface GroupDataCodewordsConfig {
  numberOfDataBlocks: number
  dataCodewordsPerBlock: number
}

interface ECCodewordsConfig {
  ecCodewordsPerBlock: number
  group1: GroupDataCodewordsConfig
  group2: GroupDataCodewordsConfig
}

// COMBAK: consider using more succint syntax for bundle redution
export const ecCodewordsPerVersion: Record<string, ECCodewordsConfig> = {
  ['1L']: {
    ecCodewordsPerBlock: 7,
    group1: { numberOfDataBlocks: 1, dataCodewordsPerBlock: 19 },
    group2: { numberOfDataBlocks: 0, dataCodewordsPerBlock: 0 },
  },
  ['1M']: {
    ecCodewordsPerBlock: 10,
    group1: { numberOfDataBlocks: 1, dataCodewordsPerBlock: 16 },
    group2: { numberOfDataBlocks: 0, dataCodewordsPerBlock: 0 },
  },
  ['1Q']: {
    ecCodewordsPerBlock: 13,
    group1: { numberOfDataBlocks: 1, dataCodewordsPerBlock: 13 },
    group2: { numberOfDataBlocks: 0, dataCodewordsPerBlock: 0 },
  },
  ['1H']: {
    ecCodewordsPerBlock: 17,
    group1: { numberOfDataBlocks: 1, dataCodewordsPerBlock: 9 },
    group2: { numberOfDataBlocks: 0, dataCodewordsPerBlock: 0 },
  },
  ['2L']: {
    ecCodewordsPerBlock: 10,
    group1: { numberOfDataBlocks: 1, dataCodewordsPerBlock: 34 },
    group2: { numberOfDataBlocks: 0, dataCodewordsPerBlock: 0 },
  },
  ['2M']: {
    ecCodewordsPerBlock: 16,
    group1: { numberOfDataBlocks: 1, dataCodewordsPerBlock: 28 },
    group2: { numberOfDataBlocks: 0, dataCodewordsPerBlock: 0 },
  },
  ['2Q']: {
    ecCodewordsPerBlock: 22,
    group1: { numberOfDataBlocks: 1, dataCodewordsPerBlock: 22 },
    group2: { numberOfDataBlocks: 0, dataCodewordsPerBlock: 0 },
  },
  ['2H']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 1, dataCodewordsPerBlock: 16 },
    group2: { numberOfDataBlocks: 0, dataCodewordsPerBlock: 0 },
  },
  ['3L']: {
    ecCodewordsPerBlock: 15,
    group1: { numberOfDataBlocks: 1, dataCodewordsPerBlock: 55 },
    group2: { numberOfDataBlocks: 0, dataCodewordsPerBlock: 0 },
  },
  ['3M']: {
    ecCodewordsPerBlock: 26,
    group1: { numberOfDataBlocks: 1, dataCodewordsPerBlock: 44 },
    group2: { numberOfDataBlocks: 0, dataCodewordsPerBlock: 0 },
  },
  ['3Q']: {
    ecCodewordsPerBlock: 18,
    group1: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 17 },
    group2: { numberOfDataBlocks: 0, dataCodewordsPerBlock: 0 },
  },
  ['3H']: {
    ecCodewordsPerBlock: 22,
    group1: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 13 },
    group2: { numberOfDataBlocks: 0, dataCodewordsPerBlock: 0 },
  },
  ['4L']: {
    ecCodewordsPerBlock: 20,
    group1: { numberOfDataBlocks: 1, dataCodewordsPerBlock: 80 },
    group2: { numberOfDataBlocks: 0, dataCodewordsPerBlock: 0 },
  },
  ['4M']: {
    ecCodewordsPerBlock: 18,
    group1: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 32 },
    group2: { numberOfDataBlocks: 0, dataCodewordsPerBlock: 0 },
  },
  ['4Q']: {
    ecCodewordsPerBlock: 26,
    group1: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 24 },
    group2: { numberOfDataBlocks: 0, dataCodewordsPerBlock: 0 },
  },
  ['4H']: {
    ecCodewordsPerBlock: 16,
    group1: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 9 },
    group2: { numberOfDataBlocks: 0, dataCodewordsPerBlock: 0 },
  },
  ['5L']: {
    ecCodewordsPerBlock: 26,
    group1: { numberOfDataBlocks: 1, dataCodewordsPerBlock: 108 },
    group2: { numberOfDataBlocks: 0, dataCodewordsPerBlock: 0 },
  },
  ['5M']: {
    ecCodewordsPerBlock: 24,
    group1: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 43 },
    group2: { numberOfDataBlocks: 0, dataCodewordsPerBlock: 0 },
  },
  ['5Q']: {
    ecCodewordsPerBlock: 18,
    group1: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 15 },
    group2: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 16 },
  },

  ['5H']: {
    ecCodewordsPerBlock: 22,
    group1: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 11 },
    group2: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 12 },
  },
  ['6L']: {
    ecCodewordsPerBlock: 18,
    group1: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 68 },
    group2: { numberOfDataBlocks: 0, dataCodewordsPerBlock: 0 },
  },
  ['6M']: {
    ecCodewordsPerBlock: 16,
    group1: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 27 },
    group2: { numberOfDataBlocks: 0, dataCodewordsPerBlock: 0 },
  },
  ['6Q']: {
    ecCodewordsPerBlock: 24,
    group1: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 19 },
    group2: { numberOfDataBlocks: 0, dataCodewordsPerBlock: 0 },
  },
  ['6H']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 15 },
    group2: { numberOfDataBlocks: 0, dataCodewordsPerBlock: 0 },
  },
  ['7L']: {
    ecCodewordsPerBlock: 20,
    group1: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 78 },
    group2: { numberOfDataBlocks: 0, dataCodewordsPerBlock: 0 },
  },
  ['7M']: {
    ecCodewordsPerBlock: 18,
    group1: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 31 },
    group2: { numberOfDataBlocks: 0, dataCodewordsPerBlock: 0 },
  },
  ['7Q']: {
    ecCodewordsPerBlock: 18,
    group1: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 14 },
    group2: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 15 },
  },
  ['7H']: {
    ecCodewordsPerBlock: 26,
    group1: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 13 },
    group2: { numberOfDataBlocks: 1, dataCodewordsPerBlock: 14 },
  },
  ['8L']: {
    ecCodewordsPerBlock: 24,
    group1: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 97 },
    group2: { numberOfDataBlocks: 0, dataCodewordsPerBlock: 0 },
  },
  ['8M']: {
    ecCodewordsPerBlock: 22,
    group1: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 38 },
    group2: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 39 },
  },
  ['8Q']: {
    ecCodewordsPerBlock: 22,
    group1: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 18 },
    group2: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 19 },
  },
  ['8H']: {
    ecCodewordsPerBlock: 26,
    group1: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 14 },
    group2: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 15 },
  },
  ['9L']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 116 },
    group2: { numberOfDataBlocks: 0, dataCodewordsPerBlock: 0 },
  },
  ['9M']: {
    ecCodewordsPerBlock: 22,
    group1: { numberOfDataBlocks: 3, dataCodewordsPerBlock: 36 },
    group2: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 37 },
  },
  ['9Q']: {
    ecCodewordsPerBlock: 20,
    group1: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 16 },
    group2: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 17 },
  },
  ['9H']: {
    ecCodewordsPerBlock: 24,
    group1: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 12 },
    group2: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 13 },
  },
  ['10L']: {
    ecCodewordsPerBlock: 18,
    group1: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 68 },
    group2: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 69 },
  },
  ['10M']: {
    ecCodewordsPerBlock: 26,
    group1: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 43 },
    group2: { numberOfDataBlocks: 1, dataCodewordsPerBlock: 44 },
  },
  ['10Q']: {
    ecCodewordsPerBlock: 24,
    group1: { numberOfDataBlocks: 6, dataCodewordsPerBlock: 19 },
    group2: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 20 },
  },
  ['10H']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 6, dataCodewordsPerBlock: 15 },
    group2: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 16 },
  },
  ['11L']: {
    ecCodewordsPerBlock: 20,
    group1: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 81 },
    group2: { numberOfDataBlocks: 0, dataCodewordsPerBlock: 0 },
  },
  ['11M']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 1, dataCodewordsPerBlock: 50 },
    group2: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 51 },
  },
  ['11Q']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 22 },
    group2: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 23 },
  },
  ['11H']: {
    ecCodewordsPerBlock: 24,
    group1: { numberOfDataBlocks: 3, dataCodewordsPerBlock: 12 },
    group2: { numberOfDataBlocks: 8, dataCodewordsPerBlock: 13 },
  },
  ['12L']: {
    ecCodewordsPerBlock: 24,
    group1: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 92 },
    group2: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 93 },
  },
  ['12M']: {
    ecCodewordsPerBlock: 22,
    group1: { numberOfDataBlocks: 6, dataCodewordsPerBlock: 36 },
    group2: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 37 },
  },
  ['12Q']: {
    ecCodewordsPerBlock: 26,
    group1: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 20 },
    group2: { numberOfDataBlocks: 6, dataCodewordsPerBlock: 21 },
  },
  ['12H']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 7, dataCodewordsPerBlock: 14 },
    group2: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 15 },
  },
  ['13L']: {
    ecCodewordsPerBlock: 26,
    group1: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 107 },
    group2: { numberOfDataBlocks: 0, dataCodewordsPerBlock: 0 },
  },
  ['13M']: {
    ecCodewordsPerBlock: 22,
    group1: { numberOfDataBlocks: 8, dataCodewordsPerBlock: 37 },
    group2: { numberOfDataBlocks: 1, dataCodewordsPerBlock: 38 },
  },
  ['13Q']: {
    ecCodewordsPerBlock: 24,
    group1: { numberOfDataBlocks: 8, dataCodewordsPerBlock: 20 },
    group2: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 21 },
  },
  ['13H']: {
    ecCodewordsPerBlock: 22,
    group1: { numberOfDataBlocks: 12, dataCodewordsPerBlock: 11 },
    group2: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 12 },
  },
  ['14L']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 3, dataCodewordsPerBlock: 115 },
    group2: { numberOfDataBlocks: 1, dataCodewordsPerBlock: 116 },
  },
  ['14M']: {
    ecCodewordsPerBlock: 24,
    group1: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 40 },
    group2: { numberOfDataBlocks: 5, dataCodewordsPerBlock: 41 },
  },
  ['14Q']: {
    ecCodewordsPerBlock: 20,
    group1: { numberOfDataBlocks: 11, dataCodewordsPerBlock: 16 },
    group2: { numberOfDataBlocks: 5, dataCodewordsPerBlock: 17 },
  },
  ['14H']: {
    ecCodewordsPerBlock: 24,
    group1: { numberOfDataBlocks: 11, dataCodewordsPerBlock: 12 },
    group2: { numberOfDataBlocks: 5, dataCodewordsPerBlock: 13 },
  },
  ['15L']: {
    ecCodewordsPerBlock: 22,
    group1: { numberOfDataBlocks: 5, dataCodewordsPerBlock: 87 },
    group2: { numberOfDataBlocks: 1, dataCodewordsPerBlock: 88 },
  },
  ['15M']: {
    ecCodewordsPerBlock: 24,
    group1: { numberOfDataBlocks: 5, dataCodewordsPerBlock: 41 },
    group2: { numberOfDataBlocks: 5, dataCodewordsPerBlock: 42 },
  },
  ['15Q']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 5, dataCodewordsPerBlock: 24 },
    group2: { numberOfDataBlocks: 7, dataCodewordsPerBlock: 25 },
  },
  ['15H']: {
    ecCodewordsPerBlock: 24,
    group1: { numberOfDataBlocks: 11, dataCodewordsPerBlock: 12 },
    group2: { numberOfDataBlocks: 7, dataCodewordsPerBlock: 13 },
  },
  ['16L']: {
    ecCodewordsPerBlock: 24,
    group1: { numberOfDataBlocks: 5, dataCodewordsPerBlock: 98 },
    group2: { numberOfDataBlocks: 1, dataCodewordsPerBlock: 99 },
  },
  ['16M']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 7, dataCodewordsPerBlock: 45 },
    group2: { numberOfDataBlocks: 3, dataCodewordsPerBlock: 46 },
  },
  ['16Q']: {
    ecCodewordsPerBlock: 24,
    group1: { numberOfDataBlocks: 15, dataCodewordsPerBlock: 19 },
    group2: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 20 },
  },
  ['16H']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 3, dataCodewordsPerBlock: 15 },
    group2: { numberOfDataBlocks: 13, dataCodewordsPerBlock: 16 },
  },
  ['17L']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 1, dataCodewordsPerBlock: 107 },
    group2: { numberOfDataBlocks: 5, dataCodewordsPerBlock: 108 },
  },
  ['17M']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 10, dataCodewordsPerBlock: 46 },
    group2: { numberOfDataBlocks: 1, dataCodewordsPerBlock: 47 },
  },
  ['17Q']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 1, dataCodewordsPerBlock: 22 },
    group2: { numberOfDataBlocks: 15, dataCodewordsPerBlock: 23 },
  },
  ['17H']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 14 },
    group2: { numberOfDataBlocks: 17, dataCodewordsPerBlock: 15 },
  },
  ['18L']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 5, dataCodewordsPerBlock: 120 },
    group2: { numberOfDataBlocks: 1, dataCodewordsPerBlock: 121 },
  },
  ['18M']: {
    ecCodewordsPerBlock: 26,
    group1: { numberOfDataBlocks: 9, dataCodewordsPerBlock: 43 },
    group2: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 44 },
  },
  ['18Q']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 17, dataCodewordsPerBlock: 22 },
    group2: { numberOfDataBlocks: 1, dataCodewordsPerBlock: 23 },
  },
  ['18H']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 14 },
    group2: { numberOfDataBlocks: 19, dataCodewordsPerBlock: 15 },
  },
  ['19L']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 3, dataCodewordsPerBlock: 113 },
    group2: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 114 },
  },
  ['19M']: {
    ecCodewordsPerBlock: 26,
    group1: { numberOfDataBlocks: 3, dataCodewordsPerBlock: 44 },
    group2: { numberOfDataBlocks: 11, dataCodewordsPerBlock: 45 },
  },
  ['19Q']: {
    ecCodewordsPerBlock: 26,
    group1: { numberOfDataBlocks: 17, dataCodewordsPerBlock: 21 },
    group2: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 22 },
  },
  ['19H']: {
    ecCodewordsPerBlock: 26,
    group1: { numberOfDataBlocks: 9, dataCodewordsPerBlock: 13 },
    group2: { numberOfDataBlocks: 16, dataCodewordsPerBlock: 14 },
  },
  ['20L']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 3, dataCodewordsPerBlock: 107 },
    group2: { numberOfDataBlocks: 5, dataCodewordsPerBlock: 108 },
  },
  ['20M']: {
    ecCodewordsPerBlock: 26,
    group1: { numberOfDataBlocks: 3, dataCodewordsPerBlock: 41 },
    group2: { numberOfDataBlocks: 13, dataCodewordsPerBlock: 42 },
  },
  ['20Q']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 15, dataCodewordsPerBlock: 24 },
    group2: { numberOfDataBlocks: 5, dataCodewordsPerBlock: 25 },
  },
  ['20H']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 15, dataCodewordsPerBlock: 15 },
    group2: { numberOfDataBlocks: 10, dataCodewordsPerBlock: 16 },
  },
  ['21L']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 116 },
    group2: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 117 },
  },
  ['21M']: {
    ecCodewordsPerBlock: 26,
    group1: { numberOfDataBlocks: 17, dataCodewordsPerBlock: 42 },
    group2: { numberOfDataBlocks: 0, dataCodewordsPerBlock: 0 },
  },
  ['21Q']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 17, dataCodewordsPerBlock: 22 },
    group2: { numberOfDataBlocks: 6, dataCodewordsPerBlock: 23 },
  },
  ['21H']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 19, dataCodewordsPerBlock: 16 },
    group2: { numberOfDataBlocks: 6, dataCodewordsPerBlock: 17 },
  },
  ['22L']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 111 },
    group2: { numberOfDataBlocks: 7, dataCodewordsPerBlock: 112 },
  },

  ['22M']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 17, dataCodewordsPerBlock: 46 },
    group2: { numberOfDataBlocks: 0, dataCodewordsPerBlock: 0 },
  },
  ['22Q']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 7, dataCodewordsPerBlock: 24 },
    group2: { numberOfDataBlocks: 16, dataCodewordsPerBlock: 25 },
  },
  ['22H']: {
    ecCodewordsPerBlock: 24,
    group1: { numberOfDataBlocks: 34, dataCodewordsPerBlock: 13 },
    group2: { numberOfDataBlocks: 0, dataCodewordsPerBlock: 0 },
  },
  ['23L']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 121 },
    group2: { numberOfDataBlocks: 5, dataCodewordsPerBlock: 122 },
  },
  ['23M']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 47 },
    group2: { numberOfDataBlocks: 14, dataCodewordsPerBlock: 48 },
  },
  ['23Q']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 11, dataCodewordsPerBlock: 24 },
    group2: { numberOfDataBlocks: 14, dataCodewordsPerBlock: 25 },
  },
  ['23H']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 16, dataCodewordsPerBlock: 15 },
    group2: { numberOfDataBlocks: 14, dataCodewordsPerBlock: 16 },
  },
  ['24L']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 6, dataCodewordsPerBlock: 117 },
    group2: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 118 },
  },
  ['24M']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 6, dataCodewordsPerBlock: 45 },
    group2: { numberOfDataBlocks: 14, dataCodewordsPerBlock: 46 },
  },
  ['24Q']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 11, dataCodewordsPerBlock: 24 },
    group2: { numberOfDataBlocks: 16, dataCodewordsPerBlock: 25 },
  },
  ['24H']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 30, dataCodewordsPerBlock: 16 },
    group2: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 17 },
  },
  ['25L']: {
    ecCodewordsPerBlock: 26,
    group1: { numberOfDataBlocks: 8, dataCodewordsPerBlock: 106 },
    group2: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 107 },
  },
  ['25M']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 8, dataCodewordsPerBlock: 47 },
    group2: { numberOfDataBlocks: 13, dataCodewordsPerBlock: 48 },
  },
  ['25Q']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 7, dataCodewordsPerBlock: 24 },
    group2: { numberOfDataBlocks: 22, dataCodewordsPerBlock: 25 },
  },
  ['25H']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 22, dataCodewordsPerBlock: 15 },
    group2: { numberOfDataBlocks: 13, dataCodewordsPerBlock: 16 },
  },
  ['26L']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 10, dataCodewordsPerBlock: 114 },
    group2: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 115 },
  },
  ['26M']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 19, dataCodewordsPerBlock: 46 },
    group2: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 47 },
  },
  ['26Q']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 28, dataCodewordsPerBlock: 22 },
    group2: { numberOfDataBlocks: 6, dataCodewordsPerBlock: 23 },
  },
  ['26H']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 33, dataCodewordsPerBlock: 16 },
    group2: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 17 },
  },
  ['27L']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 8, dataCodewordsPerBlock: 122 },
    group2: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 123 },
  },
  ['27M']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 22, dataCodewordsPerBlock: 45 },
    group2: { numberOfDataBlocks: 3, dataCodewordsPerBlock: 46 },
  },
  ['27Q']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 8, dataCodewordsPerBlock: 23 },
    group2: { numberOfDataBlocks: 26, dataCodewordsPerBlock: 24 },
  },
  ['27H']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 12, dataCodewordsPerBlock: 15 },
    group2: { numberOfDataBlocks: 28, dataCodewordsPerBlock: 16 },
  },
  ['28L']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 3, dataCodewordsPerBlock: 117 },
    group2: { numberOfDataBlocks: 10, dataCodewordsPerBlock: 118 },
  },
  ['28M']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 3, dataCodewordsPerBlock: 45 },
    group2: { numberOfDataBlocks: 23, dataCodewordsPerBlock: 46 },
  },
  ['28Q']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 24 },
    group2: { numberOfDataBlocks: 31, dataCodewordsPerBlock: 25 },
  },
  ['28H']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 11, dataCodewordsPerBlock: 15 },
    group2: { numberOfDataBlocks: 31, dataCodewordsPerBlock: 16 },
  },
  ['29L']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 7, dataCodewordsPerBlock: 116 },
    group2: { numberOfDataBlocks: 7, dataCodewordsPerBlock: 117 },
  },
  ['29M']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 21, dataCodewordsPerBlock: 45 },
    group2: { numberOfDataBlocks: 7, dataCodewordsPerBlock: 46 },
  },
  ['29Q']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 1, dataCodewordsPerBlock: 23 },
    group2: { numberOfDataBlocks: 37, dataCodewordsPerBlock: 24 },
  },
  ['29H']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 19, dataCodewordsPerBlock: 15 },
    group2: { numberOfDataBlocks: 26, dataCodewordsPerBlock: 16 },
  },
  ['30L']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 5, dataCodewordsPerBlock: 115 },
    group2: { numberOfDataBlocks: 10, dataCodewordsPerBlock: 116 },
  },
  ['30M']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 19, dataCodewordsPerBlock: 47 },
    group2: { numberOfDataBlocks: 10, dataCodewordsPerBlock: 48 },
  },
  ['30Q']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 15, dataCodewordsPerBlock: 24 },
    group2: { numberOfDataBlocks: 25, dataCodewordsPerBlock: 25 },
  },
  ['30H']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 23, dataCodewordsPerBlock: 15 },
    group2: { numberOfDataBlocks: 25, dataCodewordsPerBlock: 16 },
  },
  ['31L']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 13, dataCodewordsPerBlock: 115 },
    group2: { numberOfDataBlocks: 3, dataCodewordsPerBlock: 116 },
  },
  ['31M']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 46 },
    group2: { numberOfDataBlocks: 29, dataCodewordsPerBlock: 47 },
  },
  ['31Q']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 42, dataCodewordsPerBlock: 24 },
    group2: { numberOfDataBlocks: 1, dataCodewordsPerBlock: 25 },
  },
  ['31H']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 23, dataCodewordsPerBlock: 15 },
    group2: { numberOfDataBlocks: 28, dataCodewordsPerBlock: 16 },
  },
  ['32L']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 17, dataCodewordsPerBlock: 115 },
    group2: { numberOfDataBlocks: 0, dataCodewordsPerBlock: 0 },
  },
  ['32M']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 10, dataCodewordsPerBlock: 46 },
    group2: { numberOfDataBlocks: 23, dataCodewordsPerBlock: 47 },
  },
  ['32Q']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 10, dataCodewordsPerBlock: 24 },
    group2: { numberOfDataBlocks: 35, dataCodewordsPerBlock: 25 },
  },
  ['32H']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 19, dataCodewordsPerBlock: 15 },
    group2: { numberOfDataBlocks: 35, dataCodewordsPerBlock: 16 },
  },
  ['33L']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 17, dataCodewordsPerBlock: 115 },
    group2: { numberOfDataBlocks: 1, dataCodewordsPerBlock: 116 },
  },
  ['33M']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 14, dataCodewordsPerBlock: 46 },
    group2: { numberOfDataBlocks: 21, dataCodewordsPerBlock: 47 },
  },
  ['33Q']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 29, dataCodewordsPerBlock: 24 },
    group2: { numberOfDataBlocks: 19, dataCodewordsPerBlock: 25 },
  },
  ['33H']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 11, dataCodewordsPerBlock: 15 },
    group2: { numberOfDataBlocks: 46, dataCodewordsPerBlock: 16 },
  },
  ['34L']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 13, dataCodewordsPerBlock: 115 },
    group2: { numberOfDataBlocks: 6, dataCodewordsPerBlock: 116 },
  },
  ['34M']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 14, dataCodewordsPerBlock: 46 },
    group2: { numberOfDataBlocks: 23, dataCodewordsPerBlock: 47 },
  },
  ['34Q']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 44, dataCodewordsPerBlock: 24 },
    group2: { numberOfDataBlocks: 7, dataCodewordsPerBlock: 25 },
  },
  ['34H']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 59, dataCodewordsPerBlock: 16 },
    group2: { numberOfDataBlocks: 1, dataCodewordsPerBlock: 17 },
  },
  ['35L']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 12, dataCodewordsPerBlock: 121 },
    group2: { numberOfDataBlocks: 7, dataCodewordsPerBlock: 122 },
  },
  ['35M']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 12, dataCodewordsPerBlock: 47 },
    group2: { numberOfDataBlocks: 26, dataCodewordsPerBlock: 48 },
  },
  ['35Q']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 39, dataCodewordsPerBlock: 24 },
    group2: { numberOfDataBlocks: 14, dataCodewordsPerBlock: 25 },
  },
  ['35H']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 22, dataCodewordsPerBlock: 15 },
    group2: { numberOfDataBlocks: 41, dataCodewordsPerBlock: 16 },
  },
  ['36L']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 6, dataCodewordsPerBlock: 121 },
    group2: { numberOfDataBlocks: 14, dataCodewordsPerBlock: 122 },
  },
  ['36M']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 6, dataCodewordsPerBlock: 47 },
    group2: { numberOfDataBlocks: 34, dataCodewordsPerBlock: 48 },
  },
  ['36Q']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 46, dataCodewordsPerBlock: 24 },
    group2: { numberOfDataBlocks: 10, dataCodewordsPerBlock: 25 },
  },
  ['36H']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 2, dataCodewordsPerBlock: 15 },
    group2: { numberOfDataBlocks: 64, dataCodewordsPerBlock: 16 },
  },
  ['37L']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 17, dataCodewordsPerBlock: 122 },
    group2: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 123 },
  },
  ['37M']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 29, dataCodewordsPerBlock: 46 },
    group2: { numberOfDataBlocks: 14, dataCodewordsPerBlock: 47 },
  },
  ['37Q']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 49, dataCodewordsPerBlock: 24 },
    group2: { numberOfDataBlocks: 10, dataCodewordsPerBlock: 25 },
  },
  ['37H']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 24, dataCodewordsPerBlock: 15 },
    group2: { numberOfDataBlocks: 46, dataCodewordsPerBlock: 16 },
  },
  ['38L']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 122 },
    group2: { numberOfDataBlocks: 18, dataCodewordsPerBlock: 123 },
  },
  ['38M']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 13, dataCodewordsPerBlock: 46 },
    group2: { numberOfDataBlocks: 32, dataCodewordsPerBlock: 47 },
  },
  ['38Q']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 48, dataCodewordsPerBlock: 24 },
    group2: { numberOfDataBlocks: 14, dataCodewordsPerBlock: 25 },
  },
  ['38H']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 42, dataCodewordsPerBlock: 15 },
    group2: { numberOfDataBlocks: 32, dataCodewordsPerBlock: 16 },
  },
  ['39L']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 20, dataCodewordsPerBlock: 117 },
    group2: { numberOfDataBlocks: 4, dataCodewordsPerBlock: 118 },
  },
  ['39M']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 40, dataCodewordsPerBlock: 47 },
    group2: { numberOfDataBlocks: 7, dataCodewordsPerBlock: 48 },
  },
  ['39Q']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 43, dataCodewordsPerBlock: 24 },
    group2: { numberOfDataBlocks: 22, dataCodewordsPerBlock: 25 },
  },
  ['39H']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 10, dataCodewordsPerBlock: 15 },
    group2: { numberOfDataBlocks: 67, dataCodewordsPerBlock: 16 },
  },
  ['40L']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 19, dataCodewordsPerBlock: 118 },
    group2: { numberOfDataBlocks: 6, dataCodewordsPerBlock: 119 },
  },
  ['40M']: {
    ecCodewordsPerBlock: 28,
    group1: { numberOfDataBlocks: 18, dataCodewordsPerBlock: 47 },
    group2: { numberOfDataBlocks: 31, dataCodewordsPerBlock: 48 },
  },
  ['40Q']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 34, dataCodewordsPerBlock: 24 },
    group2: { numberOfDataBlocks: 34, dataCodewordsPerBlock: 25 },
  },
  ['40H']: {
    ecCodewordsPerBlock: 30,
    group1: { numberOfDataBlocks: 20, dataCodewordsPerBlock: 15 },
    group2: { numberOfDataBlocks: 61, dataCodewordsPerBlock: 16 },
  },
}
