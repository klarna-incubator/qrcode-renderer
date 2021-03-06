// window in browsers, global in node
// We need the fallback to this so we keep supporting IE 11
export default globalThis ?? window ?? global
