import React from 'react'
import ReactFromRender from '../react-form-render'
import { fgen } from './_helpers'
import Template from './_template'

const f = () => fgen('_checkboxes')

const options = [
  { value: 'a', label: '男' },
  { value: 'b', label: '女' },
  { value: 'c', label: '其他' },
]

const fields = [
  { field: f(), title: 'Checkboxes', type: 'array', widget: 'checkboxes', options },
  { field: f(), title: 'Disabled items', type: 'array', widget: 'checkboxes', options: options, more: { disabled: ['a', 'b'] } },
  { field: f(), title: 'InitialValue', type: 'array', widget: 'checkboxes', options: options, initialValue: ['a', 'c'] },
]

export default {
  title: 'Checkboxes'
};


export const Checkboxes: React.FC = () => {
  const formProps = {
    fields
  }

  return <Template
    configForm={cfg => <ReactFromRender {...formProps} {...cfg} />}
  />
}
