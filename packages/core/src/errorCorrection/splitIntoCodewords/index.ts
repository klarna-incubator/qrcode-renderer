export const splitIntoCodewords = (data: string): string[] => {
  if (data.length <= 8) {
    // No need to pad the data, as we know it will be always 8 in size
    return [data]
  }

  return [data.slice(0, 8), ...splitIntoCodewords(data.slice(8))]
}
