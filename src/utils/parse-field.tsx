import { WidgetFuncType } from './create-field';
import { FieldProps } from '../models/Field';
import checkboxes from '../widgets/checkboxes';
import input from '../widgets/input';
import number from '../widgets/number';
import radio from '../widgets/radio';
import radioButton from '../widgets/radio-button';
import rate from '../widgets/rate';
import select from '../widgets/select';
import slider from '../widgets/slider';
import switch_ from '../widgets/switch';
import upload from '../widgets/upload';
import dragger from '../widgets/dragger';


const widgets: { [widgetName: string]: WidgetFuncType } = {
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

export function parseField(p: FieldProps, dsPack: any) : { widget: WidgetFuncType, props: any } {
  const widget = widgets[p.widget]

  return { widget, props: p }
}
