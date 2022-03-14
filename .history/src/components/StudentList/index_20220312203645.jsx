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
      key: 'id',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'id',
    },
    {
      title: 'mark',
      dataIndex: 'mark',
      key: 'id',
      sorter: {
        compare: (a, b) => a.mark - b.mark,
        multiple: 2,
      },
    },
    {
      title: 'gender',
      dataIndex: 'gender',
      key: 'id',
    },
    {
      title: 'createdAt',
      dataIndex: 'createdAt',
      key: 'id',
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
      key: 'id',
    },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'id',
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
