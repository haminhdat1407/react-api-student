import React from 'react';
import PropTypes from 'prop-types';

StudentList.propTypes = {
  data: PropTypes.array,
};

function StudentList({ data }) {
  return (
    <div className='student_list'>
      <table style={tableStyle}>
        <tbody>
          <tr style={rowStyle}>
            <td style={leftColumnStyle}>Battery</td>
            <td>
              <StatsBar />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
