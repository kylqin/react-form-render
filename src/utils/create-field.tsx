import { Form, Icon, Tooltip, Button, Col, Row } from 'antd';
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

export type WidgetFuncType = (form: WrappedFormUtils<any>, p: FieldProps, more: WidgetMoreProps, cfOptions: ICreateFieldOptions) => ReactNode
export interface ICreateFieldOptions {
  column: number
  layout: string
  colIndex?: number
  [p: string]: any
}
export const defaultICFO = { column: 1 }
export type TCreateField = (form: WrappedFormUtils<any>, p: FieldProps, cfOptions: ICreateFieldOptions) => ReactNode

const formObjectItem: TCreateField = (form, p, cfOptions) => {
  const { field, properties, title } = p
  return <div key={field}>
    <div className='smart-form-object-title'>{title}</div>
    <div className='smart-form-object-item'>
      {createFields(form, properties.map(ppt => ({ ...ppt, field: field + '.' + ppt.field})), cfOptions)}
    </div>
  </div>
}


export const createField: TCreateField = (form, p, cfOptions) => {
  const { field, type, properties, required, more, title, tooltip, extra, initialValue } = p
  const { column, layout, colIndex = 0 } = cfOptions || defaultICFO

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

  const COL_GAP = 40
  const { widget } = parseField(p)
  let colClassName = 'smart-form-column' + (layout ? ` ${layout}` : '')
  let colWidth = '100%'
  if (column === 1) {
    colWidth = '100%'
    colClassName += ' last-column'
  } else if (colIndex === column - 1) {
    colWidth = `calc(${100 / column}% - ${COL_GAP}px)`
    colClassName += ' last-column'
  } else {
    colWidth = `calc(${100 / column}% + ${COL_GAP / (column - 1)}px)`
  }
  return <div key={field} className={colClassName} style={{ width: colWidth }}>{
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
      },
      cfOptions
    )
  }</div>
}

export type TCreateFieldS = (form: WrappedFormUtils<any>, fields: FieldProps[], cfOptions: ICreateFieldOptions) => ReactNode[]
export const createFields: TCreateFieldS = (form, fields, cfOptions) => {
  const rows = putFieldsInRows(fields, cfOptions.column)
  return rows.map((r, idx) =>
    <div key={idx} className='smart-form-row'>
      {r.map((f, cIdx) => createField(form, f, { ...cfOptions, colIndex: cIdx }))}
    </div>
  )
}

function putFieldsInRows (fields: FieldProps[], column: number) {
  let row = []
  let result = []
  for (const f of fields) {
    if (f.widget === 'object' || f.widget === 'array') {
      row = []
      result.push([f])
    } else {
      row.push(f)
      if (row.length === column) {
        result.push(row)
        row = []
      }
    }
  }

  if (row.length) {
    result.push(row)
    row = []
  }

  return result
}