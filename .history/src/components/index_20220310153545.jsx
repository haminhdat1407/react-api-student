import React from 'react';
import PropTypes from 'prop-types';

StudentList.propTypes = {
  students: PropTypes.array,
};

StudentList.defaultProps = {
  students: [],
};

function StudentList(props) {
  const { students } = props;
  return (
    <ul className='student-list'>
      {students.map((student => (
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
  );
}

export default StudentList;
