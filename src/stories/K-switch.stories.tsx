import React from 'react'
import ReactFromRender from '../react-form-render'
import { fgen } from './_helpers'
import Template from './_template'
import './_classname.css'

const f = () => fgen('_switch')

const fields = [
  { field: f(), title: 'Switch', type: 'boolean', widget: 'switch' },
  { field: f(), title: 'InitialValue', type: 'boolean', widget: 'switch', initialValue: true },
  { field: f(), title: 'autoFocus', type: 'boolean', widget: 'switch', more: { autoFocus: true } },
  { field: f(), title: 'checkedChildren', type: 'boolean', widget: 'switch', more: { checkedChildren: '是的' } },
  { field: f(), title: 'unCheckedChildren', type: 'boolean', widget: 'switch', more: { unCheckedChildren: '否' } },
  { field: f(), title: 'loading', type: 'boolean', widget: 'switch', more: { loading: true } },
  { field: f(), title: 'size', type: 'boolean', widget: 'switch', more: { size: 'small' } },
  { field: f(), title: 'className', type: 'boolean', widget: 'switch', more: { className: 'switch-classname' } },
]

export default {
  title: 'Switch'
};


export const Switchs: React.FC = () => {
  const formProps = {
    fields,
  }

  return <Template
    configForm={cfg => <ReactFromRender {...formProps} {...cfg} />}
  />
}
