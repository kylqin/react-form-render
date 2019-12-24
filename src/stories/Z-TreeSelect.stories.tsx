import React from 'react'
import ReactFromRender from '../react-form-render'
import { fgen } from './_helpers'
import Template from './_template'
import './_classname.css'

const f = () => fgen('_tree')

const treeData = [
  {
    value: 'zhejiang',
    title: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        title: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            title: 'West Lake',
          },
        ],
      },
      {
        value: 'wenzhou',
        title: 'Wenzhou',
        children: [
          {
            value: 'longgang',
            title: 'LongGang',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    title: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        title: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            title: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
]

const rootTree = [
  {
    id: 'root',
    pId: 0,
    value: 'root',
    title: '根'
  }
]

const genTreeNode = (parentId: any, isLeaf = false) => {
  const random = Math.random()
    .toString(36)
    .substring(2, 6);
  return {
    id: random,
    pId: parentId,
    value: random,
    title: isLeaf ? 'Tree Node' : 'Expand to load',
    isLeaf,
  }
}

const loadData = (treeNode: any) =>
  new Promise(resolve => {
    const { id } = treeNode.props;
    setTimeout(() => {
      resolve([
        genTreeNode(id, false),
        genTreeNode(id, true),
      ])
    }, 300);
  })

const fields = [
  { field: 'basic', title: 'Basic', type: 'object', widget: 'object', properties: [
    { field: f(), title: 'TreeSelect', type: 'string', widget: 'tree', more: { treeData } },
    { field: f(), title: 'allowClear', type: 'string', widget: 'tree', more: { treeData, allowClear: true } },
    { field: f(), title: 'multiple', type: 'array', widget: 'tree', more: { treeData, multiple: true } },
    { field: f(), title: 'treeCheckable', type: 'array', widget: 'tree', more: { treeData, treeCheckable: true } },
    { field: f(), title: 'labelInValue', type: 'object', widget: 'tree', more: { treeData, labelInValue: true } },
  ]},

  { field: 'dropdown', title: 'Basic', type: 'object', widget: 'object', properties: [
    { field: f(), title: 'dropdownClassName', type: 'string', widget: 'tree', more: { treeData, dropdownClassName: 'tree-dropdown-classname' } },
    { field: f(), title: 'dropdownMatchSelectWidth', type: 'string', widget: 'tree', more: { treeData, dropdownMatchSelectWidth: true } },
    { field: f(), title: 'dropdownStyle', type: 'string', widget: 'tree', more: { treeData, dropdownStyle: { background: '#CEC' } } },
    // { field: f(), title: 'getPopupContainer', type: 'string', widget: 'tree', more: { treeData, getPopupContainer: window.document.body } },
  ]},

  { field: 'search', title: 'Search', type: 'object', widget: 'object', properties: [
    { field: f(), title: 'showSearch', type: 'string', widget: 'tree', more: { treeData, showSearch: true } },
    { field: f(), title: 'filterTreeNode', type: 'string', widget: 'tree', more: { treeData, showSearch: true, filterTreeNode: (s: string, n: any) => true } },
    { field: f(), title: 'searchPlaceholder', type: 'string', widget: 'tree', more: { treeData, showSearch: true, searchPlaceholder: '搜索吧' } },
    { field: f(), title: 'DIS autoClearSearchValue', type: 'string', widget: 'tree', more: { treeData, showSearch: true, autoClearSearchValue: false } },
  ]},

  { field: 'async', title: 'Async', type: 'object', widget: 'object', properties: [
    { field: f(), title: 'loadData', type: 'string', widget: 'tree', more: { async: true, treeData: rootTree, loadData } },
    { field: f(), title: 'Default Root', type: 'string', widget: 'tree', more: { async: true, loadData } },
  ]},

]

export default {
  title: 'TreeSelect'
};


export const treeSelects: React.FC = () => {
  const formProps = {
    fields,
  }

  return <Template
    configForm={cfg => <ReactFromRender {...formProps} {...cfg} />}
  />
}
