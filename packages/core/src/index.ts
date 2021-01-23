import encoder from './encoder'
import { generateMatrix } from './renderer/matrix'

export const createModuleDefinition = (input: string) => {
  return generateMatrix(encoder(input))
}
