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
        setStudentList(responseStudent);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  //remove
  useEffect(() => {
    try {
      if (idRemove) {
        (async () => {
          const studentRemove = await studentApi.removeStudentByID(idRemove);
        })();
      }
    } catch (error) {
      console.log(error);
    }
  }, [idRemove]);
  const handleRemoveUser = (idDelete) => {
    setIdRemove(idDelete);

    const newStudentList = studentList.filter((student) => {
      // tra ve 1 mang moi...khong co id can xoa
      return student.id !== idDelete;
    });
    setStudentList(newStudentList);
  };

  return (
    <>
      <StudentList data={studentList} onRemove={handleRemoveUser} />
    </>
  );
}
