/**
 *  Use this function when you want to find something in an array while signaling
 *  TS you know for sure the element will be there.
 */
export const ensure = <Item>(
  callback: (item: Item) => boolean,
  array: Item[]
) => {
  const result = array.find(callback)

  if (result === undefined) {
    throw new Error(
      'Invariant failed: element is not in array when searching with ensure'
    )
  }

  return result
}
