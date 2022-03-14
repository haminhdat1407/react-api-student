import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';

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

      <Form.Item label='Age'>
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
          <Select.Option value='demo'>Male</Select.Option>
          <Select.Option value='demo'>Female</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label='DatePicker'>
        <DatePicker />
      </Form.Item>

      <Form.Item>
        <Button>Button</Button>
      </Form.Item>
    </Form>
  );
};
export default FormInput;
