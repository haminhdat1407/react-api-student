import { useEffect, useState } from 'react';
import studentApi from './apis/studentApi';
import StudentList from './components/StudentList';
import './styles.css';

export default function App() {
  const [studentList, setStudentList] = useState([]);
  const [idRemove, setIdRemove] = useState('');

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

  useEffect(() => {
    try {
      if (idRemove) {
        (async () => {
          const studentRemove = await studentApi.removeStudentByID(idRemove);
          const a = studentList.filter((x) => x.id !== studentRemove.id);
        })();
      }
    } catch (error) {
      console.log(error);
    }
  }, [idRemove]);

  const handleRemoveUser = (id) => {
    setIdRemove(id);
  };

  return (
    <>
      <StudentList data={studentList} onRemove={handleRemoveUser} />
    </>
  );
}
