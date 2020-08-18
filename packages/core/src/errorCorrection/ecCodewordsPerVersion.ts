// When we get typescript 4.0, we can name these! (https://devblogs.microsoft.com/typescript/announcing-typescript-4-0-beta/#labeled-tuple-elements)
/**
 * [numberOfDataBlocks, dataCodewordsPerblock]
 */
export type GroupDataCodewordsConfig = [number, number]

export interface ECCodewordsConfig {
  ecCodewordsPerBlock: number
  groups: GroupDataCodewordsConfig[]
}

export const ecCodewordsPerVersion: Record<string, ECCodewordsConfig> = {
  ['1L']: {
    ecCodewordsPerBlock: 7,
    groups: [[1, 19]],
  },
  ['1M']: {
    ecCodewordsPerBlock: 10,
    groups: [[1, 16]],
  },
  ['1Q']: {
    ecCodewordsPerBlock: 13,
    groups: [[1, 13]],
  },
  ['1H']: {
    ecCodewordsPerBlock: 17,
    groups: [[1, 9]],
  },
  ['2L']: {
    ecCodewordsPerBlock: 10,
    groups: [[1, 34]],
  },
  ['2M']: {
    ecCodewordsPerBlock: 16,
    groups: [[1, 28]],
  },
  ['2Q']: {
    ecCodewordsPerBlock: 22,
    groups: [[1, 22]],
  },
  ['2H']: {
    ecCodewordsPerBlock: 28,
    groups: [[1, 16]],
  },
  ['3L']: {
    ecCodewordsPerBlock: 15,
    groups: [[1, 55]],
  },
  ['3M']: {
    ecCodewordsPerBlock: 26,
    groups: [[1, 44]],
  },
  ['3Q']: {
    ecCodewordsPerBlock: 18,
    groups: [[2, 17]],
  },
  ['3H']: {
    ecCodewordsPerBlock: 22,
    groups: [[2, 13]],
  },
  ['4L']: {
    ecCodewordsPerBlock: 20,
    groups: [[1, 80]],
  },
  ['4M']: {
    ecCodewordsPerBlock: 18,
    groups: [[2, 32]],
  },
  ['4Q']: {
    ecCodewordsPerBlock: 26,
    groups: [[2, 24]],
  },
  ['4H']: {
    ecCodewordsPerBlock: 16,
    groups: [[4, 9]],
  },
  ['5L']: {
    ecCodewordsPerBlock: 26,
    groups: [[1, 108]],
  },
  ['5M']: {
    ecCodewordsPerBlock: 24,
    groups: [[2, 43]],
  },
  ['5Q']: {
    ecCodewordsPerBlock: 18,
    groups: [
      [2, 15],
      [2, 16],
    ],
  },

  ['5H']: {
    ecCodewordsPerBlock: 22,
    groups: [
      [2, 11],
      [2, 12],
    ],
  },
  ['6L']: {
    ecCodewordsPerBlock: 18,
    groups: [[2, 68]],
  },
  ['6M']: {
    ecCodewordsPerBlock: 16,
    groups: [[4, 27]],
  },
  ['6Q']: {
    ecCodewordsPerBlock: 24,
    groups: [[4, 19]],
  },
  ['6H']: {
    ecCodewordsPerBlock: 28,
    groups: [[4, 15]],
  },
  ['7L']: {
    ecCodewordsPerBlock: 20,
    groups: [[2, 78]],
  },
  ['7M']: {
    ecCodewordsPerBlock: 18,
    groups: [[4, 31]],
  },
  ['7Q']: {
    ecCodewordsPerBlock: 18,
    groups: [
      [2, 14],
      [4, 15],
    ],
  },
  ['7H']: {
    ecCodewordsPerBlock: 26,
    groups: [
      [4, 13],
      [1, 14],
    ],
  },
  ['8L']: {
    ecCodewordsPerBlock: 24,
    groups: [[2, 97]],
  },
  ['8M']: {
    ecCodewordsPerBlock: 22,
    groups: [
      [2, 38],
      [2, 39],
    ],
  },
  ['8Q']: {
    ecCodewordsPerBlock: 22,
    groups: [
      [4, 18],
      [2, 19],
    ],
  },
  ['8H']: {
    ecCodewordsPerBlock: 26,
    groups: [
      [4, 14],
      [2, 15],
    ],
  },
  ['9L']: {
    ecCodewordsPerBlock: 30,
    groups: [[2, 116]],
  },
  ['9M']: {
    ecCodewordsPerBlock: 22,
    groups: [
      [3, 36],
      [2, 37],
    ],
  },
  ['9Q']: {
    ecCodewordsPerBlock: 20,
    groups: [
      [4, 16],
      [4, 17],
    ],
  },
  ['9H']: {
    ecCodewordsPerBlock: 24,
    groups: [
      [4, 12],
      [4, 13],
    ],
  },
  ['10L']: {
    ecCodewordsPerBlock: 18,
    groups: [
      [2, 68],
      [2, 69],
    ],
  },
  ['10M']: {
    ecCodewordsPerBlock: 26,
    groups: [
      [4, 43],
      [1, 44],
    ],
  },
  ['10Q']: {
    ecCodewordsPerBlock: 24,
    groups: [
      [6, 19],
      [2, 20],
    ],
  },
  ['10H']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [6, 15],
      [2, 16],
    ],
  },
  ['11L']: {
    ecCodewordsPerBlock: 20,
    groups: [[4, 81]],
  },
  ['11M']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [1, 50],
      [4, 51],
    ],
  },
  ['11Q']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [4, 22],
      [4, 23],
    ],
  },
  ['11H']: {
    ecCodewordsPerBlock: 24,
    groups: [
      [3, 12],
      [8, 13],
    ],
  },
  ['12L']: {
    ecCodewordsPerBlock: 24,
    groups: [
      [2, 92],
      [2, 93],
    ],
  },
  ['12M']: {
    ecCodewordsPerBlock: 22,
    groups: [
      [6, 36],
      [2, 37],
    ],
  },
  ['12Q']: {
    ecCodewordsPerBlock: 26,
    groups: [
      [4, 20],
      [6, 21],
    ],
  },
  ['12H']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [7, 14],
      [4, 15],
    ],
  },
  ['13L']: {
    ecCodewordsPerBlock: 26,
    groups: [[4, 107]],
  },
  ['13M']: {
    ecCodewordsPerBlock: 22,
    groups: [
      [8, 37],
      [1, 38],
    ],
  },
  ['13Q']: {
    ecCodewordsPerBlock: 24,
    groups: [
      [8, 20],
      [4, 21],
    ],
  },
  ['13H']: {
    ecCodewordsPerBlock: 22,
    groups: [
      [12, 11],
      [4, 12],
    ],
  },
  ['14L']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [3, 115],
      [1, 116],
    ],
  },
  ['14M']: {
    ecCodewordsPerBlock: 24,
    groups: [
      [4, 40],
      [5, 41],
    ],
  },
  ['14Q']: {
    ecCodewordsPerBlock: 20,
    groups: [
      [11, 16],
      [5, 17],
    ],
  },
  ['14H']: {
    ecCodewordsPerBlock: 24,
    groups: [
      [11, 12],
      [5, 13],
    ],
  },
  ['15L']: {
    ecCodewordsPerBlock: 22,
    groups: [
      [5, 87],
      [1, 88],
    ],
  },
  ['15M']: {
    ecCodewordsPerBlock: 24,
    groups: [
      [5, 41],
      [5, 42],
    ],
  },
  ['15Q']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [5, 24],
      [7, 25],
    ],
  },
  ['15H']: {
    ecCodewordsPerBlock: 24,
    groups: [
      [11, 12],
      [7, 13],
    ],
  },
  ['16L']: {
    ecCodewordsPerBlock: 24,
    groups: [
      [5, 98],
      [1, 99],
    ],
  },
  ['16M']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [7, 45],
      [3, 46],
    ],
  },
  ['16Q']: {
    ecCodewordsPerBlock: 24,
    groups: [
      [15, 19],
      [2, 20],
    ],
  },
  ['16H']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [3, 15],
      [13, 16],
    ],
  },
  ['17L']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [1, 107],
      [5, 108],
    ],
  },
  ['17M']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [10, 46],
      [1, 47],
    ],
  },
  ['17Q']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [1, 22],
      [15, 23],
    ],
  },
  ['17H']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [2, 14],
      [17, 15],
    ],
  },
  ['18L']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [5, 120],
      [1, 121],
    ],
  },
  ['18M']: {
    ecCodewordsPerBlock: 26,
    groups: [
      [9, 43],
      [4, 44],
    ],
  },
  ['18Q']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [17, 22],
      [1, 23],
    ],
  },
  ['18H']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [2, 14],
      [19, 15],
    ],
  },
  ['19L']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [3, 113],
      [4, 114],
    ],
  },
  ['19M']: {
    ecCodewordsPerBlock: 26,
    groups: [
      [3, 44],
      [11, 45],
    ],
  },
  ['19Q']: {
    ecCodewordsPerBlock: 26,
    groups: [
      [17, 21],
      [4, 22],
    ],
  },
  ['19H']: {
    ecCodewordsPerBlock: 26,
    groups: [
      [9, 13],
      [16, 14],
    ],
  },
  ['20L']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [3, 107],
      [5, 108],
    ],
  },
  ['20M']: {
    ecCodewordsPerBlock: 26,
    groups: [
      [3, 41],
      [13, 42],
    ],
  },
  ['20Q']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [15, 24],
      [5, 25],
    ],
  },
  ['20H']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [15, 15],
      [10, 16],
    ],
  },
  ['21L']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [4, 116],
      [4, 117],
    ],
  },
  ['21M']: {
    ecCodewordsPerBlock: 26,
    groups: [[17, 42]],
  },
  ['21Q']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [17, 22],
      [6, 23],
    ],
  },
  ['21H']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [19, 16],
      [6, 17],
    ],
  },
  ['22L']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [2, 111],
      [7, 112],
    ],
  },

  ['22M']: {
    ecCodewordsPerBlock: 28,
    groups: [[17, 46]],
  },
  ['22Q']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [7, 24],
      [16, 25],
    ],
  },
  ['22H']: {
    ecCodewordsPerBlock: 24,
    groups: [[34, 13]],
  },
  ['23L']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [4, 121],
      [5, 122],
    ],
  },
  ['23M']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [4, 47],
      [14, 48],
    ],
  },
  ['23Q']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [11, 24],
      [14, 25],
    ],
  },
  ['23H']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [16, 15],
      [14, 16],
    ],
  },
  ['24L']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [6, 117],
      [4, 118],
    ],
  },
  ['24M']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [6, 45],
      [14, 46],
    ],
  },
  ['24Q']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [11, 24],
      [16, 25],
    ],
  },
  ['24H']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [30, 16],
      [2, 17],
    ],
  },
  ['25L']: {
    ecCodewordsPerBlock: 26,
    groups: [
      [8, 106],
      [4, 107],
    ],
  },
  ['25M']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [8, 47],
      [13, 48],
    ],
  },
  ['25Q']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [7, 24],
      [22, 25],
    ],
  },
  ['25H']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [22, 15],
      [13, 16],
    ],
  },
  ['26L']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [10, 114],
      [2, 115],
    ],
  },
  ['26M']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [19, 46],
      [4, 47],
    ],
  },
  ['26Q']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [28, 22],
      [6, 23],
    ],
  },
  ['26H']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [33, 16],
      [4, 17],
    ],
  },
  ['27L']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [8, 122],
      [4, 123],
    ],
  },
  ['27M']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [22, 45],
      [3, 46],
    ],
  },
  ['27Q']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [8, 23],
      [26, 24],
    ],
  },
  ['27H']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [12, 15],
      [28, 16],
    ],
  },
  ['28L']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [3, 117],
      [10, 118],
    ],
  },
  ['28M']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [3, 45],
      [23, 46],
    ],
  },
  ['28Q']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [4, 24],
      [31, 25],
    ],
  },
  ['28H']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [11, 15],
      [31, 16],
    ],
  },
  ['29L']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [7, 116],
      [7, 117],
    ],
  },
  ['29M']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [21, 45],
      [7, 46],
    ],
  },
  ['29Q']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [1, 23],
      [37, 24],
    ],
  },
  ['29H']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [19, 15],
      [26, 16],
    ],
  },
  ['30L']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [5, 115],
      [10, 116],
    ],
  },
  ['30M']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [19, 47],
      [10, 48],
    ],
  },
  ['30Q']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [15, 24],
      [25, 25],
    ],
  },
  ['30H']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [23, 15],
      [25, 16],
    ],
  },
  ['31L']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [13, 115],
      [3, 116],
    ],
  },
  ['31M']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [2, 46],
      [29, 47],
    ],
  },
  ['31Q']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [42, 24],
      [1, 25],
    ],
  },
  ['31H']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [23, 15],
      [28, 16],
    ],
  },
  ['32L']: {
    ecCodewordsPerBlock: 30,
    groups: [[17, 115]],
  },
  ['32M']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [10, 46],
      [23, 47],
    ],
  },
  ['32Q']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [10, 24],
      [35, 25],
    ],
  },
  ['32H']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [19, 15],
      [35, 16],
    ],
  },
  ['33L']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [17, 115],
      [1, 116],
    ],
  },
  ['33M']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [14, 46],
      [21, 47],
    ],
  },
  ['33Q']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [29, 24],
      [19, 25],
    ],
  },
  ['33H']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [11, 15],
      [46, 16],
    ],
  },
  ['34L']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [13, 115],
      [6, 116],
    ],
  },
  ['34M']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [14, 46],
      [23, 47],
    ],
  },
  ['34Q']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [44, 24],
      [7, 25],
    ],
  },
  ['34H']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [59, 16],
      [1, 17],
    ],
  },
  ['35L']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [12, 121],
      [7, 122],
    ],
  },
  ['35M']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [12, 47],
      [26, 48],
    ],
  },
  ['35Q']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [39, 24],
      [14, 25],
    ],
  },
  ['35H']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [22, 15],
      [41, 16],
    ],
  },
  ['36L']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [6, 121],
      [14, 122],
    ],
  },
  ['36M']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [6, 47],
      [34, 48],
    ],
  },
  ['36Q']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [46, 24],
      [10, 25],
    ],
  },
  ['36H']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [2, 15],
      [64, 16],
    ],
  },
  ['37L']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [17, 122],
      [4, 123],
    ],
  },
  ['37M']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [29, 46],
      [14, 47],
    ],
  },
  ['37Q']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [49, 24],
      [10, 25],
    ],
  },
  ['37H']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [24, 15],
      [46, 16],
    ],
  },
  ['38L']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [4, 122],
      [18, 123],
    ],
  },
  ['38M']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [13, 46],
      [32, 47],
    ],
  },
  ['38Q']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [48, 24],
      [14, 25],
    ],
  },
  ['38H']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [42, 15],
      [32, 16],
    ],
  },
  ['39L']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [20, 117],
      [4, 118],
    ],
  },
  ['39M']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [40, 47],
      [7, 48],
    ],
  },
  ['39Q']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [43, 24],
      [22, 25],
    ],
  },
  ['39H']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [10, 15],
      [67, 16],
    ],
  },
  ['40L']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [19, 118],
      [6, 119],
    ],
  },
  ['40M']: {
    ecCodewordsPerBlock: 28,
    groups: [
      [18, 47],
      [31, 48],
    ],
  },
  ['40Q']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [34, 24],
      [34, 25],
    ],
  },
  ['40H']: {
    ecCodewordsPerBlock: 30,
    groups: [
      [20, 15],
      [61, 16],
    ],
  },
}
