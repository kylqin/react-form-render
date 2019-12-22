import { Form, DatePicker } from 'antd';
import React from 'react';
import { fromMore } from '../utils'
import { WidgetFuncType } from '../utils/create-field';
import { datePickerCommonProps } from './date'

const weekPickerProps = [
  // 'defaultValue',
  'defaultPickerValue',
  'format',
  // 'value',
  'onChange',
  'renderExtraFooter',
]

const week: WidgetFuncType = (form, p, { propsForm, fieldOptions, propsWidget }) => {
  const { field, more } = p
  const morePropsWidget = fromMore(more, datePickerCommonProps.concat(weekPickerProps))

  return <Form.Item {...propsForm} key={field} hasFeedback>
    {form.getFieldDecorator(field, {
      ...fieldOptions,
    })(
      <DatePicker.WeekPicker
        {...propsWidget}
        {...morePropsWidget}
        mode='week'
        style={{ width: '100%' }}
      />
    )}
  </Form.Item>
}

export default week
