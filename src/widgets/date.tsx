import { Form, DatePicker } from 'antd';
import React from 'react';
import { fromMore } from '../utils'
import { WidgetFuncType } from '../utils/create-field';

export const datePickerCommonProps = [
  'allowClear',
  'autoFocus',
  'className',
  'dateRender',
  'disabled',
  'disabledDate',
  'dropdownClassName',
  'getCalendarContainer',
  'locale',
  // 'mode',
  // 'open',
  'placeholder',
  'popupStyle',
  'size',
  'suffixIcon',
  'style',
  'onOpenChange',
  'onPanelChange',
]

export const datePickerProps = [
  // 'defaultValue',
  'defaultPickerValue',
  'disabledTime',
  'format',
  'renderExtraFooter',
  'showTime',
  'showToday',
  // 'value',
  'onChange',
  'onOk',
  'onPanelChange',
]

export const date: (showTime: { formatter: string }|boolean) => WidgetFuncType  = showTime => (form, p, { propsForm, fieldOptions, propsWidget }) => {
  const { field, more } = p
  const morePropsWidget = fromMore(more, datePickerCommonProps.concat(datePickerProps))

  return <Form.Item {...propsForm} key={field} hasFeedback>
    {form.getFieldDecorator(field, {
      ...fieldOptions,
    })(
      <DatePicker
        {...propsWidget}
        {...morePropsWidget}
        showTime={showTime}
        style={{ width: '100%' }}
      />
    )}
  </Form.Item>
}

export default date(false)
