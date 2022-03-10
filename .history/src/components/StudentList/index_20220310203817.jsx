import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

StudentList.propTypes = {
  data: PropTypes.array,
};

function StudentList({ data }) {
  console.log(data);
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
            <th>Action</th>
          </tr>

          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>StatsBar</td>
              <td>Battery</td>
              <td>StatsBar</td>
              <td>StatsBar</td>
              <td className='delete'>
                <i className='fa-solid fa-delete-left'></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
