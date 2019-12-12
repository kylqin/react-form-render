import { Form, Radio } from 'antd';
import React from 'react';
import { WidgetFuncType } from '../utils/create-field';

const radio: WidgetFuncType = (form, p, { propsForm, fieldOptions }) => {
  const { field, options } = p
  const { label } = propsForm

  return <Form.Item key={field} label={label} hasFeedback={false}>
    {form.getFieldDecorator(field, {
      ...fieldOptions,
      valuePropName: 'checked'
    })(
      <Radio.Group>
        {options.map(({value, label}) => <Radio.Button key={value} value={value}>{label}</Radio.Button>)}
      </Radio.Group>
    )}
  </Form.Item>
}

export default radio
