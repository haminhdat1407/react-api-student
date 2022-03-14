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

  return (
    <Table dataSource={data}>
      <div key={id}>
        <Column title='ID' dataIndex='id' key='id' />
        <Column title='Name' dataIndex='name' key='name' />
        <Column title='age' dataIndex='age' key='age' />
        <Column title='mark' dataIndex='mark' key='mark' />
        <Column title='gender' dataIndex='gender' key='gender' />
        <Column title='city' dataIndex='city' key='city' />
        <Column title='createdAt' dataIndex='createdAt' key='createdAt' />
      </div>
    </Table>
  );
}

export default StudentList;

// const dataStudents = [
//   {
//     key: 1,
//     id: 1,
//     name: 'John',
//     age: 'Brown',
//     mark: 32,
//     gender: 'New York No. 1 Lake Park',
//     createdAt: 1,
//     city: 1,
//   },
// ];