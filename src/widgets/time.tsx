import { Form, TimePicker } from 'antd';
import React from 'react';
import { fromMore } from '../utils'
import { WidgetFuncType } from '../utils/create-field';

const input: WidgetFuncType = (form, p, { propsForm, fieldOptions, propsWidget }) => {
  const { field, more } = p
  const morePropsWidget = fromMore(more, [
    'addon',
    'allowClear',
    'autoFocus',
    'className',
    'clearText',
    'defaultOpenValue',
    // 'defaultValue',
    // 'disabled',
    'disabledHours',
    'disabledMinutes',
    'disabledSeconds',
    'format',
    'getPopupContainer',
    'hideDisabledOptions',
    'hourStep',
    'inputReadOnly',
    'minuteStep',
    // 'open',
    'placeholder',
    'popupClassName',
    'popupStyle',
    'secondStep',
    'suffixIcon',
    'clearIcon',
    'use12Hours',
    // 'value',
    'onChange',
    'onOpenChange',
  ])

  return <Form.Item {...propsForm} key={field} hasFeedback>
    {form.getFieldDecorator(field, {
      ...fieldOptions,
    })(
      <TimePicker {...propsWidget} {...morePropsWidget} style={{ width: '100%' }}
      />
    )}
  </Form.Item>
}

export default input
