import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
} from 'antd';
import React from 'react';

const FormInput = ({ onChange, dataEdit }) => {
  const onFinish = (e) => {
    const value = { ...e };
    const formValue = {
      ...value,
      id: value.id + Math.random() * 10000,
    };
    onChange(formValue);
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

        <Form.Item label='Name' name='name'>
          <Input />
        </Form.Item>

        <Form.Item
          label='Age'
          name='age'
          rules={[{ type: 'number', min: 0, max: 99 }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item label='Mark' name='mark' rules={[{ min: 0, max: 10 }]}>
          <Input />
        </Form.Item>

        <Form.Item label='Gender' name='gender'>
          <Radio.Group>
            <Radio value={1}>Male</Radio>
            <Radio value={2}>Female</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label='City' name='city'>
          <Select>
            <Select.Option value='dn'>Da Nang</Select.Option>
            <Select.Option value='hcm'>Ho Chi Minh</Select.Option>
            <Select.Option value='hn'>Ha Noi</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label='CreatedAt' name='createdAt'>
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
