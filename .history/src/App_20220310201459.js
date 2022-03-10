import { useEffect, useState } from 'react';
import studentApi from './apis/studentApi';
import StudentList from './components/StudentList';
import './styles.css';

export default function App() {
  const [studentList, setStudentList] = useState;

  useEffect(() => {
    try {
      (async () => {
        const responseStudent = await studentApi.getAll();
        console.log(responseStudent);
      })();
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <>
      <StudentList />
    </>
  );
}
