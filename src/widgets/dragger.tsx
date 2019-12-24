import { Form, Icon, Upload } from 'antd';
import React from 'react';
import { WidgetFuncType } from '../utils/create-field';
import { defaultFormatFiles } from './upload'
import { fromMore } from '../utils';


const dragger: WidgetFuncType = (form, p, { propsForm, fieldOptions, propsWidget }) => {
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
    // 'disabled',
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
    uploadText: 'Click or drag file to this area to upload',
    uploadHint: 'Support for a single or bulk upload.',
    action: 'upload'
  })

  const { formatFiles, uploadText, uploadHint, ...morePropsWidget } = moreProps

  return <Form.Item {...propsForm} key={field}>
    {form.getFieldDecorator(field, {
      valuePropName: 'fileList',
      getValueFromEvent: formatFiles,
    })(
      <Upload.Dragger {...propsWidget} name="files" {...morePropsWidget}>
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
