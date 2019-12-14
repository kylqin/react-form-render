import React, { useState } from 'react';
import { Select, Button } from 'antd'
import './App.css';
import BigForm from './BigForm'
import { fields } from './fields';

const { Option } = Select

const App: React.FC = () => {
  const [layout, setLayout] = useState('vertical')
  const [column, setColumn] = useState(2)

  const formProps = {
    fields,
    layout,
    column
  }

  const addItem = () => {
    // setFields()
  }

  return (
    <div className="App">
      <Select value={layout} onChange={setLayout}>
        <Option value='vertical'>vertical</Option>
        <Option value='horizontal'>horizontal</Option>
        <Option value='inline'>inline</Option>
      </Select>

      <Select value={column} onChange={setColumn}>
        <Option value='1'>1</Option>
        <Option value='2'>2</Option>
        <Option value='3'>3</Option>
        <Option value='4'>4</Option>
      </Select>

      <Button onChange={addItem}>新增</Button>


      <div className='form-container'>
        <BigForm {...formProps} />
      </div>
    </div>
  );
}

export default App;
