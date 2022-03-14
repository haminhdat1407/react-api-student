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

const { Column, ColumnGroup } = Table;

StudentList.propTypes = {
  data: PropTypes.array,
  onRemove: PropTypes.func,
  onChange: PropTypes.func,
};

function StudentList({ data, onRemove, onChange }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [idEdit, setIdEdit] = useState('');

  const handleRemove = (id) => {
    onRemove(id);
  };

  const showModal = (idEdit) => {
    setIsModalVisible(true);
    setIdEdit(idEdit);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
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
        multiple: 2,
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
      render: (dataIndex) => {
        return (
          <div key={dataIndex}>
            <Button
              type='primary'
              danger
              onClick={() => handleRemove(dataIndex)}
            >
              Delete
            </Button>
            <Button
              type='primary'
              style={{ marginLeft: '10px' }}
              onClick={() => showModal(dataIndex)}
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
              <Button
                block
                htmlType='submit'
                style={{ backgroundColor: 'aqua' }}
                onClick={() => handleEditStudent(idEdit)}
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
