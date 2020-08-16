const log2 = (n: number) => Math.log(n) / Math.log(2)

const logMemo: Record<number, number> = {}
const antilogMemo: Record<number, number> = {}

/**
 * logAlpha := gf -> alpha exponent
 */
export const logAlpha = (n: number): number => {
  n = Math.abs(n) % 256

  if (logMemo[n] !== undefined) {
    return logMemo[n]
  }

  const log2n = log2(n)

  // If n is a base of 2, use it
  if (Math.floor(log2n) === log2n) {
    logMemo[n] = log2n
    antilogMemo[log2n] = n
    return log2n
  }

  const half = (n % 2 ? n ^ 285 : n) / 2
  const result = logAlpha(half) + 1

  logMemo[n] = result
  antilogMemo[result] = n
  return result
}

/**
 * antilogAlpha := alpha exponent -> gf
 */
export const antilogAlpha = (exponent: number): number => {
  exponent = Math.abs(exponent) % 255

  if (antilogMemo[exponent] !== undefined) {
    return antilogMemo[exponent]
  }

  if (exponent < 8) {
    const result = 2 ** exponent

    antilogMemo[exponent] = result
    logMemo[result] = exponent

    return result
  }

  const previousAntilog = antilogAlpha(exponent - 1)
  const nextPower = 2 * previousAntilog

  if (nextPower >= 256) {
    const result = nextPower ^ 285

    antilogMemo[exponent] = result
    logMemo[result] = exponent

    return result
  }

  antilogMemo[exponent] = nextPower
  logMemo[nextPower] = exponent

  return nextPower
}
