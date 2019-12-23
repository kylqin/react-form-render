import { Form, Cascader } from 'antd';
import React from 'react';
import { WidgetFuncType } from '../utils/create-field';
import { fromMore } from '../utils';

const cascader: WidgetFuncType = (form, p, { propsForm, fieldOptions, propsWidget }) => {
  const { field, more } = p

  const morePropsWidget = fromMore(more, [
    'allowClear',
    'autoFocus',
    'changeOnSelect',
    'className',
    // 'defaultValue',
    // 'disabled',
    'displayRender',
    'expandTrigger',
    'fieldNames',
    'getPopupContainer',
    'loadData',
    'notFoundContent',
    // 'options',
    'placeholder',
    'popupClassName',
    'popupPlacement',
    // 'popupVisible',
    'showSearch',
    'size',
    'style',
    'suffixIcon',
    // 'value',
    'onChange',
    'onPopupVisibleChange',
  ])

  const options = more.get('cascader') || []

  return <Form.Item {...propsForm} key={field} hasFeedback={false}>
    {form.getFieldDecorator(field, {
      ...fieldOptions
    })(
      <Cascader {...propsWidget} {...morePropsWidget} options={options} />
    )}
  </Form.Item>
}

export default cascader
