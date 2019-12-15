import { Form, Radio } from 'antd';
import React from 'react';
import { WidgetFuncType } from '../utils/create-field';

const radio: WidgetFuncType = (form, p, { propsForm, fieldOptions, propsWidget }) => {
  const { field, options } = p

  return <Form.Item {...propsForm} key={field} hasFeedback={false}>
    {form.getFieldDecorator(field, {
      ...fieldOptions,
      valuePropName: 'checked'
    })(
      <Radio.Group {...propsWidget}>
        {options.map(({value, label}) => <Radio.Button key={value} value={value}>{label}</Radio.Button>)}
      </Radio.Group>
    )}
  </Form.Item>
}

export default radio
