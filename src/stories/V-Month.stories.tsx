import React from 'react'
import { fgen } from './_helpers'
import RenderFields from './_renderFields'

export default {
  title: 'Widgets|MonthPicker'
};

const f = () => fgen('_month')

const fields = [
  { field: f(), title: 'Month', type: 'month', widget: 'month', more: {} },
]

export const months: React.FC = () => <RenderFields fields={fields} />
