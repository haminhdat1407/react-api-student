import { useEffect, useState } from 'react';
import './styles.css';
import { Table, Tag, Space } from 'antd';

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
  // const handleOnClickDelete = (post) => {
  //   console.log('>>> handleOnClickDelete: ', post);
  // };

  // function handleOnClickDelete(id)
  // {
  //   fetch(`https://jsonplaceholder.typicode.com/${id}`, {
  //     method: 'DELETE',
  //   }).then(result)=>{
  //     result.json().then((resp)=>{
  //       console.warn(resp)

  //     })
  //   })
  // }

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
              <li className='list' key={item.id}>
                {item.title}
              </li>
              <span
                className='remove'
                onClick={() => handleOnClickDelete(item.id)}
              >
                X
              </span>
            </>
          ))}
        </ul>
      </>
    </div>
  );
}