import { Form, Switch } from 'antd';
import React from 'react';
import { WidgetFuncType } from '../utils/create-field';

const switch_: WidgetFuncType = (form, p, { propsForm, fieldOptions }) => {
  const { field } = p
  const { label } = propsForm
  return <Form.Item key={field} label={label} hasFeedback={false}>
    {form.getFieldDecorator(field, {
      ...fieldOptions,
      valuePropName: 'checked'
    })(
      <Switch />
    )}
  </Form.Item>
}

export default switch_
