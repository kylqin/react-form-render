import React from 'react'
import ReactFromRender from '../react-form-render'
import { injectFieldProps } from '../utils/inject-field-props'
import { fgen } from './helpers'
import Template from './template'

const f = () => fgen('_input')

const fields = [
  { field: f(), title: 'N', type: 'number', widget: 'number' },
  { field: f(), title: 'N audoFocus', type: 'number', widget: 'number', more: { autoFocus: true } },
  { field: f(), title: 'N formatter & parser', type: 'number', widget: 'number', more: { formatter: (v: number) => '-' + v} },
  { field: f(), title: 'N parser', type: 'number', widget: 'number', more: { parser: (s: string) => Math.pow(Number(s), 2) } },
  { field: f(), title: 'N max 10', type: 'number', widget: 'number', more: { max: 10 } },
  { field: f(), title: 'N min -3', type: 'number', widget: 'number', more: { min: -3 } },
  { field: f(), title: 'N precision 2', type: 'number', widget: 'number', more: { precision: 2 } },
  { field: f(), title: 'N decimalSeparator', type: 'number', widget: 'number', more: { decimalSeparator: ';' } },
  { field: f(), title: 'N size 4', type: 'number', widget: 'number', more: { size: 4 } },
  { field: f(), title: 'N step 10', type: 'number', widget: 'number', more: { step: 10 } },
  { field: f(), title: 'N onPressEnter', type: 'number', widget: 'number', more: { onPressEnter: (...args: any[]) => { console.log('onPressEnter: ', ...args)} } },
  { field: f(), title: 'N unit', type: 'number', widget: 'number', more: { unit: '吨' } },

  { field: 'ofInput', title: 'Inherit from Input', type: 'object', widget: 'object', properties: [
    { field: f(), title: 'N placeholder', type: 'number', widget: 'number', more: { placeholder: 'input number' } },
  ]}
]

export default {
  title: 'Number'
};


export const Numbers: React.FC = () => {
  const formProps = {
    fields: injectFieldProps(
      fields,
      { 'switch01:title': '注入的Title' },
      {
        'ops-ABC': [{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }],
        'obj01.input02:title': '注入的Title 哈哈',
        'arr01[].input02:extra': '这是一个注入的EXTRA~'
      }
    )
  }

  return <Template
    configForm={cfg => <ReactFromRender {...formProps} {...cfg} />}
  />
}
