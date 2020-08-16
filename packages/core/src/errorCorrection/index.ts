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

  const polies = blocks
    .map(codewords => Polinomial.fromCoef(codewords.slice().reverse()))
    .map(poly =>
      // We "prepare" the polinomials so they don't become too small during division
      poly.multiply(Polinomial.fromCoefExponents({ [ecCodewordsPerBlock]: 0 }))
    )

  const generator = createGeneratorPolinomial(ecCodewordsPerBlock)

  const ecCodewords = polies
    .map(poly => {
      console.log({ poly })
      const offsetGenerator = generator.multiply(
        Polinomial.fromCoefExponents({
          // We want the generator to have the same greater power as poly
          [poly.greaterPower() - generator.greaterPower()]: 0,
        })
      )

      return poly.divide(offsetGenerator)
    })
    .map(poly => poly.toCoef())

  // REVIEW: possibly we'll want to return the blocks themselves
  return ecCodewords
}
