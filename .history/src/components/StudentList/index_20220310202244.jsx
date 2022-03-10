import React from 'react';
import PropTypes from 'prop-types';

StudentList.propTypes = {
  data: PropTypes.array,
};

function StudentList({ data }) {
  return (
    <div className='student_list'>
      <h4>Student List</h4>
    </div>
  );
}

export default StudentList;
