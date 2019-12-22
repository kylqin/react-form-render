import { Select, Switch, Radio } from 'antd'
import React, { useState, ReactNode } from 'react'
import './_template.css'

const { Option } = Select

type TTemplateProps = {
  layout?: string
  column?: number
  disabled?: boolean
  configForm: (cfg: { layout: string, column: number, disabled: boolean }) => ReactNode
}

const Template: React.FC<TTemplateProps> = (props) => {
  const [layout, setLayout] = useState(props.layout || 'horizontal')
  const [column, setColumn] = useState(props.column || 3)
  const [disabled, setDisabled] = useState(props.disabled || false)

  const { configForm } = props

  return (
    <div className="App">
      <div style={{
        borderBottom: '1px solid #DDD',
        padding: '10px 0',
        position: 'sticky',
        top: 0,
        background: 'white',
        left: '-10px',
        right: '-10px',
        zIndex: 999
      }}>
        <label className='settings-label'>Layout:</label>
        <Radio.Group value={layout} onChange={(e: any) => setLayout(e.target.value)}>
          <Radio.Button value='vertical'>vertical</Radio.Button>
          <Radio.Button value='horizontal'>horizontal</Radio.Button>
        </Radio.Group>

        <label className='settings-label'>Column:</label>
        <Select value={column} onChange={setColumn}>
          <Option value='1'>1</Option>
          <Option value='2'>2</Option>
          <Option value='3'>3</Option>
          <Option value='4'>4</Option>
        </Select>

        <label className='settings-label'>Disabled:</label>
        <Switch checked={disabled} onChange={setDisabled} />
      </div>


      <div className='form-container'>
        {configForm({ layout, column, disabled })}
      </div>
    </div>
  );
}

export default Template