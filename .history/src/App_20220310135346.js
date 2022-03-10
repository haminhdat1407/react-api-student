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
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size='middle'>
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  ReactDOM.render(<Table columns={columns} dataSource={data} />, mountNode);
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
