import React from 'react'
import { Button, Icon } from 'antd'
import moment from 'moment'
import { fgen } from './_helpers'
import RenderFields from './_renderFields'
import './_classname.css'

export default {
  title: 'Widgets|Time'
};

const f = () => fgen('_time')

const fields = [
  { field: f(), title: 'Time', type: 'time', widget: 'time', more: {} },
  { field: f(), title: 'addon', type: 'time', widget: 'time', more: { addon: () => <Button size="small" type="primary">Ok</Button> } },
  { field: f(), title: 'DIS allowClear', type: 'time', widget: 'time', more: { allowClear: false } },
  { field: f(), title: 'autoFocus', type: 'time', widget: 'time', more: { autoFocus: true } },
  { field: f(), title: 'className', type: 'time', widget: 'time', more: { className: 'time-classname' } },
  { field: f(), title: 'popupClassName', type: 'time', widget: 'time', more: { popupClassName: 'time-popup-classname' } },
  { field: f(), title: 'popupStyle', type: 'time', widget: 'time', more: { popupStyle: { color: '#383'} } },
  { field: f(), title: 'clearText', type: 'time', widget: 'time', more: { clearText: '清除内容' } },
  { field: f(), title: 'initialValue', type: 'time', widget: 'time', initialValue: moment('2019-12-23 09:45:00') },
  { field: f(), title: 'defaultOpenValue', type: 'time', widget: 'time', more: { defaultOpenValue: moment('2019-12-23 08:30:00')} },
  { field: f(), title: 'disabledHours', type: 'time', widget: 'time', more: { disabledHours: () => [0, 1, 2, 3, 23] } },
  { field: f(), title: 'disabledMinutes', type: 'time', widget: 'time', more: { disabledMinutes: (h: number) => h % 2 ? [0, 1, 2, 3, 23, 59] : [] } },
  { field: f(), title: 'disabledSeconds', type: 'time', widget: 'time', more: { disabledSeconds: (h: number, m: number) => [0, 1, 2, 3, 23, 59] } },
  { field: f(), title: 'format', type: 'time', widget: 'time', more: { format: 'HH时mm分ss秒' } },
  // { field: f(), title: 'getPopupContainer', type: 'time', widget: 'time', more: { getPopupContainer: () => document.body } },
  { field: f(), title: 'hideDisabledOptions', type: 'time', widget: 'time', more: { format: 'HH时mm分ss秒' } },
  { field: f(), title: 'hourStep', type: 'time', widget: 'time', more: { hourStep: 4 } },
  { field: f(), title: 'minuteStep', type: 'time', widget: 'time', more: { minuteStep: 4 } },
  { field: f(), title: 'secondStep', type: 'time', widget: 'time', more: { secondStep: 4 } },
  { field: f(), title: 'inputReadOnly', type: 'time', widget: 'time', more: { inputReadOnly: true } },
  { field: f(), title: 'placeholder', type: 'time', widget: 'time', more: { placeholder: '请选择时间' } },
  { field: f(), title: 'suffixIcon', type: 'time', widget: 'time', more: { suffixIcon: <Icon type='question-circle-o'/> } },
  { field: f(), title: 'clearIcon', type: 'time', widget: 'time', more: { clearIcon: <Icon type='minus' />} },
  { field: f(), title: 'use12Hours', type: 'time', widget: 'time', more: { use12Hours: true } },
]


export const times: React.FC = () => <RenderFields column={4} fields={fields}/>