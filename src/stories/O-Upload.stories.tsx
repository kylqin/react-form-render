import React from 'react'
import { fgen } from './_helpers'
import RenderFields from './_renderFields'

export default {
  title: 'Widgets|Upload'
};

const f = () => fgen('_upload')

const fields = [
  { field: f(), title: 'Upload', type: 'array', widget: 'upload' },
  { field: f(), title: 'buttonText', type: 'array', widget: 'upload', more: { buttonText: '上传' } },
  { field: f(), title: 'formatFiles', type: 'array', widget: 'upload', more: { 
    formatFiles: (e: any) => {
      console.log(e)
      if (Array.isArray(e)) {
        return e.filter(f => !f.error);
      }
      return ((e && e.fileList) || []).filter((f: any) => !f.error);
    }
  }},
  { field: f(), title: 'accept', type: 'array', widget: 'upload', more: { accept: '*.png' } },
  { field: f(), title: 'multiple', type: 'array', widget: 'upload', more: { multiple: true } },
  { field: f(), title: 'LT text', type: 'array', widget: 'upload', more: { multiple: true, listType: 'text' } },
  { field: f(), title: 'LT picture', type: 'array', widget: 'upload', more: { multiple: true, listType: 'picture' } },
  { field: f(), title: 'LT picture-card', type: 'array', widget: 'upload', more: { multiple: true, listType: 'picture-card' } },
]

export const uploads: React.FC = () => <RenderFields fields={fields} />
