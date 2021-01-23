import encoder from './encoder'
import { interleave } from './interleave'
import { errorCorrection } from './errorCorrection'
import { renderModules } from './renderer'

export const createModuleDefinition = (input: string) => {
  const { version, level, data } = encoder(input)
  const message = interleave(errorCorrection(version, level, data))

  return renderModules({ version, level, data: message })
}
