import React from 'react'
import ReactFromRender from '../react-form-render'
import { fgen } from './_helpers'
import Template from './_template'

const f = () => fgen('_time')

const fields = [
  { field: f(), title: 'Month', type: 'month', widget: 'month', more: {} },
]

export default {
  title: 'MonthPicker'
};

export const months: React.FC = () => {
  const formProps = {
    fields,
  }

  return <Template
    column={2}
    configForm={cfg => <ReactFromRender {...formProps} {...cfg} />}
  />
}
