import { Form, Switch } from 'antd';
import { WidgetFuncType } from '../utils/create-field';
import { Select } from 'antd';
import React from 'react';
import { FieldProps } from '../models/Field';
const { Option } = Select

const select: WidgetFuncType = (form, p, { propsForm, fieldOptions }) => {
  const { field, options, more } = p
  const mode = more.get('mode')
  const placeholder = more.get('placeholder') || ''
  const { label } = propsForm

  return <Form.Item key={field} label={label} hasFeedback={false}>
    {form.getFieldDecorator(field, {
      ...fieldOptions,
    })(
      <Select mode={mode} placeholder={placeholder}>
        {options.map(({ value, label}) => <Option key={value} value={value}>{label}</Option>)}
      </Select>
    )}
  </Form.Item>
}

export default select
