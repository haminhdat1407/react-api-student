import { useEffect, useState } from 'react';
import './styles.css';

export default function App() {
  // state
  const [data, setData] = useState([]);

  // call API using useEffect contains depedences..
  useEffect(() => {
    async function fetchPostList(){
      
    const requesURL ='https://js-post-api.herokuapp.com/api/students';
    const response =await fetch(requesURL);
    const responseJSON =await response.json();
    console.log({responseJSON});

  }
  

  // handle event
  const handleClickTab = (tab) => {
    setType(tab);
  };
  const handleOnClickDelete = (post) => {
    console.log('>>> handleOnClickDelete: ', post);
  };

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
