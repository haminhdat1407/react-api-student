import React from 'react';
import PropTypes from 'prop-types';

StudentList.propTypes = {
  data: PropTypes.array,
};

function StudentList({ data }) {
  return (
    <div className='student_list'>
      <table>
        <tbody>
          <thead>Company</thead>
        </tbody>
        <tr>
          <td>Alfreds Futterkiste</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table>
    </div>
  );
}

export default StudentList;
