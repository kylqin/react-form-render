import { Form } from 'antd';
import React from 'react';
import { WidgetFuncType } from '../utils/create-field';

const text: WidgetFuncType = (form, p, { propsForm, fieldOptions }) => {
  const { field } = p

  return <Form.Item {...propsForm} key={field}  hasFeedback={false}>
    <span className='ant-form-text'>{form.getFieldValue(field) || fieldOptions.initialValue}</span>
  </Form.Item>
}

export default text

