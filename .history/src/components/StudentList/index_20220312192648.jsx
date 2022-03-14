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
  console.log(data);
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

  const handleRemove = (id) => {
    onRemove(id);
  };

  return (
   {data.map((student) => (

   ))}
  );
}

export default StudentList;
// dataSource={dataStudents}
