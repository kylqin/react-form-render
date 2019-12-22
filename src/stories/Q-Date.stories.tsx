import React from 'react'
import ReactFromRender from '../react-form-render'
import { fgen } from './_helpers'
import Template from './_template'

const f = () => fgen('_date')

const fields = [
  { field: f(), title: 'Date', type: 'date', widget: 'date', more: {} },
  { field: f(), title: 'Dacade', type: 'date', widget: 'date', more: { mode: 'dacade' } },
]

export default {
  title: 'Date'
};


export const dates: React.FC = () => {
  const formProps = {
    fields,
  }

  return <Template
    column={2}
    configForm={cfg => <ReactFromRender {...formProps} {...cfg} />}
  />
}
