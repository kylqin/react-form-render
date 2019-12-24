import React from 'react'
import { fgen } from './_helpers'
import RenderFields from './_renderFields'

export default {
  title: 'Widgets|Datetime'
};

const f = () => fgen('_datetime')

const fields = [
  { field: f(), title: 'Date', type: 'date', widget: 'datetime', more: {} },
]

export const datetimes: React.FC = () => <RenderFields column={2} fields={fields} />
