import { Form, Input } from 'antd';
import React from 'react';
import { WidgetFuncType } from '../utils/create-field';

const input: WidgetFuncType = (form, p, { propsForm, fieldOptions, propsWidget }) => {
  const { field, more } = p
  const placeholder = more.get('placeholder') || ''
  return <Form.Item {...propsForm} key={field} hasFeedback>
    {form.getFieldDecorator(field, {
      ...fieldOptions,
    })(
      <Input
        {...propsWidget}
        style={{ width: '100%' }}
        placeholder={placeholder}
      />
    )}
  </Form.Item>
}

export default input
