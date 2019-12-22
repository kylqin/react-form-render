import { Form, DatePicker } from 'antd';
import React from 'react';
import { fromMore } from '../utils'
import { WidgetFuncType } from '../utils/create-field';
import { datePickerCommonProps } from './date'

const monthPickerProps = [
  // 'defaultValue',
  'defaultPickerValue',
  'format',
  'monthCellContentRender',
  'renderExtraFooter',
  // 'value',
  'onChange',
]

const month: WidgetFuncType = (form, p, { propsForm, fieldOptions, propsWidget }) => {
  const { field, more } = p
  const morePropsWidget = fromMore(more, datePickerCommonProps.concat(monthPickerProps))

  return <Form.Item {...propsForm} key={field} hasFeedback>
    {form.getFieldDecorator(field, {
      ...fieldOptions,
    })(
      <DatePicker.MonthPicker
        {...propsWidget}
        {...morePropsWidget}
        mode='month'
        style={{ width: '100%' }}
      />
    )}
  </Form.Item>
}

export default month
