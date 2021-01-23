import encoder from './encoder'
import { generateMatrix } from './renderer/matrix'

export const createModuleDefinition = (input: string) => {
  // TODO: this is still incomplete, here we don't have any data about error correction, for example
  return generateMatrix(encoder(input))
}
