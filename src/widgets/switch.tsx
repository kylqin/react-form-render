import { Form, Switch } from 'antd';
import React from 'react';
import { WidgetFuncType } from '../utils/create-field';
import { fromMore } from '../utils';

const switch_: WidgetFuncType = (form, p, { propsForm, fieldOptions, propsWidget }) => {
  const { field, more } = p

  const morePropsWidget = fromMore(more, [
    'autoFocus',
    'checkedChildren',
    'unCheckedChildren',
    'loading',
    'size',
    'className'
  ])

  return <Form.Item {...propsForm} key={field} hasFeedback={false}>
    {form.getFieldDecorator(field, {
      ...fieldOptions,
      valuePropName: 'checked'
    })(
      <Switch {...propsWidget} {...morePropsWidget} />
    )}
  </Form.Item>
}

export default switch_
