import { Table } from 'antd';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

const { Column, ColumnGroup } = Table;

StudentList.propTypes = {
  data: PropTypes.array,
  onRemove: PropTypes.func,
};

function StudentList({ data, onRemove }) {
  const handleRemove = (id) => {
    onRemove(id);
  };

  const dataStudents = [
    {
      key: 1,
      id: 1,
      name: 'John',
      age: 'Brown',
      mark: 32,
      gender: 'New York No. 1 Lake Park',
      create: 1,
      city: 1,
    },
    {
      key: 2,
      id: 2,
      name: 'John',
      age: 'Brown',
      mark: 32,
      gender: 'New York No. 1 Lake Park',
      create: 2,
      city: 2,
    },
  ];

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
    },
    {
      title: 'gender',
      dataIndex: 'gender',
      key: 'key',
    },
    {
      title: 'create',
      dataIndex: 'create',
      key: 'key',
    },
    {
      title: 'city',
      dataIndex: 'city',
      key: 'key',
    },
  ];

  return <Table dataSource={dataStudents} columns={columns}></Table>;
}

export default StudentList;
