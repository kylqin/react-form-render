import { Form, InputNumber } from 'antd';
import React from 'react';
import { WidgetFuncType } from '../utils/create-field';
import { fromMore } from '../utils';

const number: WidgetFuncType = (form, p, { propsForm, fieldOptions, propsWidget }) => {
  const { field, more } = p
  const morePropsWidget = fromMore(more, [
    'autoFocus',
    'formatter',
    'parser',
    'min',
    'max',
    'precision',
    'decimalSeparator',
    'size',
    'step',
    'onPressEnter',

    'placeholder',
    'prefix'
  ])
  const unit = more.get('unit') || ''

  return <Form.Item {...propsForm} key={field} hasFeedback={false}>
    {form.getFieldDecorator(field, {
      ...fieldOptions,
    })(
      <div>
        <InputNumber {...propsWidget} {...morePropsWidget} />
        {unit && <span className="ant-form-text"> {unit}</span>}
      </div>
    )}
  </Form.Item>
}

export default number
