import { Button, Form, Icon, Upload } from 'antd';
import React from 'react';
import { WidgetFuncType } from '../utils/create-field';
import { fromMore } from '../utils';


export const defaultFormatFiles = (e: any) => {
  if (Array.isArray(e)) {
    return e
  }
  return e && e.fileList;
}

const upload: WidgetFuncType = (form, p, { propsForm, fieldOptions, propsWidget }) => {
  const { field, more } = p

  const moreProps = fromMore(more, [
    'accept',
    // 'action',
    'method',
    'directory',
    'beforeUpload',
    'customRequest',
    'data',
    // 'defaultFileList',
    'disabled',
    // 'fileList',
    'headers',
    'listType',
    'multiple',
    'name',
    'previewFile',
    'showUploadList',
    'supportServerRender',
    'withCredentials',
    'openFileDialogOnClick',
    'onChange',
    'onPreview',
    'onRemove',
    'onDownload',
    'transformFile',
  ], {
    formatFiles: defaultFormatFiles,
    buttonText: 'Click to upload',
    action: 'upload'
  })
  const { formatFiles, buttonText, ...morePropsWidget } = moreProps


  return <Form.Item {...propsForm} key={field}>
    {form.getFieldDecorator(field, {
      ...fieldOptions,
      valuePropName: 'fileList',
      getValueFromEvent: formatFiles,
    })(
      <Upload {...propsWidget} {...morePropsWidget}>
        {moreProps.listType === 'picture-card' ?
          <div>
            <Icon type="plus" />
            <div className="ant-upload-text">{buttonText}</div>
          </div>
          :
          <Button disabled={propsWidget.disabled}>
            <Icon type="upload" /> {buttonText}
          </Button>
        }
      </Upload>,
    )}
  </Form.Item>
}

export default upload
