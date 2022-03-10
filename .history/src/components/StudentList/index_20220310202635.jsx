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
          <tr>
            <td>Battery</td>
            <td>StatsBar</td>
          </tr>
          <tr>
            <td>Battery</td>
            <td>StatsBar</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
