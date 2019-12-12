import { Form, Slider } from 'antd';
import React from 'react';
import { WidgetFuncType } from '../utils/create-field';

const slider: WidgetFuncType = (form, p, { propsForm, fieldOptions }) => {
  const { field, more } = p
  const { label } = propsForm
  const marks = more.get('marks') || {}

  return <Form.Item key={field} label={label} hasFeedback={false}>
    {form.getFieldDecorator(field, {
      ...fieldOptions,
      valuePropName: 'checked'
    })(
      <Slider marks={marks} />
    )}
  </Form.Item>
}

export default slider
