type TObj = { [prop: string]: any }
export function fromMore (more: Map<string, any>, keys: string[], defaults: TObj = {}): TObj {
  let result : TObj = {}
  for (const k of keys) {
    result[k] = more.get(k)
  }
  for (const k in defaults) {
    result[k] = more.get(k) || defaults[k]
  }
  return result
}

