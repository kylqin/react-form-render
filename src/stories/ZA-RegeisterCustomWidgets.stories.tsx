import React from 'react';
import { registerWidget } from '../utils/register-widget';
import number_ from '../widgets/number';
import { fgen } from './_helpers';
import RenderFields from './_renderFields';

export default {
  title: 'Examples|Register Custom'
};

const f = () => fgen('_custom')

registerWidget('custom', number_)

const fields = [
  { field: f(), title: 'Custom', type: 'number', widget: 'custom' }
]

export const customs: React.FC = () => <RenderFields fields={fields} />
