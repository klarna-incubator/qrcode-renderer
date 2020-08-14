import { ModeValue } from '../mode'
import { getVersionSizes, getSize, levels, Level } from './sizeByMode'

export const selectErrorDetection = (
  mode: ModeValue,
  minimumVersion: number | undefined,
  level: Level | undefined,
  dataSize: number
) => {
  if (minimumVersion && (minimumVersion < 1 || minimumVersion > 40)) {
    throw new Error('Invalid QR Code version provided')
  }

  const targetVersion = findVersion(mode, level, dataSize, minimumVersion)
  const targetLevel = level ?? findLevel(mode, targetVersion, dataSize)
  const size = getSize(mode, targetVersion, targetLevel)

  return {
    version: targetVersion,
    level: targetLevel,
    size,
  }
}

const findVersion = (
  mode: ModeValue,
  level: Level | undefined,
  dataSize: number,
  minimumVersion = 1
) => {
  for (let i = minimumVersion - 1; i < 40; i++) {
    const version = i + 1
    const versionSizes = getVersionSizes(mode, version)

    /**
     * The level was not set by the user and one of the levels
     * in the current version can hold the data size
     */
    if (!level && Math.max(...versionSizes) >= dataSize) {
      return version
    }

    /**
     * The level was set by the user and the current version and level
     * can hold the data size
     */
    if (level && versionSizes[levels.indexOf(level)] >= dataSize) {
      return version
    }
  }

  throw new Error(`The data size (${dataSize}) cannot be encoded in a QR Code`)
}

const findLevel = (mode: ModeValue, version: number, dataSize: number) => {
  const versionSizes = getVersionSizes(mode, version)

  // reverse the array to find the highest level that can hold the data size
  const size = Array.from(versionSizes)
    .reverse()
    .find((size: number) => size >= dataSize) as number

  return levels[versionSizes.indexOf(size)]
}
