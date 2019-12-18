import { Form, Select } from 'antd';
import React from 'react';
import { WidgetFuncType } from '../utils/create-field';
const { Option } = Select

const select: WidgetFuncType = (form, p, { propsForm, fieldOptions, propsWidget }, cfOptions) => {
  const { field, options, more } = p
  const mode = more.get('mode')
  const placeholder = more.get('placeholder') || ''

  return <Form.Item {...propsForm} key={field} hasFeedback>
    {form.getFieldDecorator(field, {
      ...fieldOptions,
    })(
      <Select
        {...propsWidget}
        style={{ width: '100%' }}
        mode={mode}
        placeholder={placeholder}
      >
        {options.map(({ value, label}) => <Option key={value} value={value}>{label}</Option>)}
      </Select>
    )}
  </Form.Item>
}

export default select
