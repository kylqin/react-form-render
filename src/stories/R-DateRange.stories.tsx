import React from 'react'
import ReactFromRender from '../react-form-render'
import { fgen } from './_helpers'
import Template from './_template'

const f = () => fgen('_daterange')

const fields = [
  { field: f(), title: 'DateRange', type: 'array', widget: 'date-range', more: {} },
]

export default {
  title: 'DateRange'
};


export const dateRanges: React.FC = () => {
  const formProps = {
    fields,
  }

  return <Template
    column={2}
    configForm={cfg => <ReactFromRender {...formProps} {...cfg} />}
  />
}
