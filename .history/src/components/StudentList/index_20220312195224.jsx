import { Table } from 'antd';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

const { Column } = Table;

StudentList.propTypes = {
  data: PropTypes.array,
  onRemove: PropTypes.func,
};

function StudentList({ data, onRemove }) {
  const handleRemove = (id) => {
    onRemove(id);
  };

  const dataStudents2 = {
    key: 1,
    data,
  };

  return (
    <Table dataSource={dataStudents2.data} key={dataStudents2.key}>
      <Column title='ID' dataIndex='id' key='id' />
      <Column title='Name' dataIndex='name' key='name' />
      <Column title='age' dataIndex='age' key='age' />
      <Column title='mark' dataIndex='mark' key='mark' />
      <Column title='gender' dataIndex='gender' key='gender' />
      <Column title='city' dataIndex='city' key='city' />
      <Column title='createdAt' dataIndex='createdAt' key='createdAt' />
    </Table>
  );
}

export default StudentList;
