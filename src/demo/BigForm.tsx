import { Button, Form, Row } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { FormLayout, FormProps } from 'antd/lib/form/Form';
import React, { FormEvent } from 'react';
import { FieldPropsOptional, safeField } from '../models/Field';
import { createFields } from '../utils/create-field';


export interface BigFormProps {
  layout: string
  column: number,
  fields: FieldPropsOptional[]
}


class BigForm extends React.Component<BigFormProps & FormComponentProps> {
  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.form.validateFields((err: Error, values: any[]) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render () {
    const { form, layout, column: _column, fields } = this.props
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

    const _fields = fields.map(f => safeField(f))

    const cfOptions = { column, layout }

    return (
      <Form {...formProps} onSubmit={this.handleSubmit}>
        <Row>
          {createFields(form, _fields, cfOptions)}
        </Row>

        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const onValuesChange = (props: any, changedFields: any, allFields: any) => {
  console.log('onValuesChange', props, changedFields, allFields)
}

const Wrapped = Form.create({ name: 'validate_other', onValuesChange  })(BigForm);

export default Wrapped

