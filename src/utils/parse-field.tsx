import { FieldProps } from '../models/Field';
import empty from '../widgets/empty'
import checkboxes from '../widgets/checkboxes';
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
  rate,
  upload,
  dragger
}

export function parseField(p: FieldProps) : { widget: WidgetFuncType, props: any } {
  const widget = widgets[p.widget]

  return { widget, props: p }
}
