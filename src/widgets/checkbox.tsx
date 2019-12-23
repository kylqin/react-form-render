import { Form, Checkbox } from 'antd';
import React from 'react';
import { WidgetFuncType } from '../utils/create-field';
import { fromMore } from '../utils';

const checkbox: WidgetFuncType = (form, p, { propsForm, fieldOptions, propsWidget }) => {
  const { field, more } = p
  const morePropsWidget = fromMore(more, [
    'autoFocus',
    // 'checked',
    // 'defaultChecked',
    // 'disabled',
    'indeterminate',
    'onChange',
  ])

  const label = more.get('label') || ''

  return <Form.Item {...propsForm} key={field} hasFeedback={false}>
    {form.getFieldDecorator(field, {
      ...fieldOptions,
      valuePropName: 'checked'
    })(
      <Checkbox {...propsWidget} {...morePropsWidget}>{label}</Checkbox>
    )}
  </Form.Item>
}

export default checkbox
