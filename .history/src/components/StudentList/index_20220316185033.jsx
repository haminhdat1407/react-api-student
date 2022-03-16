import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  Radio,
  Select,
  Table,
} from 'antd';
import 'antd/dist/antd.css';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './style.css';

import { ExclamationCircleOutlined } from '@ant-design/icons';

const { Column, ColumnGroup } = Table;
const { confirm } = Modal;
StudentList.propTypes = {
  data: PropTypes.array,
  onRemove: PropTypes.func,
  onEdit: PropTypes.func,
};

function StudentList({ data, onRemove, onEdit }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [studentEdit, setStudentEdit] = useState(null);

  const handleRemove = (id) => {
    onRemove(id);
  };

  const onEditStudent = (id, record) => {
    setIsModalVisible(true);
    setStudentEdit({ ...record });
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleEditForm = (valueForm) => {
    onEdit(valueForm);
    setIsModalVisible(false);
  };
  const showDeleteConfirm = (dataIndex) => {
    confirm({
      title: 'Are you sure delete student?',
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        handleRemove(dataIndex);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'key',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'key',
    },
    {
      title: 'Mark',
      dataIndex: 'mark',
      key: 'key',
      render: (mark) => {
        return parseFloat(mark).toFixed(1);
      },
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'key',
    },
    {
      title: 'CreatedAt',
      dataIndex: 'createdAt',
      key: 'key',
      render: (createdAt) => {
        return dayjs(createdAt).format('YYYY-MM-DD');
      },
      sorter: {
        compare: (a, b) => a.createdAt - b.createdAt,
        multiple: -1,
      },
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'key',
    },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'key',
      render: (dataIndex, record) => {
        return (
          <div key={dataIndex}>
            <Button
              type='primary'
              danger
              onClick={() => showDeleteConfirm(dataIndex)}
            >
              Delete
            </Button>
            <Button
              type='primary'
              style={{ marginLeft: '10px' }}
              onClick={() => onEditStudent(dataIndex, record)}
            >
              Edit
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Table
        style={{ width: '95%', margin: '0 auto' }}
        dataSource={data}
        columns={columns}
      ></Table>
      {/* MODAL EDIT  */}
      {isModalVisible === true && (
        <Modal
          title='Edit Student'
          visible={isModalVisible}
          onCancel={handleCloseModal}
        >
          <Form
            style={{ marginTop: '30px', marginLeft: '20px' }}
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            initialValues={{
              id: studentEdit?.id,
              name: studentEdit?.name,
              age: studentEdit?.age,
              mark: studentEdit?.mark,
              gender: studentEdit?.gender === 'Male' ? 'Male' : 'Female',
              city: studentEdit?.city,
            }}
            onFinish={handleEditForm}
          >
            <Form.Item label='ID' name='id'>
              <Input disabled />
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
                // block
                htmlType='submit'
                style={{
                  backgroundColor: 'aqua',
                  width: '-webkit-fill-available',
                }}
              >
                Edit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      )}
    </>
  );
}

export default StudentList;
