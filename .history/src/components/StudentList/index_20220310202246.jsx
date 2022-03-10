import React from 'react';
import PropTypes from 'prop-types';

StudentList.propTypes = {
  data: PropTypes.array,
};

function StudentList({ data }) {
  return <div className='student_list'></div>;
}

export default StudentList;
