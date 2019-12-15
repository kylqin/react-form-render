import { Form, Rate } from 'antd';
import React from 'react';
import { WidgetFuncType } from '../utils/create-field';

const rate: WidgetFuncType = (form, p, { propsForm, fieldOptions, propsWidget }) => {
  const { field } = p
  return <Form.Item {...propsForm} key={field} hasFeedback={false}>
    {form.getFieldDecorator(field, {
      ...fieldOptions,
    })(
      <Rate {...propsWidget} style={{ width: '100%' }} />
    )}
  </Form.Item>
}

export default rate
