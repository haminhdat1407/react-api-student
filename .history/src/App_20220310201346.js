import { useEffect, useState } from 'react';
import studentApi from './apis/studentApi';
import StudentList from './components/StudentList';
import './styles.css';

export default function App() {
  useEffect(() => {
    try {
      (async () => {
        const response = await studentApi.getAll();
        console.log(response);
      })();
    } catch (error) {}
  });
  return (
    <>
      <StudentList />
    </>
  );
}
