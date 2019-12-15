import { Form, Checkbox, Col, Row } from 'antd';
import React from 'react';
import { WidgetFuncType } from '../utils/create-field';

const checkboxes: WidgetFuncType = (form, p, { propsForm, fieldOptions, propsWidget }) => {
  const { field, options, more } = p
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
              <Checkbox value={o.value}>{o.label}</Checkbox>
            </Col>
          )}
        </Row> :
        options.map(o => <Checkbox key={o.value} value={o.value}>{o.label}</Checkbox>)
      }

    </Checkbox.Group>
    )}
  </Form.Item>
}

export default checkboxes
