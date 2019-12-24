import React from 'react'
import ReactFromRender from '../react-form-render'
import { fgen } from './_helpers'
import Template from './_template'
import { Icon } from 'antd'

const f = () => fgen('_input')

const fields = [
  { field: f(), title: 'Rate', type: 'number', widget: 'rate' },
  { field: f(), title: 'Rate initialValue', type: 'number', widget: 'rate', initialValue: 3 },
  { field: f(), title: 'DIS Allow Clear', type: 'number', widget: 'rate', more: { allowClear: false } },
  { field: f(), title: 'Allow Half', type: 'number', widget: 'rate', initialValue: 3.5, more: { allowHalf: true } },
  { field: f(), title: 'Auto Focus', type: 'number', widget: 'rate', more: { autoFocus: true } },
  { field: f(), title: 'Character', type: 'number', widget: 'rate', more: { character: 'M' } },
  { field: f(), title: 'Character', type: 'number', widget: 'rate', more: { character: <Icon type='heart' /> } },
  { field: f(), title: 'className', type: 'number', widget: 'rate', more: { className: 'bad-classname'} },
  { field: f(), title: 'Count', type: 'number', widget: 'rate', more: { count: 7 } },
]

export default {
  title: 'Rate'
};

export const Rates: React.FC = () => {
  const formProps = {
    fields
  }

  return <Template
    configForm={cfg => <ReactFromRender {...formProps} {...cfg} />}
  />
}
