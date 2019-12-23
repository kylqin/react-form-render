import { FieldProps } from '../models/Field';
import empty from '../widgets/empty'
import checkboxes from '../widgets/checkboxes';
import checkbox from '../widgets/checkbox';
import dragger from '../widgets/dragger';
import input from '../widgets/input';
import number from '../widgets/number';
import radio from '../widgets/radio';
import radioButton from '../widgets/radio-button';
import rate from '../widgets/rate';
import select from '../widgets/select';
import slider from '../widgets/slider';
import switch_ from '../widgets/switch';
import text from '../widgets/text';
import upload from '../widgets/upload';
import { WidgetFuncType } from './create-field';
import date from '../widgets/date'
import dateRange from '../widgets/date-range'
import datetime from '../widgets/datetime'
import datetimeRange from '../widgets/datetime-range'
import time from '../widgets/time'
import month from '../widgets/month'
import monthRange from '../widgets/month-range'
import week from '../widgets/week'
import cascader from '../widgets/cascader'


const widgets: { [widgetName: string]: WidgetFuncType } = {
  empty,
  text,
  input,
  number,
  select,
  switch: switch_,
  slider,
  radio,
  'radio-button': radioButton,
  checkboxes,
  checkbox,
  rate,
  upload,
  dragger,
  date,
  'date-range': dateRange,
  datetime,
  'datetime-range': datetimeRange,
  time,
  month,
  'month-range': monthRange,
  week,
  cascader
}

export function parseField(p: FieldProps) : { widget: WidgetFuncType, props: any } {
  const widget = widgets[p.widget]

  return { widget, props: p }
}
