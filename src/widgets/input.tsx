import { Form, Input } from 'antd';
import React from 'react';
import { WidgetFuncType } from '../utils/create-field';

const input: WidgetFuncType = (form, p, { propsForm, fieldOptions }) => {
  const { field, more } = p
  const placeholder = more.get('placeholder') || ''
  const { label } = propsForm
  return <Form.Item {...propsForm} key={field} hasFeedback>
    {form.getFieldDecorator(field, {
      ...fieldOptions,
    })(
      <Input placeholder={placeholder} />
    )}
  </Form.Item>
}

export default input
