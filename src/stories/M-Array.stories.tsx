import React from 'react'
import ReactFromRender from '../react-form-render'
import { fgen } from './_helpers'
import Template from './_template'

const f = () => fgen('_field')

const fields = [
  { field: 'array', title: 'Array', type: 'array', widget: 'array', initialValue: [{}], properties: [
    { field: f(), title: '电影', type: 'string', widget: 'input' },
    { field: f(), title: '导演', type: 'string', widget: 'input' },
    { field: f(), title: '主演', type: 'array', widget: 'select', options: [{ value: 'a', label: 'A' },{ value: 'b', label: 'B' }], more: { mode: 'multiple' } },
    { field: f(), title: '评分', type: 'number', widget: 'rate' },
  ]}
]

export default {
  title: 'Array'
};


export const arrays: React.FC = () => {
  const formProps = {
    fields,
  }

  return <Template
    configForm={cfg => <ReactFromRender {...formProps} {...cfg} />}
  />
}
