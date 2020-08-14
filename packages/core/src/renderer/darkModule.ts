import { Coordinates, EncodingResult } from './types'
import Pixel from './pixel'

export const DarkModule = Pixel.BLACK

export const calculateDarkModuleCoordinates = ({
  version,
}: EncodingResult): Coordinates<number, 8> => [4 * version + 9, 8]
