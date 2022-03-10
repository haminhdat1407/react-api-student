import { useEffect, useState } from 'react';
import StudentList from './components';
import './styles.css';
import './components/index';

export default function App() {
  // state
  const [data, setData] = useState([]);

  // call API using useEffect contains depedences..
  useEffect(() => {
    async function fetchPostList() {
      const requesURL = 'https://js-post-api.herokuapp.com/api/students';
      const response = await fetch(requesURL);
      const responseJSON = await response.json();
      console.log({ responseJSON });

      const { datas } = responseJSON;
      setData(datas);
    }
    fetchPostList();
  }, []);

  return (
    <div className='App'>
      <h1>Use Effect</h1>
      <StudentList students={datas} />
    </div>
  );
}
