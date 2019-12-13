import { Form, Icon, Tooltip, Button, Col } from 'antd';
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

export type WidgetFuncType = (form: WrappedFormUtils<any>, p: FieldProps, more: WidgetMoreProps, cfOptions?: ICreateFieldOptions) => ReactNode
export interface ICreateFieldOptions {
  column: number
  [p: string]: any
}
export const defaultICFO = { column: 1 }
export type TCreateField = (form: WrappedFormUtils<any>, p: FieldProps, cfOptions?: ICreateFieldOptions) => ReactNode

const formObjectItem: TCreateField = (form, p, cfOptions) => {
  const { field, properties, title } = p
  return <div key={field}>
    <div className='smart-form-object-title'>{title}</div>
    <div className='smart-form-object-item'>
      {properties.map(ppt => createField(form, { ...ppt, field: field + '.' + ppt.field}, cfOptions))}
    </div>
  </div>
}


export const createField: TCreateField = (form, p, cfOptions) => {
  const { field, type, properties, required, more, title, tooltip, extra, initialValue } = p
  const { column } = cfOptions || defaultICFO

  if (type === 'object' && properties.length) {
    return <Col key={field} span={24}>
      {formObjectItem(form, p, cfOptions)}
    </Col>
  }

  if (type === 'array' && properties.length) {
    return <Col key={field} span={24}>
      {array_(form, p, wmp, cfOptions)}
    </Col>
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

  const { widget } = parseField(p)
  return <Col key={field} span={24 /column}>{
    widget(
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
  }</Col>
}
