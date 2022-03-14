// import { Modal, Button } from 'antd';
import { Button, Form, Input, InputNumber, Modal, Radio, Select } from 'antd';
import React, { useState } from 'react';

function FormEdit({ status }) {
  const [isModalVisible, setIsModalVisible] = useState(status);

  const onFinish = (e) => {
    const value = { ...e };

    const formValue = {
      ...value,
      id: value.id + Math.random() * 10000,
    };
  };

  const cancelModal = () => {};

  return (
    <>
      <Modal title='Edit Student' visible={status} onCancel={cancelModal}>
        {/* Form */}
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
          <Form.Item
            label='Name'
            name='name'
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Age'
            name='age'
            rules={[
              {
                required: true,
                message: 'Age must be older to learn 0 !',
                type: 'number',
                min: 0,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            label='Mark'
            name='mark'
            rules={[
              {
                required: true,
                message: 'You can only enter scores from 0 to 10!',
                type: 'number',
                min: 0,
                max: 10,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            label='Gender'
            name='gender'
            rules={[
              {
                required: true,
                message: 'Please tick your gender!',
              },
            ]}
          >
            <Radio.Group style={{ marginLeft: '12px' }}>
              <Radio value={1}>Male</Radio>
              <Radio value={2}>Female</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label='City'
            name='city'
            rules={[
              {
                required: true,
                message: 'Please input your city!',
              },
            ]}
          >
            <Select>
              <Select.Option value='dn'>Da Nang</Select.Option>
              <Select.Option value='hcm'>Ho Chi Minh</Select.Option>
              <Select.Option value='hn'>Ha Noi</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item style={{ marginLeft: '58px' }}>
            <Button block htmlType='submit' style={{ backgroundColor: 'aqua' }}>
              Edit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default FormEdit;
