import { Level } from '../level'
import { ecCodewordsPerVersion } from './eccodewordsPerVersion'
import { createGeneratorPolinomial } from './generatorPolinomial'
import { groupCodewordsInBlocks } from './groupCodewordsInBlocks'
import { Polinomial } from './Polinomial'
import { splitIntoCodewords } from './splitIntoCodewords'

export const errorCorrection = (
  version: number,
  level: Level,
  data: string
) => {
  const { ecCodewordsPerBlock, group1, group2 } = ecCodewordsPerVersion[
    `${version}${level}`
  ]

  const codewords = splitIntoCodewords(data).map(codeword =>
    parseInt(codeword, 2)
  )

  const blocks = groupCodewordsInBlocks(codewords, { group1, group2 })

  const polies = blocks.map(codewords =>
    Polinomial.fromCoef(codewords.slice().reverse())
  )

  const generator = createGeneratorPolinomial(ecCodewordsPerBlock)

  // TODO: prepare both polies and generator by multiplying by stuff
  const ecCodewords = polies.map(poly =>
    // TODO: divide poly by generator
    poly.divide(generator)
  )

  // REVIEW: possibly we'll want to return the blocks themselves
  return ecCodewords
}
