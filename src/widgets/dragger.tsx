import { Form, Icon, Upload } from 'antd';
import React from 'react';
import { WidgetFuncType } from '../utils/create-field';
import { defaultFormatFiles } from './upload'


const dragger: WidgetFuncType = (form, p, { propsForm, fieldOptions, propsWidget }) => {
  const { field, more } = p

  const formatFiles = more.get('formatFiles') || defaultFormatFiles
  const uploadText = more.get('uploadText') || 'Click or drag file to this area to upload'
  const uploadHint = more.get('uploadHint') || 'Support for a single or bulk upload.'
  const action = more.get('action') || 'upload'

  return <Form.Item {...propsForm} key={field}>
    {form.getFieldDecorator(field, {
      valuePropName: 'fileList',
      getValueFromEvent: formatFiles,
    })(
      <Upload.Dragger {...propsWidget} name="files" action={action}>
        <p className="ant-upload-drag-icon">
          <Icon type="inbox" />
        </p>
        <p className="ant-upload-text">{uploadText}</p>
        <p className="ant-upload-hint">{uploadHint}</p>
      </Upload.Dragger>,
    )}
  </Form.Item>
}

export default dragger
