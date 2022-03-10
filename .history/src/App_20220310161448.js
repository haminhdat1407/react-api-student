import { useEffect, useState } from 'react';
import StudentList from './components';
import './styles.css';
import './components/index';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchPostList() {
      const requesURL = 'https://js-post-api.herokuapp.com/api/students';
      const response = await fetch(requesURL);
      const responseJSON = await response.json();
      console.log({ responseJSON });

      const { data } = responseJSON;
      setData(data);
    }
    fetchPostList();
  }, []);

  return (
    <div className='App'>
      <h1>Use Effect</h1>

      {data.map((data) => (
        <li key={data.id}>{data.name} </li>
      ))}
    </div>
  );
}
