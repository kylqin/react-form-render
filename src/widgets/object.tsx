import React from 'react';
import { WidgetFuncType, createFields } from '../utils/create-field';

const object: WidgetFuncType = (form, p, _, cfOptions) => {
  const { field, properties, title } = p
  return <div key={field}>
    <div className='smart-form-object-title'>{title}</div>
    <div className='smart-form-object-item'>
      {createFields(form, properties.map(ppt => ({ ...ppt, field: field + '.' + ppt.field})), cfOptions)}
    </div>
  </div>
}

export default object
