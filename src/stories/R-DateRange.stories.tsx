import React from 'react';
import { fgen } from './_helpers';
import RenderFields from './_renderFields';

export default {
  title: 'Widgets|DateRange'
};

const f = () => fgen('_daterange')

const fields = [
  { field: f(), title: 'DateRange', type: 'array', widget: 'date-range', more: {} },
]

export const dateRanges: React.FC = () => <RenderFields column={2} fields={fields} />
