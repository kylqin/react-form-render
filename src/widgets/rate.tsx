import { Form, Rate } from 'antd';
import React from 'react';
import { WidgetFuncType } from '../utils/create-field';
import { fromMore } from '../utils';

const rate: WidgetFuncType = (form, p, { propsForm, fieldOptions, propsWidget }) => {
  const { field, more } = p

  const morePropsWidget = fromMore(more, [
    'allowClear',
    'allowHalf',
    'autoFocus',
    'character',
    'className',
    'count'
  ])

  return <Form.Item {...propsForm} key={field} hasFeedback={false}>
    {form.getFieldDecorator(field, {
      ...fieldOptions,
    })(
      <Rate {...propsWidget} {...morePropsWidget} style={{ width: '100%' }} />
    )}
  </Form.Item>
}

export default rate
