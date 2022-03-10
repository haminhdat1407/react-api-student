import { useEffect, useState } from 'react';
import './styles.css';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getStudent = async () => {
      const response = await fetch(
        'https://js-post-api.herokuapp.com/api/students/25'
      );
      const jsonResponse = await response.json();
      setData(jsonResponse);
    };
    getStudent();
  }, []);

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
