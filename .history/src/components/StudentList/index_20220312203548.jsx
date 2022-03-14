import { Table } from 'antd';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import React from 'react';
import './style.css';
import dayjs from 'dayjs';
import { Button } from 'antd';

const { Column, ColumnGroup } = Table;

StudentList.propTypes = {
  data: PropTypes.array,
  onRemove: PropTypes.func,
};

function StudentList({ data, onRemove }) {
  const handleRemove = (id) => {
    onRemove(id);
  };

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'mark',
      dataIndex: 'mark',
      key: 'mark',
      sorter: {
        compare: (a, b) => a.mark - b.mark,
        multiple: 2,
      },
    },
    {
      title: 'gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'createdAt',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (createdAt) => {
        return dayjs(createdAt).format('DD/MM/YYYY');
      },
      sorter: {
        compare: (a, b) => a.createdAt - b.createdAt,
        multiple: 2,
      },
    },
    {
      title: 'city',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'key',
      render: (dataIndex) => {
        return (
          <Button type='primary' danger onClick={() => handleRemove(dataIndex)}>
            Delete
          </Button>
        );
      },
    },
  ];

  return <Table dataSource={data} columns={columns}></Table>;
}

export default StudentList;
