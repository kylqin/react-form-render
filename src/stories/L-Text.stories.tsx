import React from 'react'
import { fgen } from './_helpers'
import RenderFields from './_renderFields'

export default {
  title: 'Widgets|Text'
};

const f = () => fgen('_text')

const fields = [
  { field: f(), title: 'Text', type: 'string', widget: 'text', initialValue: '这世界真好,看' },
]

export const Text: React.FC = () => <RenderFields fields={fields} />
