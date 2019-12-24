import React from 'react'
import ReactFromRender from '../react-form-render'
import { fgen } from './_helpers'
import Template from './_template'

type TRenderFieldsProps = {
  fields: any[],
  column?: number
}

const RenderFields: React.FC<TRenderFieldsProps> = (props) => {
  const formProps = {
    fields: props.fields,
  }

  return <Template
    column={props.column}
    configForm={cfg => <ReactFromRender {...formProps} {...cfg} />}
  />
}

export default RenderFields