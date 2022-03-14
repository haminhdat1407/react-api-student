import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import studentApi from './apis/studentApi';
import FormInput from './components/Form';
import SearchForm from './components/SearchInput';
import StudentList from './components/StudentList';
import './styles.css';

export default function App() {
  const [studentList, setStudentList] = useState([]);
  const [idRemove, setIdRemove] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

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

  // search by name

  useEffect(() => {
    try {
      (async () => {
        const searchStudent = await studentApi.searchByName(searchTerm);
        setStudentList(searchStudent);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [searchTerm]);

  const handleRemoveUser = (idDeleted) => {
    setIdRemove(idDeleted);
    const newStudentList = studentList.filter((student) => {
      // tra ve 1 mang moi...khong co id can xoa
      return student.id !== idDeleted;
    });
    setStudentList(newStudentList);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleAddStudent = (data) => {
    console.log('cha', data);
  };
  return (
    <Row>
      <Col span={18} push={6}>
        <StudentList data={studentList} onRemove={handleRemoveUser} />
      </Col>

      <Col style={{ backgroundColor: 'whitesmoke' }} span={6} pull={18}>
        <SearchForm onChange={handleSearch} />
        <FormInput onChange={handleAddStudent} />
      </Col>
    </Row>
  );
}
//  [dat01, dat02]].len 2 2

//  id : "dat" + (data.lenght + 1)
//  6 filed
