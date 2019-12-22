import { Form, Checkbox, Col, Row } from 'antd';
import React from 'react';
import { WidgetFuncType } from '../utils/create-field';

const checkboxes: WidgetFuncType = (form, p, { propsForm, fieldOptions, propsWidget }) => {
  const { field, options, more } = p

  const disabled = more.get('disabled') || []
  const disabledItems = disabled.reduce((acc: any, v: string|number) => ({ ...acc, [v]: true }), {})

  const colSpan = more.get('colSpan')

  return <Form.Item {...propsForm} key={field} hasFeedback={false}>
    {form.getFieldDecorator(field, {
      ...fieldOptions
    })(
      <Checkbox.Group {...propsWidget} style={{ width: '100%' }}>
      {colSpan ?
        <Row>
          <div style={{ height: '11px' }} />
          {options.map(o =>
            <Col key={o.value} span={colSpan}>
              <Checkbox value={o.value} disabled={o.value in disabledItems}>{o.label}</Checkbox>
            </Col>
          )}
        </Row> :
        options.map(o => <Checkbox key={o.value} value={o.value} disabled={o.value in disabledItems}>{o.label}</Checkbox>)
      }

    </Checkbox.Group>
    )}
  </Form.Item>
}

export default checkboxes
