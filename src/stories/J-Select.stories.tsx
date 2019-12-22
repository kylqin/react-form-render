import React from 'react'
import ReactFromRender from '../react-form-render'
import { fgen } from './_helpers'
import Template from './_template'

const f = () => fgen('_select')

const options = [
  { value: 'china', label: 'PRC' },
  { value: 'usa', label: 'Amarica' },
  { value: 'uk', label: 'England' },
  { value: 'australia', label: 'Australia' },
]
const filterOption = (input: string, option: any) => {
  return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
}

const fields = [
  { field: 'basic', title: 'Basic', type: 'object', widget: 'object', properties: [
    { field: f(), title: 'Select', type: 'string', widget: 'select', options },
    { field: f(), title: 'InitialValue', type: 'string', widget: 'select', options, initialValue: 'china' },
    { field: f(), title: 'Allow Clear', type: 'string', widget: 'select', options, more: { allowClear: true } },
    { field: f(), title: 'autoFocus', type: 'string', widget: 'select', options, more: { autoFocus: true } },
    { field: f(), title: 'DIS defaultActiveFirstOption', type: 'string', widget: 'select', options, more: { defaultActiveFirstOption: false } },
    { field: f(), title: 'Loading', type: 'string', widget: 'select', options, more: { loading: true } },
  ]},

  { field: 'dropdown', title: 'About Dropdown', type: 'object', widget: 'object', properties: [
    { field: f(), title: 'dropdownClassName', type: 'string', widget: 'select', options, more: { allowClear: true } },
    { field: f(), title: 'dropdownMatchSelectWidth', type: 'string', widget: 'select', options, more: { autoClearSearchValue: false } },
    { field: f(), title: 'dropdownRender', type: 'string', widget: 'select', options, more: { placeholder: '请选择' } },
    { field: f(), title: 'dropdownStyle', type: 'string', widget: 'select', options, more: { placeholder: '请选择' } },
    { field: f(), title: 'dropdownMenuStyle', type: 'string', widget: 'select', options, more: { placeholder: '请选择' } },
  ]},

  { field: 'searchable', title: 'Searchable', type: 'object', widget: 'object', properties: [
    { field: f(), title: 'showSearch', type: 'string', widget: 'select', options, more: { showSearch: true, filterOption, placeholder: '搜索' } },
    { field: f(), title: 'filterOption', type: 'string', widget: 'select', options, more: { showSearch: true, filterOption } },
    { field: f(), title: 'DIS autoClearSearchValue', type: 'array', widget: 'select', options, more: { mode: 'multiple', showSearch: true, autoClearSearchValue: false } },

    { field: f(), title: 'notFoundContent', type: 'string', widget: 'select', options, more: { showSearch: true, notFoundContent: '没有找到' } },
    { field: f(), title: 'optionFilterProp', type: 'string', widget: 'select', options: options.map(o => ({ ...o, key: o.value })), more: { showSearch: true, filterOption: true, optionFilterProp: 'key' } },
  ]},

  { field: 'options', title: 'About Options', type: 'object', widget: 'object', properties: [
    { field: f(), title: 'optionLabelProp', type: 'string', widget: 'select', options: options.map(o => ({ ...o, kk: o.value })), more: { showSearch: true, optionLabelProp: 'value' } },
    { field: f(), title: 'firstActiveValue', type: 'string', widget: 'select', options, more: { firstActiveValue: 'usa' } },
    // { field: f(), title: 'firstActiveValue', type: 'array', widget: 'select', options, more: { mode: 'multiple', firstActiveValue: ['usa', 'uk'] } },
    { field: f(), title: 'labelInValue', type: 'object', widget: 'select', options, initialValue: { key: 'china', label: 'China' }, more: { labelInValue: true } },
    { field: f(), title: 'getPopupContainer', type: 'string', widget: 'select', options, more: {} },
  ]},

  { field: 'multiple', title: 'Mulitpe', type: 'object', widget: 'object', properties: [
    { field: f(), title: 'Select', type: 'array', widget: 'select', options, more: { mode: 'multiple' } },
    { field: f(), title: 'Placeholder', type: 'array', widget: 'select', options, more: { mode: 'multiple', placeholder: '请选择' } },
  ]},

  { field: 'async', title: 'Async', type: 'object', widget: 'object', properties: [
    { field: f(), title: 'async', type: 'string', widget: 'select', options, more: { } },
  ]},
]

export default {
  title: 'Select'
};


export const Selects: React.FC = () => {
  const formProps = {
    fields,
  }

  return <Template
    configForm={cfg => <ReactFromRender {...formProps} {...cfg} />}
  />
}
