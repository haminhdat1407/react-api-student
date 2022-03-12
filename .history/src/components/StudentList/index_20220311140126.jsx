import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import dayjs from 'dayjs';
// rsfp

StudentList.propTypes = {
  data: PropTypes.array,
};

function StudentList({ data }) {
  return (
    <div className='container'>
      <h4 className='student_title'>Student List</h4>
      <div className='student_list'>
        <table className='table_student'>
          <tbody>
            <tr>
              <th>ID Student</th>
              <th>Name</th>
              <th>Age</th>
              <th>Mark</th>
              <th>Gender</th>
              <th>City</th>
              <th>CreatedAt</th>
            </tr>

            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.mark}</td>
                <td>{item.gender}</td>
                <td>{item.city}</td>
                <td>{dayjs(item.createdAt).format('DD/MM/YYYY')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentList;
