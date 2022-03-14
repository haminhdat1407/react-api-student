import React, { useState } from 'react';
import { Form, Input, Button, Select, DatePicker, InputNumber } from 'antd';

const FormInput = () => {
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
    >
      <Form.Item label='Id'>
        <Input />
      </Form.Item>

      <Form.Item label='Name'>
        <Input />
      </Form.Item>

      <Form.Item
        label='Age'
        name='Age'
        value={number}
        rules={[{ type: 'number', min: 0, max: 99 }]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item label='Mark'>
        <InputNumber />
      </Form.Item>

      <Form.Item label='Gender'>
        <Select>
          <Select.Option value='male'>Male</Select.Option>
          <Select.Option value='female'>Female</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label='Gender'>
        <Select>
          <Select.Option value='dn'>Đa nang</Select.Option>
          <Select.Option value='hcm'>HCM</Select.Option>
          <Select.Option value='hn'>HN</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label='DatePicker'>
        <DatePicker />
      </Form.Item>

      <Form.Item>
        <Button>Submit</Button>
      </Form.Item>
    </Form>
  );
};
export default FormInput;
