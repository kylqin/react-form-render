import React from 'react'
import { fgen } from './_helpers'
import RenderFields from './_renderFields'

export default {
  title: 'Widgets|Checkboxes'
};

const f = () => fgen('_checkboxes')

const options = [
  { value: 'a', label: '男' },
  { value: 'b', label: '女' },
  { value: 'c', label: '其他' },
]

const fields = [
  { field: f(), title: 'Checkbox', type: 'boolean', widget: 'checkbox', more: { label: 'Checkbox' } },
  { field: f(), title: 'Checkboxes', type: 'array', widget: 'checkboxes', options },
  { field: f(), title: 'Disabled items', type: 'array', widget: 'checkboxes', options: options, more: { disabled: ['a', 'b'] } },
  { field: f(), title: 'InitialValue', type: 'array', widget: 'checkboxes', options: options, initialValue: ['a', 'c'] },
]

export const Checkboxes: React.FC = () => <RenderFields fields={fields} />
