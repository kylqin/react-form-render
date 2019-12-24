import React from 'react'
import { fgen } from './_helpers'
import RenderFields from './_renderFields'

export default {
  title: 'Widgets|Number'
};

const f = () => fgen('_input')

const fields = [
  { field: f(), title: 'N', type: 'number', widget: 'number' },
  { field: f(), title: 'N audoFocus', type: 'number', widget: 'number', more: { autoFocus: true } },
  { field: f(), title: 'N formatter & parser', type: 'number', widget: 'number', more: {
      formatter: (value: number) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
      parser: (value: string) => value.replace(/\$\s?|(,*)/g, '')
    }
  },
  { field: f(), title: 'N formatter & parser', type: 'number', widget: 'number', more: {
      formatter: (value: number) => `${value}%`,
      parser: (value: string) => value.replace('%', '')
    }
  },
  { field: f(), title: 'N max 10', type: 'number', widget: 'number', more: { max: 10 } },
  { field: f(), title: 'N min -3', type: 'number', widget: 'number', more: { min: -3 } },
  { field: f(), title: 'N precision 2', type: 'number', widget: 'number', more: { precision: 2 } },
  { field: f(), title: 'N decimalSeparator', type: 'number', widget: 'number', more: { decimalSeparator: ';' } },
  { field: f(), title: 'N size 4', type: 'number', widget: 'number', more: { size: 4 } },
  { field: f(), title: 'N step 10', type: 'number', widget: 'number', more: { step: 10 } },
  { field: f(), title: 'N onPressEnter', type: 'number', widget: 'number', more: { onPressEnter: (...args: any[]) => { console.log('onPressEnter: ', ...args)} } },
  { field: f(), title: 'N unit', type: 'number', widget: 'number', more: { unit: '吨' } },

  { field: 'ofInput', title: 'Inherit from Input', type: 'object', widget: 'object', properties: [
    { field: f(), title: 'N placeholder', type: 'number', widget: 'number', more: { placeholder: 'input number' } },
  ]}
]


export const Numbers: React.FC = () => <RenderFields fields={fields} />
