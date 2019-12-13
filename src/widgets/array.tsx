import { Button } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import React, { FC, MouseEvent, useState } from 'react';
import { FieldProps } from '../models/Field';
import { createField, WidgetFuncType } from '../utils/create-field';

import {
  SortableContainer,
  SortableHandle,
  SortableElement,
  arrayMove,
} from 'react-sortable-hoc'

const DragHandle = SortableHandle(() => (
  <span className="mover">:::</span>
))

interface IFormArrayItem {
  form: WrappedFormUtils<any>,
  p: FieldProps,
  idx: number,
  addItem: (event: MouseEvent<HTMLElement>) => void
  deleteItem: (event: MouseEvent<HTMLElement>) => void
}

const FormArrayItem: FC<IFormArrayItem> = ({form, p, idx, addItem, deleteItem }) => {
  const { field, properties } = p

  return <div key={`${field}[${idx}]`} className='smart-form-array-item-ctn'>
    <DragHandle />
    <div className='smart-form-array-item'>
      {properties.map(ppt => createField(form, { ...ppt, field: `${field}[${idx}].${ppt.field}` }, ''))}
    </div>
    <div className='smart-form-array-item-buttons'>
      <Button onClick={addItem}>新增</Button>
      <Button onClick={deleteItem}>删除</Button>
    </div>
  </div>
}

const SortableItem = SortableElement(FormArrayItem)

interface IFormArrayProps { form: WrappedFormUtils<any>, p: FieldProps }

const newId = (idx?: number) : string => new Date().valueOf() + '' + (idx || '')
const FormArray: FC<IFormArrayProps> = ({ form, p }) => {
    const { field, title, initialValue } = p
    const [itemIds, setItemIds] = useState(
      (new Array((initialValue || []).length))
        .fill(null)
        .map((_: any, idx: number) => newId(idx))
    )

    const addItem = () => {
      setItemIds(itemIds.concat([newId()]))
    }

    const deleteItem = (_id: string) => {
      const idx = itemIds.indexOf(_id)
      form.setFieldsValue({
        [field]: form.getFieldValue(field).filter((f: any, i: number) => i !== idx)
      }, () => {
        setItemIds(itemIds.filter((id: string) => id !== _id))
      })
    }

    return <div>
      <div className='smart-form-array-title'>{title}</div>
      {itemIds.map((id, idx: number) =>
        <SortableItem
          index={idx}
          key={field + id}
          form={form}
          p={p}
          idx={idx}
          addItem={addItem}
          deleteItem={deleteItem.bind(null, id)}
        />)}
    </div>
}

export const SortableFormArray = SortableContainer(FormArray)

const array: WidgetFuncType = (form, p) => {
  const handleSort = ({ oldIndex, newIndex }: { oldIndex: number, newIndex: number}) => {
    const { field } = p
    const value = form.getFieldValue(field)

    form.setFieldsValue({
      [field]: arrayMove(value, oldIndex, newIndex)
    })
  }
  return <SortableFormArray key={p.field} form={form} p={p} useDragHandle onSortEnd={handleSort} />
}

export default array

