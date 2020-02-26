import React from 'react'
import { withInfo } from '@storybook/addon-info'
import ReactFromRender from '../react-form-render'
import { fields } from '../demo/fields'

export default {
  title: 'Documents|Doc',
  decorators: [withInfo],
}

export const doc = () => <ReactFromRender layout='horizontal' column={3} fields={fields.slice(2, 3)} />

doc.story = {
  info: {
    inline: true
  }
}
