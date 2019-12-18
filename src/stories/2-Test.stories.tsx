import Template from './template'

import React from 'react'
import { injectFieldProps } from '../utils/inject-field-props'
import BigForm from '../demo/BigForm'
import { fields } from '../demo/fields'

export default {
  title: 'All'
};


export const App: React.FC = () => {
  const formProps = {
    fields: injectFieldProps(
      fields,
      { 'switch01:title': '注入的Title' },
      {
        'ops-ABC': [{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }],
        'obj01.input02:title': '注入的Title 哈哈',
        'arr01[].input02:extra': '这是一个注入的EXTRA~'
      }
    )
  }

  return <Template
    configForm={cfg => <BigForm {...formProps} {...cfg} />}
  />
}
