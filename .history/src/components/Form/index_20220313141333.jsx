import React, { useState } from 'react';
import { Radio } from 'antd';
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  InputNumber,
  Typography,
} from 'antd';

const FormInput = () => {
  const onFinish = (e) => {
    console.log(e);
  };
  return (
    <>
      <Form
        style={{ marginTop: '30px', marginLeft: '20px' }}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        onFinish={onFinish}
      >
        <Form.Item label='ID' name='id'>
          <Input />
        </Form.Item>

        <Form.Item label='Name'>
          <Input />
        </Form.Item>

        <Form.Item
          label='Age'
          name='Age'
          rules={[{ type: 'number', min: 0, max: 99 }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item label='Mark' name='Mark' rules={[{ min: 0, max: 10 }]}>
          <Input />
        </Form.Item>

        <Form.Item label='Gender'>
          {/* <Select>
            <Select.Option value='male'>Male</Select.Option>
            <Select.Option value='female'>Female</Select.Option>
          </Select> */}
          <Radio.Group>
            <Radio value={1}>Male</Radio>
            <Radio value={2}>Female</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label='City'>
          <Select>
            <Select.Option value='dn'>Da Nang</Select.Option>
            <Select.Option value='hcm'>Ho Chi Minh</Select.Option>
            <Select.Option value='hn'>Ha Noi</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label='CreatedAt'>
          <DatePicker />
        </Form.Item>

        <Form.Item style={{ marginLeft: '58px' }}>
          <Button block htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default FormInput;
