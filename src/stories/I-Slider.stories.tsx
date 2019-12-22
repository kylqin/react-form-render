import React from 'react'
import ReactFromRender from '../react-form-render'
import { fgen } from './_helpers'
import Template from './_template'

const f = () => fgen('_slider')

const marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100°C</strong>,
  },
};

const fields = [
  { field: f(), title: 'Slider', type: 'number', widget: 'slider' },
  { field: f(), title: 'Marks', type: 'number', widget: 'slider', more: { marks } },
  { field: f(), title: 'InitialValue', type: 'number', widget: 'slider', initialValue: 26 },
  { field: f(), title: 'Auto Focus', type: 'number', widget: 'slider', more: { autoFocus: true } },
  { field: f(), title: 'Dots', type: 'number', widget: 'slider', more: { dots: true, step: 10 } },
  { field: f(), title: 'DIS Included', type: 'number', widget: 'slider', initialValue: 50, more: { included: false } },
  { field: f(), title: 'Min-Max', type: 'number', widget: 'slider', more: { min: 50, max: 80, marks: { 50: '50', 80: '80' } } },
  { field: f(), title: 'Range', type: 'array', widget: 'slider', initialValue: [20, 50], more: { range: true } },
  { field: f(), title: 'Reverse', type: 'number', widget: 'slider', more: { reverse: true } },
  { field: f(), title: 'Step', type: 'number', widget: 'slider', more: { step: 10 } },

  { field: f(), title: 'TooltipVisible', type: 'number', widget: 'slider', more: { tooltipVisible: true } },
  { field: f(), title: 'TipFormatter', type: 'number', widget: 'slider', more: { tooltipVisible: true, tipFormatter: (v: number) => `${v}°C` } },

  { field: f(), title: 'Vertical not supported', type: 'object', widget: 'object', properties: [
    { field: f(), title: 'Vertical', type: 'number', widget: 'slider', more: { vertical: true } },
  ]},

  { filed: f(), title: 'TooltipPlacement', type: 'object', widget: 'object', properties: [
    { field: f(), title: 'topLeft', type: 'number', widget: 'slider', initialValue: 50, more: { tooltipVisible: true, tooltipPlacement: 'topLeft' } },
    { field: f(), title: 'top', type: 'number', widget: 'slider', initialValue: 50, more: { tooltipVisible: true, tooltipPlacement: 'top' } },
    { field: f(), title: 'topRight', type: 'number', widget: 'slider', initialValue: 50, more: { tooltipVisible: true, tooltipPlacement: 'topRight' } },
    { field: f(), title: 'leftTop', type: 'number', widget: 'slider', initialValue: 50, more: { tooltipVisible: true, tooltipPlacement: 'leftTop' } },
    { field: f(), widget: 'empty' },
    { field: f(), title: 'rightTop', type: 'number', widget: 'slider', initialValue: 50, more: { tooltipVisible: true, tooltipPlacement: 'rightTop' } },
    { field: f(), title: 'left', type: 'number', widget: 'slider', initialValue: 50, more: { tooltipVisible: true, tooltipPlacement: 'left' } },
    { field: f(), widget: 'empty' },
    { field: f(), title: 'right', type: 'number', widget: 'slider', initialValue: 50, more: { tooltipVisible: true, tooltipPlacement: 'right' } },
    { field: f(), title: 'bottomLeft', type: 'number', widget: 'slider', initialValue: 50, more: { tooltipVisible: true, tooltipPlacement: 'bottomLeft' } },
    { field: f(), widget: 'empty' },
    { field: f(), title: 'bottomRight', type: 'number', widget: 'slider', initialValue: 50, more: { tooltipVisible: true, tooltipPlacement: 'bottomRight' } },
    { field: f(), title: 'leftBottom', type: 'number', widget: 'slider', initialValue: 50, more: { tooltipVisible: true, tooltipPlacement: 'leftBottom' } },
    { field: f(), title: 'bottom', type: 'number', widget: 'slider', initialValue: 50, more: { tooltipVisible: true, tooltipPlacement: 'bottom' } },
    { field: f(), title: 'rightBottom', type: 'number', widget: 'slider', initialValue: 50, more: { tooltipVisible: true, tooltipPlacement: 'rightBottom' } },
  ]},
]

export default {
  title: 'Slider'
};


export const Sliders: React.FC = () => {
  const formProps = {
    fields,
  }

  return <Template
    configForm={cfg => <ReactFromRender {...formProps} {...cfg} />}
  />
}
