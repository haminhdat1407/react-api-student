import React from 'react';
import PropTypes from 'prop-types';

StudentList.propTypes = {
  data: PropTypes.array,
};

function StudentList({ data }) {
  console.log(data);
  return <div>dgdgdgd</div>;
}

export default StudentList;
