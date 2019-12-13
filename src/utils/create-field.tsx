import { Form, Icon, Tooltip, Button } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import React, { ReactNode, useState, FC, MouseEvent } from 'react';
import { defaultValue, FieldProps } from '../models/Field';
import { parseField } from './parse-field';
import array_ from '../widgets/array'

export interface WidgetMoreProps {
  propsForm: any
  fieldOptions: any
  propsWidget: any
}
const wmp = { propsForm: {}, fieldOptions: {}, propsWidget: {} }

export type WidgetFuncType = (form: WrappedFormUtils<any>, p: FieldProps, more: WidgetMoreProps) => ReactNode

function formObjectItem (form: WrappedFormUtils<any>, p: FieldProps) {
  const { field, properties, title } = p
  return <div key={field}>
    <div className='smart-form-object-title'>{title}</div>
    <div className='smart-form-object-item'>
      {properties.map(ppt => createField(form, { ...ppt, field: field + '.' + ppt.field}, ''))}
    </div>
  </div>
}


export function createField (form: WrappedFormUtils<any>, p: FieldProps, dsPack: any) : ReactNode {
  const { type, properties, required, more, title, tooltip, extra, initialValue } = p

  if (type === 'object' && properties.length) {
    return formObjectItem(form, p)
  }

  if (type === 'array' && properties.length) {
    return array_(form, p, wmp)
  }

  let rules = required ? [{ required: true, message: 'The field is required!' }] : []
  const _rules = more.get('rules')
  if (_rules) {
    rules = rules.concat(_rules)
  }
  let label = <span>{title}</span>
  if (tooltip) {
    label = <span>
      {title}&nbsp;
      <Tooltip title={tooltip}>
        <Icon type='question-circle-o' />
      </Tooltip>
    </span>
  }

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
        initialValue: initialValue || defaultValue(p.type)
      },
      propsWidget: {}
    }
  )
}
