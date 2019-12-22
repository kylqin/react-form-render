import React from 'react'
import ReactFromRender from '../react-form-render'
import { fgen } from './_helpers'
import Template from './_template'

const f = () => fgen('_datetime')

const fields = [
  { field: f(), title: 'Date', type: 'date', widget: 'datetime', more: {} },
]

export default {
  title: 'Datetime'
};


export const datetimes: React.FC = () => {
  const formProps = {
    fields,
  }

  return <Template
    column={2}
    configForm={cfg => <ReactFromRender {...formProps} {...cfg} />}
  />
}
