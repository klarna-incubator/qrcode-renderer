const NodeTextEncoder = global.TextEncoder
  ? global.TextEncoder
  : require('util').TextEncoder

export default NodeTextEncoder
