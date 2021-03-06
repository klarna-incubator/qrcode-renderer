import global from './global'

export const TextEncoder =
  'TextEncoder' in global
    ? // browsers
      global.TextEncoder
    : // nodejs
      require('util').TextEncoder
