import React from 'react'
import { fgen } from './_helpers'
import RenderFields from './_renderFields'

export default {
  title: 'Widgets|DatetimeRange'
};

const f = () => fgen('_datetimerange')

const fields = [
  { field: f(), title: 'DateTimeRange', type: 'array', widget: 'datetime-range', more: {} },
]

export const datetimeRanges: React.FC = () => <RenderFields column={2} fields={fields} />
