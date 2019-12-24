import React from 'react'
import { fgen } from './_helpers'
import RenderFields from './_renderFields'

export default {
  title: 'Widgets|Cascader'
};

const f = () => fgen('_cascader')

const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const fields = [
  { field: f(), title: 'Cascader', type: 'array', widget: 'cascader', more: { cascader: residences } },
  { field: f(), title: 'showSearch', type: 'array', widget: 'cascader', more: { cascader: residences, showSearch: true } },
]

export const cascaders: React.FC = () => <RenderFields fields={fields} />
