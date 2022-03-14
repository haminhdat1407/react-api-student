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
    <Table dataSource={data}>
      <ColumnGroup title='Name'>
        <Column title='First Name' dataIndex='firstName' key='firstName' />
        <Column title='Last Name' dataIndex='lastName' key='lastName' />
      </ColumnGroup>
      <Column title='Age' dataIndex='age' key='age' />
      <Column title='Address' dataIndex='address' key='address' />
    </Table>
  );
}

export default StudentList;
