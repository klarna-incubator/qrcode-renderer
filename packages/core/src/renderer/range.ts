/**
 * Creates an array with `size` elements that starts with `start` and increases with a pace of 1.
 * @param start The first item's value
 * @param size The length of the returned array
 *
 * @example range(2, 3) // [2, 3, 4]
 * @example range(10, 1) // [10]
 */
export const range = (start: number, size: number) =>
  new Array(size).fill(start).map((num, position) => num + position)
