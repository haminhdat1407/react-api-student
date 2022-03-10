import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import dayjs from 'dayjs';
// rsfp

StudentList.propTypes = {
  data: PropTypes.array,
  onRemove: PropTypes.func,
};

function StudentList({ data, onRemove }) {
  // const handleRemove = (id) => {
  //   onRemove(id);
  }

  return (
    <div className='container'>
      <h4 className='student_title'>Student List</h4>
      <div className='student_list'>
        <table className='table_student'>
          <tbody>
            <tr>
              <th>Ma sinh vien</th>
              <th>name</th>
              <th>age</th>
              <th>mark</th>
              <th>gender</th>
              <th>city</th>
              <th>createdAt</th>
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
