import React from 'react'
import { fgen } from './_helpers'
import RenderFields from './_renderFields'

export default {
  title: 'Widgets|Input'
};

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

export const Inputs: React.FC = () => <RenderFields fields={fields}/>
