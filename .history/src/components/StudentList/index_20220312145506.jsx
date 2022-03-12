import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import dayjs from 'dayjs';

StudentList.propTypes = {
  data: PropTypes.array,
  onRemove: PropTypes.func,
};

function StudentList({ data, onRemove }) {
  const handleRemove = (id) => {
    onRemove(id);
  };
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
              <th className='res'>Gender</th>
              <th className='res'>City</th>
              <th className='res'>CreatedAt</th>
              <th className='res'>Action</th>
            </tr>

            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.mark}</td>
                <td className='res'>{item.gender}</td>
                <td className='res'>{item.city}</td>
                <td className='res'>
                  {dayjs(item.createdAt).format('DD/MM/YYYY')}
                </td>
                <td className='delete_btn'>
                  <i
                    className='fa-solid fa-delete-left'
                    onClick={() => handleRemove(item.id)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentList;
