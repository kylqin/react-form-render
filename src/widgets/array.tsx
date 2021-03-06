import { Button, Icon } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import React, { FC, MouseEvent, useState } from 'react';
import { arrayMove, SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { computedValue, FieldProps } from '../models/Field';
import { createFields, ICreateFieldOptions, WidgetFuncType } from '../utils/create-field';


const DragHandle = SortableHandle(() => (
  <span className="mover">⋮⋮</span>
))

interface IFormArrayItem {
  form: WrappedFormUtils<any>,
  p: FieldProps,
  idx: number,
  addItem: (event: MouseEvent<HTMLElement>) => void
  deleteItem: (event: MouseEvent<HTMLElement>) => void
  cfOptions: ICreateFieldOptions
}

const FormArrayItem: FC<IFormArrayItem> = ({form, p, idx, addItem, deleteItem, cfOptions }) => {
  const { field, properties, disabled } = p

  const computedProperties = properties.map((ppt: FieldProps) => {
    const { compute } = ppt
    let result: any = { ...ppt, field: `${field}[${idx}].${ppt.field}` }
    for (const [fd, cmp] of Object.entries(compute)) {
      result[fd] = computedValue(cmp!, form, idx)
    }
    return result as FieldProps
  })

  return <div key={`${field}[${idx}]`} className='smart-form-array-item-ctn'>
    {!disabled && <DragHandle />}
    <div style={{ position: 'relative' }}>
      <div className='smart-form-array-item'>
        {createFields(form, computedProperties, cfOptions)}
      </div>
      <div className='smart-form-array-item-buttons'>
        {/* <Button disabled={disabled} onClick={addItem}>新增</Button> */}
        <Button disabled={disabled} size='small' type='danger' shape='circle' onClick={deleteItem}><Icon type='minus' /></Button>
      </div>
    </div>
  </div>
}

const SortableItem = SortableElement(FormArrayItem)

interface IFormArrayProps { form: WrappedFormUtils<any>, p: FieldProps, cfOptions: ICreateFieldOptions }

const newId = (idx?: number) : string => new Date().valueOf() + '' + (idx || '')
const FormArray: FC<IFormArrayProps> = ({ form, p, cfOptions }) => {
    const { field, title, initialValue, disabled } = p
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
        setItemIds(itemIds.slice(0, itemIds.length - 1)) // fix 'dragging error after some item deleted', I do not kown why!
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
          cfOptions={cfOptions}
        />)}
      <Button disabled={disabled} type='dashed' onClick={addItem} style={{ width: '100%' }}><Icon type='plus' /></Button>
    </div>
}

export const SortableFormArray = SortableContainer(FormArray)

const array: WidgetFuncType = (form, p, _, cfOptions) => {
  const { field } = p
  const handleSort = ({ oldIndex, newIndex }: { oldIndex: number, newIndex: number}) => {
    const { field } = p
    const value = form.getFieldValue(field)

    form.setFieldsValue({
      [field]: arrayMove(value, oldIndex, newIndex)
    })
  }
  return <SortableFormArray
    key={field}
    form={form}
    p={p}
    distance={6}
    useDragHandle
    onSortEnd={handleSort}
    cfOptions={cfOptions}
  />
}

export default array

