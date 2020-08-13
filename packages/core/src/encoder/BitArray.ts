export default class BitArray {
  public static fromBinaryString(binary: string) {
    return Uint8Array.from(binary.split('').map(Number))
  }

  private buffer: string[] = []

  public push(binary: string, length: number) {
    this.buffer.push(binary.padStart(length, '0'))
  }

  public toUintArray() {
    return Uint8Array.from(
      this.buffer
        .join('')
        .split('')
        .map(Number)
    )
  }
}
