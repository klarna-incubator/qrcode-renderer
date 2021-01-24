import { wrapWithQuietZone } from '../fixedPatterns/quietZone'
import { Matrix } from '../types'
import { penalizeConsecutivesInRow } from './rules/consecutives'
import { penalizePatternInRow } from './rules/pattern'
import { penalizeRatioOfColors } from './rules/ratio'
import { penalizeSquaresInRow } from './rules/squares'

const penalize = (maskedMatrix: Matrix) => {
  let runP = 0
  let boxP = 0
  let findP = 0
  let baIP = 0

  for (let y = 0; y < maskedMatrix.length; ++y) {
    const row = maskedMatrix[y]
    runP += penalizeConsecutivesInRow(row)
    findP += penalizePatternInRow(row)

    const column = maskedMatrix.map(row => row[y])
    runP += penalizeConsecutivesInRow(column)
    findP += penalizePatternInRow(column)

    boxP += penalizeSquaresInRow(maskedMatrix, y)
  }

  baIP += penalizeRatioOfColors(maskedMatrix)

  return runP + findP + boxP + baIP
}

export const decideBestMask = (maskedMatrices: Matrix[]) => {
  const penalties = maskedMatrices.map(penalize)
  const lesserPenalty = Math.max(...penalties)

  return wrapWithQuietZone(
    maskedMatrices[penalties.findIndex(penalty => lesserPenalty === penalty)]
  )
}
