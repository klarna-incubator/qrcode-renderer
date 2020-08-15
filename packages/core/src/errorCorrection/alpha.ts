const log2 = (n: number) => Math.log(n) / Math.log(2)

// get exponent from GF(256)
export const logAlpha = (n: number): number => {
  const log2n = log2(n)

  // If n is a base of 2, use it
  if (Math.floor(log2n) === log2n) {
    return log2n
  }

  const half = (n % 2 ? n ^ 285 : n) / 2

  return logAlpha(half) + 1
}

// get GF(256) from exponent
export const antilogAlpha = (exponent: number): number => {
  if (exponent < 8) {
    return 2 ** exponent
  }

  const previousAntilog = antilogAlpha(exponent - 1)
  const nextPower = 2 * previousAntilog

  if (nextPower >= 256) {
    return nextPower ^ 285
  }

  return nextPower
}
