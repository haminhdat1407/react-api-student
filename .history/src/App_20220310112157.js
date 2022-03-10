import { useEffect, useState } from 'react';
import './styles.css';

export default function App() {
  // state
  const tabs = ['POSTS', 'ALBUMS', 'TODOS', 'PHOTOS'];
  const [type, setType] = useState('posts');
  const [data, setData] = useState([]);

  // call API using useEffect contains depedences..
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((dataApi) => setData(dataApi));
  }, [type]);

  // handle event
  const handleClickTab = (tab) => {
    setType(tab);
  };
  const handleRemoveUser = () => {};

  return (
    <div className='App'>
      <>
        <h1>Use Effect</h1>

        <ul className='list'>
          {tabs.map((tab, id) => (
            <li
              key={id}
              className={tab === type ? 'tab active' : 'tab'}
              onClick={() => handleClickTab(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>

        <ul>
          {data.map((item) => (
            <>
              <li key={item.id}>{item.title}</li>
              <span className='remove' onClick={() => handleRemoveUser()}>
                X
              </span>
            </>
          ))}
        </ul>
      </>
    </div>
  );
}
