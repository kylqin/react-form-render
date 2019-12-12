import { Form, Icon, Tooltip } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import React, { ReactNode } from 'react';
import { defaultValue, FieldProps } from '../models/Field';
import { parseField } from './parse-field';

export interface WidgetMoreProps {
  propsForm: any
  fieldOptions: any
  propsWidget: any
}

export type WidgetFuncType = (form: WrappedFormUtils<any>, p: FieldProps, more: WidgetMoreProps) => ReactNode

export function createField (form: WrappedFormUtils<any>, p: FieldProps, dsPack: any) : ReactNode {
  const { required, more, field, title, tooltip, extra, widget: widgetType, initialValue } = p
  let rules = required ? [{ required: true, message: 'The field is required!' }] : []
  const _rules = more.get('rules')
  if (_rules) {
    rules = rules.concat(_rules)
  }
  const value = '是吗'
  let label = <span>{title}</span>
  if (tooltip) {
    label = <span>
      {title}&nbsp;
      <Tooltip title={tooltip}>
        <Icon type='question-circle-o' />
      </Tooltip>
    </span>
  }

  if (widgetType === 'text') {
    return <Form.Item key={field} label={label}>
      <span className='ant-form-text'>{value || initialValue}</span>
    </Form.Item>
  } else {
    const { widget } = parseField(p, dsPack)
    return widget(
      form,
      p,
      {
        propsForm: {
          label,
          extra
        },
        fieldOptions: {
          rules,
          initialValue: computeInitialValue(p)
        },
        propsWidget: {}
      }
    )
  }
}

export function computeInitialValue (p: FieldProps) {
  return p.initialValue || defaultValue(p.type)
}