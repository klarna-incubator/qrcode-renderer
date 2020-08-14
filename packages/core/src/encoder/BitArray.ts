export default class BitArray {
  private buffer: string[] = []

  public padStart(length: number) {
    const { length: currentSize } = this.toString()

    if (currentSize < length) {
      this.buffer.unshift('0'.repeat(length - currentSize))
    }
  }

  public push(binary: string, length: number = binary.length) {
    this.buffer.push(binary.padStart(length, '0'))
  }

  public size() {
    return this.toString().length
  }

  public toString() {
    return this.buffer.join('')
  }

  public toUintArray() {
    return Uint8Array.from(
      this.toString()
        .split('')
        .map(Number)
    )
  }
}
