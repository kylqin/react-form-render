import { FieldPropsOptional } from '../models/Field'

export function injectFieldProps (fields: FieldPropsOptional[], ...toInjectsArgs: { [p: string]: any }[])
  : FieldPropsOptional[] {
    const ijMap = toInjectsArgs.reduce((acc, tij) => Object.assign(acc, tij), {})

    const rec = (fields: FieldPropsOptional[], parentFieldName: string) => {
      return fields.map(f => {
        let newF: FieldPropsOptional = Object.keys(f).reduce((acc, prop) => {
          if (prop.startsWith('ij:')) {
            const realProp = prop.slice(3)
            const injectKey = f[prop] || parentFieldName + f.field + ':' + realProp
            return { ...acc, [realProp]: ijMap[injectKey] }
          } else {
            return { ...acc, [prop]: f[prop] }
          }
        }, {})

        if (newF.properties && newF.properties.length) {
          if (newF.widget === 'array') {
            newF.properties = rec(newF.properties, (newF.field || '') + '[].')
          } else if (newF.widget === 'object') {
            newF.properties = rec(newF.properties, (newF.field || '') + '.')
          }
        }

        return newF
      })
    }

    return rec(fields, '')
}
