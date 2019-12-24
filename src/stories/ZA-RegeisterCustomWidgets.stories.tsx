import React from 'react'
import ReactFromRender from '../react-form-render'
import { fgen } from './_helpers'
import Template from './_template'
import number_  from '../widgets/number';
import { registerWidget } from '../utils/register-widget'

const f = () => fgen('_custom')

registerWidget('custom', number_)

const fields = [
  { field: f(), title: 'Custom', type: 'number', widget: 'custom' }
]

export default {
  title: 'Register Custom'
};


export const customs: React.FC = () => {
  const formProps = {
    fields,
  }

  return <Template
    configForm={cfg => <ReactFromRender {...formProps} {...cfg} />}
  />
}
