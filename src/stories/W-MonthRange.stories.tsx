import React from 'react'
import ReactFromRender from '../react-form-render'
import { fgen } from './_helpers'
import Template from './_template'

const f = () => fgen('_time')

const fields = [
  { field: f(), title: 'MonthRange', type: 'array', widget: 'month-range', more: {} },
]

export default {
  title: 'MonthRanePicker'
};

export const monthRanges: React.FC = () => {
  const formProps = {
    fields,
  }

  return <Template
    column={2}
    configForm={cfg => <ReactFromRender {...formProps} {...cfg} />}
  />
}
