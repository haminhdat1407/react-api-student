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
  return <div></div>;
}

export default StudentList;
