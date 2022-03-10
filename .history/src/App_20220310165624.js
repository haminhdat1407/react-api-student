import { useEffect, useState } from 'react';
import StudentList from './components';
import './styles.css';
import './components/index';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getStudent = async () => {
      const response = await fetch(
        'https://js-post-api.herokuapp.com/api/students'
      );
      const jsonResponse = await response.json();
      setData(jsonResponse);
    };
    getStudent();
  }, []);

  return (
    <div className='App'>
      <h1>Use Effect</h1>
      <ul>
        {data.map((student, index) => {
          return <li key={`${student.name}-${index}`}>{student.name}</li>;
        })}
      </ul>
    </div>
  );
}
