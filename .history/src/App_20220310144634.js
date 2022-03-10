import { useEffect, useState } from 'react';
import './styles.css';

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

      const { data } = responseJSON;
      setData(data);
    }
    fetchPostList();
  }, []);

  // handle event

  return (
    <div className='App'>
      <h1>Use Effect</h1>
    </div>
  );
}
