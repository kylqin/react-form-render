import { Form, DatePicker } from 'antd';
import React from 'react';
import { fromMore } from '../utils'
import { WidgetFuncType } from '../utils/create-field';
import { datePickerCommonProps } from './date'

const dateRangePickerProps = [
  // 'defaultValue',
  'defaultPickerValue',
  'disabledTime',
  'format',
  'ranges',
  'renderExtraFooter',
  'separator',
  'showTime',
  // 'showTime',
  // 'value',
  'onCalendarChange',
  'onChange',
  'onOk',
]

export const dateRange: (showTime: { formatter: string }|boolean, mode?: string) => WidgetFuncType  = (showTime, _mode = 'date') => (form, p, { propsForm, fieldOptions, propsWidget }) => {
  const { field, more } = p
  const mode = _mode || more.get('mode') || 'date'
  const morePropsWidget = fromMore(more, datePickerCommonProps.concat(dateRangePickerProps), {
    placeholder: ['Start ', 'End '].map((prefix: string) => prefix + mode)
  })

  return <Form.Item {...propsForm} key={field} hasFeedback>
    {form.getFieldDecorator(field, {
      ...fieldOptions,
    })(
      <DatePicker.RangePicker
        {...propsWidget}
        {...morePropsWidget}
        mode={[mode, mode]}
        showTime={showTime}
        style={{ width: '100%' }}
      />
    )}
  </Form.Item>
}

export default dateRange(false)
