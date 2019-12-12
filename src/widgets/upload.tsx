import { Button, Form, Icon, Upload } from 'antd';
import React from 'react';
import { WidgetFuncType } from '../utils/create-field';


export const defaultFormatFiles = (e: any) => {
  if (Array.isArray(e)) {
    return e
  }
  return e && e.fileList;
}

const upload: WidgetFuncType = (form, p, { propsForm, fieldOptions }) => {
  const { field, more } = p

  const formatFiles = more.get('formatFiles') || defaultFormatFiles
  const buttonText = more.get('buttonText') || 'Click to upload'
  const action = more.get('action') || 'upload'

  return <Form.Item {...propsForm} key={field} extra="longgggggggggggggggggggggggggggggggggg">
    {form.getFieldDecorator(field, {
      ...fieldOptions,
      valuePropName: 'fileList',
      getValueFromEvent: formatFiles,
    })(
      <Upload name='logo' action={action} listType='picture'>
        <Button>
          <Icon type="upload" /> {buttonText}
        </Button>
      </Upload>,
    )}
  </Form.Item>

}

export default upload
