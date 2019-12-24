import React from 'react';
import { WidgetFuncType, createFields } from '../utils/create-field';

const group: WidgetFuncType = (form, p, _, cfOptions) => {
  const { field, properties, title } = p
  return <div key={field}>
    <div className='smart-form-object-title'>{title}</div>
    <div className='smart-form-object-item'>
      {createFields(form, properties, cfOptions)}
    </div>
  </div>
}

export default group
