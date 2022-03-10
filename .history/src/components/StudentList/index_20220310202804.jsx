import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

StudentList.propTypes = {
  data: PropTypes.array,
};

function StudentList({ data }) {
  return (
    <div className='student_list'>
      <table>
        <tbody>
          <tr>
            <th>Battery</th>
            <th>StatsBar</th>
            <th>Battery</th>
            <th>StatsBar</th>
            <th>Battery</th>
            <th>StatsBar</th>
            <th>StatsBar</th>
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
