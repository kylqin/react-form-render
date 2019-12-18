// import { Select, Switch } from 'antd'
import Select from 'antd/es/select'
import 'antd/es/select/style'
import Switch from 'antd/es/switch'
import 'antd/es/switch/style'

import React, { useState } from 'react'
import '../demo/App.css'
import '../style.less'
import { injectFieldProps } from '../utils/inject-field-props'
import BigForm from '../demo/BigForm'
import { fields } from '../demo/fields'

export default {
  title: 'Test---',
};


const { Option } = Select

export const App: React.FC = () => {
  const [layout, setLayout] = useState('horizontal')
  const [column, setColumn] = useState(3)
  const [disabled, setDisabled] = useState(false)

  const formProps = {
    fields: injectFieldProps(
      fields,
      { 'switch01:title': '注入的Title' },
      {
        'ops-ABC': [{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }],
        'obj01.input02:title': '注入的Title 哈哈',
        'arr01[].input02:extra': '这是一个注入的EXTRA~'
      }
    ),
    layout,
    column,
    disabled
  }

  return (
    <div className="App">
      <label className='settings-label'>Layout:</label>
      <Select value={layout} onChange={setLayout}>
        <Option value='vertical'>vertical</Option>
        <Option value='horizontal'>horizontal</Option>
        <Option value='inline'>inline</Option>
      </Select>

      <label className='settings-label'>Column:</label>
      <Select value={column} onChange={setColumn}>
        <Option value='1'>1</Option>
        <Option value='2'>2</Option>
        <Option value='3'>3</Option>
        <Option value='4'>4</Option>
      </Select>

      <label className='settings-label'>Disabled:</label>
      <Switch checked={disabled} onChange={setDisabled} />


      <div className='form-container'>
        <BigForm {...formProps} />
      </div>
    </div>
  );
}
