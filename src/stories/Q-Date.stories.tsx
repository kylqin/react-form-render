import React from 'react'
import { fgen } from './_helpers'
import RenderFields from './_renderFields'

export default {
  title: 'Widgets|Date'
};

const f = () => fgen('_date')

const fields = [
  { field: f(), title: 'Date', type: 'date', widget: 'date', more: {} },
  { field: f(), title: 'Dacade', type: 'date', widget: 'date', more: { mode: 'dacade' } },
]

export const dates: React.FC = () => <RenderFields column={2} fields={fields} />
