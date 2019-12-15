// export type FieldType = 'string' | 'number' | 'boolean' | 'date' | 'time' | 'datetime' | 'array' | 'object' | string
export type FieldType = string

export interface SelectOption {
  value: any
  label: string
}

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

export interface FieldProps extends FieldPropsBase {
  more: Map<string, any>
  properties: FieldProps[]
}

export interface FieldPropsOptional extends Partial<FieldPropsBase> {
  span?: number
  more?: object
  properties: FieldPropsOptional[]
}


export function safeField (o: FieldPropsOptional) : FieldProps {
  return {
    field: o.field || '',
    title: o.title || '',
    type: o.type || 'string',
    widget: o.widget || 'input',
    span: o.span || 1,
    hidden: o.hidden || false,
    readonly: o.readonly || false,
    disabled: o.disabled || false,
    required: o.required || false,
    tooltip: o.tooltip || '',
    extra: o.tooltip || '',
    options: o.options || [],
    more: o.more ? new Map(Object.entries(o.more)) : new Map(),
    initialValue: o.initialValue,
    properties: (((o.type === 'array' || o.type === 'object') && o.properties) || []).map(safeField)
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
      return ''
    case 'array':
      return []
    case 'object':
      return {}
  }
}