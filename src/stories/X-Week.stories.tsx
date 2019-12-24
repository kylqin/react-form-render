import React from 'react'
import { fgen } from './_helpers'
import RenderFields from './_renderFields'

export default {
  title: 'Widgets|WeekPicker'
};

const f = () => fgen('_week')

const fields = [
  { field: f(), title: 'Week', type: 'week', widget: 'week', more: {} },
]

export const weeks: React.FC = () => <RenderFields fields={fields} />
