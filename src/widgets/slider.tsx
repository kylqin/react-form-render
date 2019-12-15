import { Form, Slider } from 'antd';
import React from 'react';
import { WidgetFuncType } from '../utils/create-field';

const slider: WidgetFuncType = (form, p, { propsForm, fieldOptions, propsWidget }) => {
  const { field, more } = p
  const marks = more.get('marks') || {}

  return <Form.Item {...propsForm} key={field} hasFeedback={false}>
    {form.getFieldDecorator(field, {
      ...fieldOptions,
      valuePropName: 'checked'
    })(
      <Slider {...propsWidget} marks={marks} />
    )}
  </Form.Item>
}

export default slider
