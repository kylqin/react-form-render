import { Form, Rate } from 'antd';
import React from 'react';
import { WidgetFuncType } from '../utils/create-field';

const rate: WidgetFuncType = (form, p, { propsForm, fieldOptions }) => {
  const { field } = p
  const { label } = propsForm
  return <Form.Item key={field} label={label} hasFeedback={false}>
    {form.getFieldDecorator(field, {
      ...fieldOptions,
    })(
      <Rate />
    )}
  </Form.Item>
}

export default rate
