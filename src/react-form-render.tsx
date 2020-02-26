import { Button, Form, Row } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { FormLayout, FormProps } from 'antd/lib/form/Form';
import React, { FormEvent } from 'react';
import { FieldPropsOptional, safeField } from './models/Field';
import { createFields } from './utils/create-field';

import './style.less'


export interface IReactFormRenderProps {
  /**
   * Form fields layout.
   * @default horizontal
   */
  layout: 'horizontal' | 'vertical'
  /**
   * Number of the form fields columns.
   * @default 3
   */
  column: number
  /**
   * Disabled form or not.
   * @default false
   */
  disabled: boolean
  /**
   * Fields configuration
   */
  fields: FieldPropsOptional[]
}

type Props = IReactFormRenderProps & FormComponentProps


class ReactFormRender extends React.Component<Props> {
  componentDidMount () {
    this.forceUpdate()
  }

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.form.validateFields((err: Error, values: any[]) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render () {
    const { form, layout, column: _column, disabled, fields } = this.props
    const column = Number(_column) || 2

    let formProps : FormProps = {
      // hideRequiredMark: false,
      colon: true,
      layout: layout as FormLayout
    };

    if (layout !== 'vertical') {
      formProps.labelCol = { span: 6 }
      formProps.wrapperCol = { span: 14 }
    } else if (column !== 1){
      formProps.labelCol = { span: 24 }
      formProps.wrapperCol = { span: 24 }
    } else {
    }

    const cfOptions = { column, layout }

    const _fields = fields.map(f => safeField(f, { disabled, form }))

    return (
      <Form {...formProps} onSubmit={this.handleSubmit}>
        <Row>
          {createFields(form, _fields, cfOptions)}
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const onFieldsChange = (props: any, changedFields: any, allFields: any) => {
  console.log('onFieldsChange ->', props, changedFields, allFields)
}

const Wrapped = Form.create({ name: 'validate_other', onFieldsChange  })(ReactFormRender)

export default Wrapped

