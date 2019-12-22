import { Form, Select } from 'antd';
import React from 'react';
import { WidgetFuncType } from '../utils/create-field';
import { fromMore } from '../utils';
const { Option } = Select

const select: WidgetFuncType = (form, p, { propsForm, fieldOptions, propsWidget }, cfOptions) => {
  const { field, options, more } = p
  const morePropsWidget = fromMore(more, [
    'allowClear',
    'autoClearSearchValue',
    'autoFocus',
    'defaultActiveFirstOption',
    // 'defaultValue',
    'number',
    'LabeledValue',
    'disabled',
    'dropdownClassName',
    'dropdownMatchSelectWidth',
    'dropdownRender',
    'dropdownStyle',
    'dropdownMenuStyle',
    'filterOption',
    'firstActiveValue',
    'getPopupContainer',
    'labelInValue',
    'maxTagCount',
    'maxTagTextLength',
    'maxTagPlaceholder',
    'mode',
    'notFoundContent',
    'optionFilterProp',
    'optionLabelProp',
    'placeholder',
    'showArrow',
    'showSearch',
    'size',
    'suffixIcon',
    'removeIcon',
    'clearIcon',
    'menuItemSelectedIcon',
    'tokenSeparators',
    // 'value',
    'number',
    'LabeledValue',
    'onBlur',
    'onChange',
    'onDeselect',
    'onFocus',
    'onInputKeyDown',
    'onMouseEnter',
    'onMouseLeave',
    'onPopupScroll',
    'onSearch',
    'onSelect',
    'defaultOpen',
    // 'open',
    'onDropdownVisibleChange',
    'loading',
  ], {
    filterOption: (input: string, option: any) => {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  })


  return <Form.Item {...propsForm} key={field} hasFeedback>
    {form.getFieldDecorator(field, {
      ...fieldOptions,
    })(
      <Select
        {...propsWidget}
        style={{ width: '100%' }}
        {...morePropsWidget}
      >
        {options.map(({ value, label}) => <Option key={value} value={value}>{label}</Option>)}
      </Select>
    )}
  </Form.Item>
}

export default select
