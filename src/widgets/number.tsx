import { Form, InputNumber } from 'antd';
import React from 'react';
import { WidgetFuncType } from '../utils/create-field';

const number: WidgetFuncType = (form, p, { propsForm, fieldOptions }) => {
  const { field, more } = p
  const { label } = propsForm
  const placeholder = more.get('placeholder') || ''
  const min = more.get('min')
  const max = more.get('max')
  const unit = more.get('unit') || ''

  return <Form.Item key={field} label={label} hasFeedback={false}>
    {form.getFieldDecorator(field, {
      ...fieldOptions,
    })(
      <div>
        <InputNumber placeholder={placeholder} min={min} max={max} />
        {unit && <span className="ant-form-text"> {unit}</span>}
      </div>
    )}
  </Form.Item>
}

export default number
