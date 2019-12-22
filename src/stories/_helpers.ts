let fid = 0
export function fgen (prefix: string = '_field'): string {
  return prefix + String(++fid).padStart(5, '0')
}