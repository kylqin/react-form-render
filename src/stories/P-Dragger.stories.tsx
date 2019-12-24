import React from 'react'
import { fgen } from './_helpers'
import RenderFields from './_renderFields'

export default {
  title: 'Widgets|Dragger'
};

const f = () => fgen('_dragger')

const fields = [
  { span: 2, field: f(), title: 'Dragger', type: 'array', widget: 'dragger', more: {} },
  { span: 2, field: f(), title: 'uploadText', type: 'array', widget: 'dragger', more: { uploadText: '点击或拖拽到该区域上传' } },
  { span: 2, field: f(), title: 'uploadHint', type: 'array', widget: 'dragger', more: { uploadHint: '支持单个文件或批量上传' } },
  { span: 2, field: f(), title: 'accept', type: 'array', widget: 'dragger', more: { accept: '*.png' } },
  { span: 2, field: f(), title: 'multiple', type: 'array', widget: 'dragger', more: { multiple: true } },
  { span: 2, field: f(), title: 'LT text', type: 'array', widget: 'dragger', more: { multiple: true, listType: 'text' } },
  { span: 2, field: f(), title: 'LT picture', type: 'array', widget: 'dragger', more: { multiple: true, listType: 'picture' } },
  { span: 2, field: f(), title: 'LT picture-card', type: 'array', widget: 'dragger', more: { multiple: true, listType: 'picture-card' } },
]

export const draggers: React.FC = () => <RenderFields column={4} fields={fields} />
