import React from 'react'
import ReactFromRender from '../react-form-render'
import { fgen } from './_helpers'
import Template from './_template'

const f = () => fgen('_week')

const fields = [
  { field: f(), title: 'Week', type: 'week', widget: 'week', more: {} },
]

export default {
  title: 'WeekPicker'
};


export const weeks: React.FC = () => {
  const formProps = {
    fields,
  }

  return <Template
    column={2}
    configForm={cfg => <ReactFromRender {...formProps} {...cfg} />}
  />
}
