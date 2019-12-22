import React from 'react'
import ReactFromRender from '../react-form-render'
import { injectFieldProps } from '../utils/inject-field-props'
import { fgen } from './helpers'
import Template from './template'

const f = () => fgen('_input')

const fields = [
  { field: f(), title: 'Input', type: 'string', widget: 'input' },
  { field: f(), title: 'Input Extra', type: 'string', widget: 'input', extra: '看起来这是一个Extra'  },
  { field: f(), title: 'Input Tootip', type: 'string', widget: 'input', tooltip: '这就是传说中的Tooltip!' },
  { field: f(), title: 'Input password', type: 'string', widget: 'input', more: { type: 'password' } },
  { field: f(), title: 'Input prefix', type: 'string', widget: 'input', more: { prefix: '$' } },
  { field: f(), title: 'Input suffix', type: 'string', widget: 'input', more: { suffix: 'RMB' } },
  { field: f(), title: 'Input p&s fix', type: 'string', widget: 'input', more: { prefix: '$', suffix: '&' } },
  { field: f(), title: 'Input MaxLength', type: 'string', widget: 'input', more: { maxLength: 3 } },
  { field: f(), title: 'Input allowClear', type: 'string', widget: 'input', more: { allowClear: true } },
  { field: f(), title: 'Input onPressEnter', type: 'string', widget: 'input', more: { onPressEnter: (...args: any[]) => { console.log('onPressEnter: ', ...args)} } },
  { field: f(), title: 'Input addonAfter', type: 'string', widget: 'input', more: { addonAfter: '%' } },
  { field: f(), title: 'Input addonBefore', type: 'string', widget: 'input', more: { addonBefore: '+86' } },
]

export default {
  title: 'Input'
};


export const Inputs: React.FC = () => {
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
