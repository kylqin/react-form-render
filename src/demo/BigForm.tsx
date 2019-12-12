import { Form, Switch, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { FormLayout, FormProps } from 'antd/lib/form/Form';
import React, { FormEvent } from 'react';
import { safeField, FieldPropsOptional } from '../models/Field';
import { createField } from '../utils/create-field';


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

  render() {
    const { form, layout, fields } = this.props
    let formProps : FormProps = {
      hideRequiredMark: false,
      colon: false,
      layout: layout as FormLayout
    };

    if (layout !== 'vertical') {
      formProps.labelCol = { span: 6 }
      formProps.wrapperCol = { span: 14 }
    }

    const _fields = fields.map(f => safeField(f))

    return (
      <Form {...formProps} onSubmit={this.handleSubmit}>
        <div> hi </div>
        {_fields.map(f => createField(form, f, ''))}

        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const onFieldsChange = (props: any, changedFields: any, allFields: any) => {
  console.log('onFieldsChange', props, changedFields, allFields)
}

const Wrapped = Form.create({ name: 'validate_other', onFieldsChange })(BigForm);

export default Wrapped

