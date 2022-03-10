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
            <th>Ma sinh vien</th>
            <th>name</th>
            <th>age</th>
            <th>mark</th>
            <th>gender</th>
            <th>city</th>
            <th>createdAt</th>
            <th>createdAt</th>
          </tr>
          <tr>
            <td>Battery</td>
            <td>StatsBar</td>
            <td>Battery</td>
            <td>StatsBar</td>
            <td>Battery</td>
            <td>StatsBar</td>
            <td>StatsBar</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
