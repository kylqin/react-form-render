import { Form, InputNumber } from 'antd';
import React from 'react';
import { WidgetFuncType } from '../utils/create-field';

const number: WidgetFuncType = (form, p, { propsForm, fieldOptions, propsWidget }) => {
  const { field, more } = p
  const placeholder = more.get('placeholder') || ''
  const min = more.get('min')
  const max = more.get('max')
  const unit = more.get('unit') || ''

  return <Form.Item {...propsForm} key={field} hasFeedback={false}>
    {form.getFieldDecorator(field, {
      ...fieldOptions,
    })(
      <div>
        <InputNumber {...propsWidget} placeholder={placeholder} min={min} max={max} />
        {unit && <span className="ant-form-text"> {unit}</span>}
      </div>
    )}
  </Form.Item>
}

export default number
