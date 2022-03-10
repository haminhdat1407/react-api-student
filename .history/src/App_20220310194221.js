import { useEffect, useState } from 'react';
import './styles.css';

export default function App() {
  return (
    <div className='App'>
      <h1>Use Effect</h1>
      <ul className=''>
        {data.map((student, index) => {
          return (
            <li key={`${student.name}-${index}`}>
              {student.name}
              {student.age}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
