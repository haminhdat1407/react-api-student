import { Button, Form, Input, InputNumber, Modal, Radio, Select } from 'antd';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';

ModalForm.propTypes = {
  onChange: PropTypes.func,
};

function ModalForm({ onChange }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dataForm, setDataForm] = useState();

  const onFinish = (e) => {
    // e la gia tri cua form ma ham onFinish tra ve
    const formValue = {
      ...e,
      id: Math.floor(e.id + Math.random() * 1234567) + e.city,
    };
    setDataForm(formValue);
    onChange(formValue);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };
  const cancelModal = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = () => {
    if (!dataForm) setIsModalVisible(false);
  };

  return (
    <>
      <i class='fa-solid fa-plus'></i>
      <Button type='primary' onClick={showModal} style={{ marginLeft: '30%' }}>
        Add Student
      </Button>
      <Modal
        title='Add Student'
        visible={isModalVisible}
        onCancel={cancelModal}
      >
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
                message: 'Age must be older from 0 to 120 age !',
                type: 'number',
                min: 0,
                max: 120,
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
              <Radio value={'Male'}>Male</Radio>
              <Radio value={'Female'}>Female</Radio>
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
            <Button
              block
              htmlType='submit'
              style={{ backgroundColor: 'aqua' }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default ModalForm;
