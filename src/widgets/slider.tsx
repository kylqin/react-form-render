import { Form, Slider } from 'antd';
import React from 'react';
import { WidgetFuncType } from '../utils/create-field';
import { fromMore } from '../utils';

const slider: WidgetFuncType = (form, p, { propsForm, fieldOptions, propsWidget }) => {
  const { field, more } = p
  const morePropsWidget = fromMore(more, [
    'marks',
    'autoFocus',
    'dots',
    'included',
    'min',
    'max',
    'range',
    'reverse',
    'step',
    'tipFormatter',
    'tooltipPlacement',
    'tooltipVisible',
    'vertical'
  ])

  return <Form.Item {...propsForm} key={field} hasFeedback={false}>
    {form.getFieldDecorator(field, {
      ...fieldOptions,
      valuePropName: 'checked'
    })(
      <Slider {...propsWidget} {...morePropsWidget} defaultValue={fieldOptions.initialValue} />
    )}
  </Form.Item>
}

export default slider
