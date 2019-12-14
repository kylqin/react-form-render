import { Form, Switch } from 'antd';
import React from 'react';
import { WidgetFuncType } from '../utils/create-field';

const switch_: WidgetFuncType = (form, p, { propsForm, fieldOptions }) => {
  const { field } = p
  return <Form.Item {...propsForm} key={field} hasFeedback={false}>
    {form.getFieldDecorator(field, {
      ...fieldOptions,
      valuePropName: 'checked'
    })(
      <Switch />
    )}
  </Form.Item>
}

export default switch_
