import { Form, Input } from 'antd';
import React from 'react';
import { fromMore } from '../utils'
import { WidgetFuncType } from '../utils/create-field';

const input: WidgetFuncType = (form, p, { propsForm, fieldOptions, propsWidget }) => {
  const { field, more } = p
  const morePropsWidget = fromMore(more, [
    'type',
    'placeholder',
    'prefix',
    'suffix',
    'addonBefore',
    'addonAfter',
    'maxLength',
    'allowClear',
    'onPressEnter',
  ])

  return <Form.Item {...propsForm} key={field} hasFeedback>
    {form.getFieldDecorator(field, {
      ...fieldOptions,
    })(
      <Input
        {...propsWidget}
        style={{ width: '100%' }}
        {...morePropsWidget}
      />
    )}
  </Form.Item>
}

export default input
