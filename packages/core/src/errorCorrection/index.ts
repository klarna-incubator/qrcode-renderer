import { Level } from '../level'
import { ecCodewordsPerVersion } from './ecCodewordsPerVersion'
import { createGeneratorPolinomial } from './generatorPolinomial'
import { groupCodewordsInBlocks } from './groupCodewordsInBlocks'
import { Polinomial } from './Polinomial'
import { splitIntoCodewords } from './splitIntoCodewords'

export const errorCorrection = (
  version: number,
  level: Level,
  data: string
) => {
  const { ecCodewordsPerBlock, groups } = ecCodewordsPerVersion[
    `${version}${level}`
  ]

  const codewords = splitIntoCodewords(data).map(codeword =>
    parseInt(codeword, 2)
  )

  const blocks = groupCodewordsInBlocks(codewords, groups)

  const generator = createGeneratorPolinomial(ecCodewordsPerBlock)

  const polies = blocks
    .map(codewords => Polinomial.fromCoef(codewords.slice().reverse()))
    .map(poly =>
      // We "prepare" the polinomials so they divide the correct number of times
      poly.multiply(
        Polinomial.fromCoefExponents({ [generator.greaterPower()]: 0 })
      )
    )

  const ecCodewords = polies
    .map(poly => poly.modulo(generator))
    .map(poly => poly.toCoef())
    // the way the return is expected is from greaterPower -> lesserPower
    .map(codewords => codewords.reverse())

  return blocks.map((block, index) => ({
    codewords: block,
    errorCorrection: ecCodewords[index],
  }))
}
