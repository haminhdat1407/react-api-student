import { useEffect, useState } from 'react';
import studentApi from './apis/studentApi';
import StudentList from './components/StudentList';
import './styles.css';

export default function App() {
  const [studentList, setStudentList] = useState([]);
  const [idRemove, setIdRemove] = useState('');

  // get All
  useEffect(() => {
    try {
      (async () => {
        const responseStudent = await studentApi.getAll();
        if (idRemove) {
          const studentRemove = await studentApi.removeStudentByID(idRemove);
          setStudentList(studentRemove);
        }
        setStudentList(responseStudent);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // delete
  // useEffect(() => {
  //   try {
  //     if (idRemove) {
  //       (async () => {
  //         const studentRemove = await studentApi.removeStudentByID(idRemove);
  //       })();
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [idRemove]);

  const handleRemoveUser = (id) => {
    setIdRemove(id);
  };

  return (
    <>
      <StudentList data={studentList} onRemove={handleRemoveUser} />
    </>
  );
}
