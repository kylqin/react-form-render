import { Form, Icon, Tooltip, Button } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import React, { ReactNode, useState, FC, MouseEvent } from 'react';
import { defaultValue, FieldProps } from '../models/Field';
import { parseField } from './parse-field';

export interface WidgetMoreProps {
  propsForm: any
  fieldOptions: any
  propsWidget: any
}

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

function formArrayItem (form: WrappedFormUtils<any>, p: FieldProps, idx: number, addItem: (event: MouseEvent<HTMLElement>) => void) {
  const { field, properties } = p

  return <div key={`${field}[${idx}]`}>
    <div className='smart-form-array-item'>
      {properties.map(ppt => createField(form, { ...ppt, field: `${field}[${idx}].${ppt.field}` }, ''))}
    </div>
    <div className='smart-form-array-item-buttons'>
      <Button onClick={addItem}>新增</Button>
    </div>
  </div>
}

interface IFormArrayProps { form: WrappedFormUtils<any>, p: FieldProps }

const FormArray: FC<IFormArrayProps> = ({ form, p }) => {
    const { field, title, initialValue } = p
    const [itemIds, setItemIds] = useState(
      (new Array((initialValue || []).length))
        .fill(null)
        .map((_: any, idx: number) => idx)
    )

    const addItem = () => {
      setItemIds(itemIds.concat([itemIds.length]))
    }

    return <div>
      <div className='smart-form-array-title'>{title}</div>
      {itemIds.map((_, idx: number) => formArrayItem(form, p, idx, addItem))}
    </div>
}

export function createField (form: WrappedFormUtils<any>, p: FieldProps, dsPack: any) : ReactNode {
  const { type, properties, required, more, title, tooltip, extra, initialValue } = p

  if (type === 'object' && properties.length) {
    return formObjectItem(form, p)
  }

  if (type === 'array' && properties.length) {
    return <FormArray key={p.field} form={form} p={p} />
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
