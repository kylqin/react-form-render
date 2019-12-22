import React from 'react'
import ReactFromRender from '../react-form-render'
import { fgen } from './_helpers'
import Template from './_template'

const f = () => fgen('_datetimerange')

const fields = [
  { field: f(), title: 'DateTimeRange', type: 'array', widget: 'datetime-range', more: {} },
]

export default {
  title: 'DatetimeRange'
};


export const datetimeRanges: React.FC = () => {
  const formProps = {
    fields,
  }

  return <Template
    column={2}
    configForm={cfg => <ReactFromRender {...formProps} {...cfg} />}
  />
}
