const fromBinary = (binary: Uint8Array) => {
  return parseInt(binary.join(''), 2)
}

export const splitIntoCodewords = (data: Uint8Array): number[] => {
  if (data.length <= 8) {
    // No need to pad the data, as we know it will be always 8 in size
    return [fromBinary(data)]
  }

  return [fromBinary(data.slice(0, 8)), ...splitIntoCodewords(data.slice(8))]
}
