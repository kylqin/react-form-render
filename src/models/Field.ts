import { WrappedFormUtils } from "antd/lib/form/Form"

// export type WidgetType = 'string' | 'number' | 'boolean' | 'date' | 'time' | 'datetime' | 'date-range' | 'time-range' | 'datetime-range' | 'array' | 'object' | string
export type FieldType = string

export interface SelectOption {
  value: any
  label: string
}

type TComputedFieldPropF<T> = (form: WrappedFormUtils<any>, idx: number) => T
type TComputedFieldProp<T> = TComputedFieldPropF<T> | [string[], (...args: any[]) => T]

type ToComputed<T> = {
  [P in keyof T]?: TComputedFieldProp<T[P]>
}

// type MapProps<P extends keyof T, T> = P extends keyof T ? ['c', P] : null
// type P_<T> = ['c', T]
// type M = MapProps<keyof FieldPropsBase, FieldPropsBase>

export interface FieldPropsBase {
  field: string
  title: string
  type: FieldType
  widget: string
  span: number
  hidden: boolean
  readonly: boolean
  disabled: boolean
  required: boolean
  tooltip: string
  extra: string
  options: SelectOption[]
  initialValue?: any,
}

type FieldComputeProps = ToComputed<FieldPropsBase>


export interface FieldProps extends FieldPropsBase {
  compute: FieldComputeProps
  more: Map<string, any>
  properties: FieldProps[]
}

export interface FieldPropsOptional extends Partial<FieldPropsBase> {
  span?: number
  more?: object
  properties?: FieldPropsOptional[]
  [prop: string]: any // 'c:propName' : Partial<FieldComputedProps>
}

type TSafeTypeOption = { readonly?: boolean, disabled?: boolean, form?: WrappedFormUtils<any> }

const defaultField = safeField({}, {}, true)

export function safeField (o: FieldPropsOptional, sto: TSafeTypeOption, noCompute = false) : FieldProps {
  let c = o
  if (!noCompute) {
    c = computedProps(o, sto.form!)
  }

  return {
    field: c.field || '',
    title: c.title || '',
    type: c.type || 'string',
    widget: c.widget || 'input',
    span: c.span || 1,
    hidden: c.hidden || false,
    readonly: sto.readonly || c.readonly || false,
    disabled: sto.disabled || c.disabled || false,
    required: c.required || false,
    tooltip: c.tooltip || '',
    extra: c.extra || '',
    options: c.options || [],
    more: c.more ? new Map(Object.entries(c.more)) : new Map(),
    initialValue: c.initialValue,
    properties: (((c.type === 'array' || c.type === 'object') && c.properties) || []).map(f => safeField(f, sto)),
    compute: c.compute
  }
}

function computedProps (o: FieldPropsOptional, form: WrappedFormUtils<any>): FieldPropsOptional {
  let computed: FieldPropsOptional
  const compute: FieldComputeProps = Object.keys(o)
    .filter(k => k.startsWith('c:'))
    .reduce((acc, k) => {
      const vk = k.slice(2)
      if (vk in defaultField) {
        return { ...acc, [vk]: o[k] }
      } else {
        console.warn(`${k} is an invalid compute field property!`)
        return acc
      }
    }, {})

  computed = Object.keys(defaultField).reduce((acc, k) => {
    let v = o[k]
    const cmp = compute[k as keyof FieldPropsBase]
    if (cmp) {
      v = computedValue(cmp, form)
    }
    return { ...acc, [k]: v }
  }, {})
  computed.compute = compute

  return computed
}

export function computedValue<T> (cmp: TComputedFieldProp<T>, form: WrappedFormUtils<any>, idx: number = -1): T {
  if (typeof cmp === 'function') {
    return cmp(form, idx)
  } else {
    const [args, c] = cmp
    const params = args.map((a: string) => form.getFieldsValue([a])[a]).concat(idx)
    return c.apply(null, params)
  }
}

export function defaultValue(ft: FieldType): any {
  switch (ft) {
    case 'string':
      return ''
    case 'number':
      return 0
    case 'boolean':
      return false
    case 'date':
    case 'time':
    case 'datetime':
    case 'month':
    case 'week':
      return undefined
    case 'array':
      return []
    case 'object':
      return {}
  }
}