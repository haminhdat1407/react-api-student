import { Button, Form, Table } from 'antd';
import 'antd/dist/antd.css';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './style.css';

const { Column, ColumnGroup } = Table;

StudentList.propTypes = {
  data: PropTypes.array,
  onEditStudent: PropTypes.func,
  onRemove: PropTypes.func,
  onChange: PropTypes.func,
};

function StudentList({ data, onEditStudent, onRemove, onChange }) {
  const handleRemove = (id) => {
    onRemove(id);
  };

  const handleEditStudent = (idEdit) => {
    onEditStudent(idEdit);
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
              onClick={() => handleEditStudent(dataIndex)}
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
        style={{ width: '80%' }}
        dataSource={data}
        columns={columns}
      ></Table>
    </>
  );
}

export default StudentList;
