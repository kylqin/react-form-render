import React from 'react'
import ReactFromRender from '../react-form-render'
import { fgen } from './_helpers'
import Template from './_template'

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

export default {
  title: 'Cascader'
};


export const cascaders: React.FC = () => {
  const formProps = {
    fields,
  }

  return <Template
    column={2}
    configForm={cfg => <ReactFromRender {...formProps} {...cfg} />}
  />
}
