import { Form, Radio } from 'antd';
import React from 'react';
import { WidgetFuncType } from '../utils/create-field';

const radio: WidgetFuncType = (form, p, { propsForm, fieldOptions, propsWidget }) => {
  const { field, options, more, initialValue } = p

  const disabled = more.get('disabled') || []

  const disabledItems = disabled.reduce((acc: any, v: string|number) => ({ ...acc, [v]: true }), {})

  return <Form.Item {...propsForm} key={field} hasFeedback={false}>
    {form.getFieldDecorator(field, {
      ...fieldOptions,
      valuePropName: 'checked'
    })(
      <Radio.Group {...propsWidget} defaultValue={initialValue}>
        {options.map(({value, label}) => <Radio.Button key={value} value={value} disabled={value in disabledItems}>{label}</Radio.Button>)}
      </Radio.Group>
    )}
  </Form.Item>
}

export default radio
