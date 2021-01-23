import encoder from './encoder'
import { interleave } from './interleave'
import { errorCorrection } from './errorCorrection'
import { generateMatrix } from './renderer/matrix'

export const createModuleDefinition = (input: string) => {
  const { version, level, data } = encoder(input)
  const message = interleave(errorCorrection(version, level, data))

  return generateMatrix({ version, level, data: message })
}
