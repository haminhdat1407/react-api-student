import { Table } from 'antd';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import React from 'react';
import './style.css';
import dayjs from 'dayjs';

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
      title: 'mark',
      dataIndex: 'mark',
      key: 'key',
      sorter: {
        compare: (a, b) => a.mark - b.mark,
        multiple: 2,
      },
    },
    {
      title: 'gender',
      dataIndex: 'gender',
      key: 'key',
    },
    {
      title: 'createdAt',
      dataIndex: 'createdAt',
      key: 'key',
      render: (createdAt) => {
        return dayjs(createdAt).format('DD/MM/YYYY');
      },
      sorter: {
        compare: (a, b) => a.createdAt - b.createdAt,
      },
    },
    {
      title: 'city',
      dataIndex: 'city',
      key: 'key',
    },
  ];

  return <Table dataSource={data} columns={columns}></Table>;
}

export default StudentList;
