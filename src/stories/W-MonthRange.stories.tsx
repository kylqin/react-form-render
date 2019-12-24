import React from 'react'
import { fgen } from './_helpers'
import RenderFields from './_renderFields'

export default {
  title: 'Widgets|MonthRanePicker'
};

const f = () => fgen('_monthRange')

const fields = [
  { field: f(), title: 'MonthRange', type: 'array', widget: 'month-range', more: {} },
]

export const monthRanges: React.FC = () => <RenderFields column={2} fields={fields} />
