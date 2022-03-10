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
            <th>Battery</th>
            <th>StatsBar</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
