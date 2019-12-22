import React from 'react'
import ReactFromRender from '../react-form-render'
import { fgen } from './_helpers'
import Template from './_template'

const f = () => fgen('_text')

const fields = [
  { field: f(), title: 'Text', type: 'string', widget: 'text', initialValue: '这世界真好,看' },
]

export default {
  title: 'Text'
};


export const Text: React.FC = () => {
  const formProps = {
    fields,
  }

  return <Template
    configForm={cfg => <ReactFromRender {...formProps} {...cfg} />}
  />
}
