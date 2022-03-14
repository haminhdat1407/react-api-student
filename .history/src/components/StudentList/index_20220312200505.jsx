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
      createdAt: 1,
      city: 1,
    },
    {
      key: 1,
      id: 1,
      name: 'John',
      age: 'Brown',
      mark: 32,
      gender: 'New York No. 1 Lake Park',
      createdAt: 1,
      city: 1,
    },
  ];

  return <Table dataSource={[]} columns={[]}></Table>;
}

export default StudentList;
