import { Form, TreeSelect } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import React, { FC, useState } from 'react';
import { FieldProps } from '../models/Field';
import { fromMore } from '../utils';
import { WidgetMoreProps, WidgetFuncType } from '../utils/create-field';

interface IFPOProps { form: WrappedFormUtils<any>, p: FieldProps, widgetMoreProps: WidgetMoreProps }

const FCTreeSelect: FC<IFPOProps> = ({form, p, widgetMoreProps: { propsForm, fieldOptions, propsWidget }}) => {
  const { field, more } = p

  const morePropsWidget = fromMore(more, [
    'allowClear',
    'autoClearSearchValue',
    // 'defaultValue',
    // 'disabled',
    'dropdownClassName',
    'dropdownMatchSelectWidth',
    'dropdownStyle',
    'filterTreeNode',
    'getPopupContainer',
    'labelInValue',
    'loadData', // see asyncProps
    'maxTagCount',
    'maxTagPlaceholder',
    'multiple',
    'placeholder',
    'searchPlaceholder',
    // 'searchValue', // fix: If set this value the `showSearch` will disabled
    'treeIcon',
    'showCheckedStrategy',
    // 'showSearch', // should be false by default
    'size',
    'suffixIcon',
    'treeCheckable',
    'treeCheckStrictly',
    'treeData',
    'treeDataSimpleMode',
    'treeDefaultExpandAll',
    'treeDefaultExpandedKeys',
    'treeExpandedKeys',
    'treeNodeFilterProp',
    'treeNodeLabelProp',
    // 'value',
    'onChange',
    'onSearch',
    'onSelect',
    'onTreeExpand',
  ], {
    showSearch: false
  })

  const [oldTreeData, setOldTreeData] = useState(morePropsWidget.treeData || [{ id: 'root', pId: 0, value: 'root', title: 'Root' }])

  const async = more.get('async') || false

  let asyncProps: { [p: string]: any } = async ? {
    ...fromMore(more, ['loadData']),
    treeData: oldTreeData,
    treeDataSimpleMode: true
  } : {}

  if (async) {
    const { loadData } = fromMore(more, ['loadData'])
    asyncProps.loadData = (...args: any[]) => loadData(...args).then((nodes: any[]) => {
      setOldTreeData(oldTreeData.concat(nodes))
      return true
    })
  }

  return <Form.Item {...propsForm} key={field} hasFeedback={false}>
    {form.getFieldDecorator(field, {
      ...fieldOptions,
    })(
      <TreeSelect
        {...propsWidget}
        {...morePropsWidget}
        {...asyncProps}
        style={{ width: '100%' }}
      />
    )}
  </Form.Item>

}

const treeSelect: WidgetFuncType = (form, p, widgetMoreProps) => {
  return <FCTreeSelect form={form} p={p} widgetMoreProps={widgetMoreProps} />
}

export default treeSelect
