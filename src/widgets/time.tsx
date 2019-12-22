import { Form, DatePicker } from 'antd';
import React from 'react';
import { fromMore } from '../utils'
import { WidgetFuncType } from '../utils/create-field';
import { datePickerCommonProps, datePickerProps } from './date'

const input: WidgetFuncType = (form, p, { propsForm, fieldOptions, propsWidget }) => {
  const { field, more } = p
  const morePropsWidget = fromMore(more, datePickerCommonProps.concat(datePickerProps))

  console.log('morePropsWidget ->', morePropsWidget)
  console.log('fieldOptions ->', fieldOptions)

  return <Form.Item {...propsForm} key={field} hasFeedback>
    {form.getFieldDecorator(field, {
      ...fieldOptions,
    })(
      <DatePicker
        {...propsWidget}
        {...morePropsWidget}
        mode='time'
        showTime={true}
        style={{ width: '100%' }}
      />
    )}
  </Form.Item>
}

export default input
