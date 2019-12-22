import React from 'react'
import ReactFromRender from '../react-form-render'
import { fgen } from './_helpers'
import Template from './_template'

const f = () => fgen('_input')

const options = [
  { value: 'a', label: '男' },
  { value: 'b', label: '女' },
  { value: 'c', label: '其他' },
]

const fields = [
  { field: 'radio', title: 'Radio', type: 'object', widget: 'object', properties: [
    { field: f(), title: 'Radio', type: 'boolean', widget: 'radio', options },
    { field: f(), title: 'Disabled items', type: 'boolean', widget: 'radio', options: options, more: { disabled: ['a', 'b'] } },
    { field: f(), title: 'Radio initialValue', type: 'boolean', widget: 'radio', options: options, initialValue: 'a' },
  ]},

  { field: 'radiobtn', title: 'RadioButton', type: 'object', widget: 'object', properties: [
    { field: f(), title: 'Radio', type: 'boolean', widget: 'radio-button', options },
    { field: f(), title: 'Disabled items', type: 'boolean', widget: 'radio-button', options: options, more: { disabled: ['a', 'b'] } },
    { field: f(), title: 'Radio initialValue', type: 'boolean', widget: 'radio-button', options: options, initialValue: 'a' },
  ]}
]

export default {
  title: 'Radio'
};


export const Radios: React.FC = () => {
  const formProps = {
    fields
  }

  return <Template
    configForm={cfg => <ReactFromRender {...formProps} {...cfg} />}
  />
}
