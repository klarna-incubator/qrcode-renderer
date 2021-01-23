type Group = {
  codewords: number[]
  errorCorrection: number[]
}

export const interleave = (groups: Group[]) => {
  const maximumCodewordSize = groups.reduce(
    (acc, curr) => Math.max(acc, curr.codewords.length),
    0
  )
  const maximumErrorCorrectionSize = groups.reduce(
    (acc, curr) => Math.max(acc, curr.errorCorrection.length),
    0
  )

  const interleavedCodewords = Array(maximumCodewordSize)
    .fill(0)
    .flatMap((_zero, index) =>
      groups
        .map(group => group.codewords[index])
        .filter(value => value !== undefined)
    )

  const interleavedErrorCorrection = Array(maximumErrorCorrectionSize)
    .fill(0)
    .flatMap((_zero, index) =>
      groups
        .map(group => group.errorCorrection[index])
        .filter(value => value !== undefined)
    )

  const bitString = [...interleavedCodewords, ...interleavedErrorCorrection]
    .map(number => number.toString(2).padStart(8, '0'))
    .join('')

  return Uint8Array.from(Array.from(bitString).map(Number))
}
