import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import dayjs from 'dayjs';

StudentList.propTypes = {
  data: PropTypes.array,
  onRemove: PropTypes.func,
};

function StudentList({ data, onRemove }) {
  const handleRemove = (id) => {
    onRemove(id);
  };
  return <div className='container'></div>;
}

export default StudentList;
