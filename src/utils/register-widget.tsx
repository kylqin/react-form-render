import { WidgetFuncType } from './create-field';

export type TWidgetMapping = { [widgetName: string]: WidgetFuncType }

export const moreWidgets: TWidgetMapping = {}

export function registerWidget (name: string, widget: WidgetFuncType) {
  moreWidgets[name] = widget
}

export function registerWidgets (widgets: TWidgetMapping) {
  for (const name of Object.keys(widgets)) {
    moreWidgets[name] = widgets[name]
  }
}
