import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import dayjs from 'dayjs';
import { Table, Tag, Space } from 'antd';
import 'antd/dist/antd.css';

const { Column, ColumnGroup } = Table;

StudentList.propTypes = {
  data: PropTypes.array,
  onRemove: PropTypes.func,
};

function StudentList({ data, onRemove }) {
  const dataStudents = [
    {
      key: '1',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
  ];

  const handleRemove = (id) => {
    onRemove(id);
  };

  return (
    <Table dataSource={dataStudents}>
      <Column title='ID' dataIndex='id' key='id' />
      <Column title='Name' dataIndex='name' key='name' />
      <Column title='age' dataIndex='age' key='age' />
      <Column title='mark' dataIndex='mark' key='mark' />
      <Column title='gender' dataIndex='gender' key='gender' />
      <Column title='createdAt' dataIndex='createdAt' key='createdAt' />
      <Column title='city' dataIndex='city' key='city' />
    </Table>
  );
}

export default StudentList;
