import { useEffect, useState } from 'react';
import studentApi from './apis/studentApi';
import StudentList from './components/StudentList';
import './styles.css';

export default function App() {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        const responseStudent = await studentApi.getAll();
        setStudentList(responseStudent);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleRemoveUser = (id) => {
    console.log();
  };

  return (
    <>
      <StudentList data={studentList} onRemove={handleRemoveUser} />
    </>
  );
}
