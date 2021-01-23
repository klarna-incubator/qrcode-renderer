import { TIMING_FIXED_POSITION } from './fixedPatterns/timing'
import Pixel, { PixelValue } from './pixel'
import { Matrix } from './types'

const direction = {
  UP: 'up',
  DOWN: 'down',
} as const

type Direction = typeof direction[keyof typeof direction]

// We need a special function for this because we can't move over the timing vertical position
const goToNextColumn = (x: number) => {
  if (x - 1 === TIMING_FIXED_POSITION) {
    return x - 2
  } else {
    return x - 1
  }
}

const getNextPosition = (
  matrix: Matrix,
  position: { x: number; y: number; direction: Direction }
) => {
  const distanceToRight = matrix.length - 1 - position.x
  const shouldGoLeft =
    position.x > TIMING_FIXED_POSITION
      ? distanceToRight % 2 === 0
      : distanceToRight % 2 === 1

  if (shouldGoLeft) {
    return {
      x: position.x - 1,
      y: position.y,
      direction: position.direction,
    }
  }

  if (position.direction === direction.UP) {
    const shouldTurnAround = position.y === 0

    if (shouldTurnAround) {
      return {
        x: goToNextColumn(position.x),
        y: position.y,
        direction: direction.DOWN,
      }
    } else {
      return {
        x: position.x + 1,
        y: position.y - 1,
        direction: direction.UP,
      }
    }
  } else {
    const shouldTurnAround = position.y === matrix.length - 1

    if (shouldTurnAround) {
      return {
        x: goToNextColumn(position.x),
        y: position.y,
        direction: direction.UP,
      }
    } else {
      return {
        x: position.x + 1,
        y: position.y + 1,
        direction: direction.DOWN,
      }
    }
  }
}

const isLastPosition = (matrix: Matrix, position: { x: number; y: number }) =>
  position.x === 0 && position.y === matrix.length - 1

export const addDataBits = (data: Uint8Array, matrix: Matrix) => {
  let position = {
    x: matrix.length - 1,
    y: matrix.length - 1,
    direction: direction.UP as Direction,
  }
  let dataIndex = 0

  do {
    if (matrix[position.y][position.x] === Pixel.EMPTY) {
      matrix[position.y][position.x] = data[dataIndex] as PixelValue
      dataIndex = dataIndex + 1
    }

    position = getNextPosition(matrix, position)
  } while (!isLastPosition(matrix, position))
}
