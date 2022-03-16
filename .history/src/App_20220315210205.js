import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import studentApi from './apis/studentApi';
import './App.css';
import ModalForm from './components/AddForm';
import SearchForm from './components/SearchInput';
import StudentList from './components/StudentList';
import './styles.css';

export default function App() {
  const [studentList, setStudentList] = useState([]);
  const [idRemove, setIdRemove] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState();
  const [studentEdit, setStudentEdit] = useState({});
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

  // add student
  useEffect(() => {
    if (data) {
      (async () => {
        const newStudent = await studentApi.addStudent(data);
        // const newStudent = {
        //   id: payload.id,
        //   name: payload.name,
        //   age: payload.age,
        //   mark: payload.mark,
        //   gender: payload.gender,
        //   city: payload.city,
        //   createdAt: payload.createdAt,
        // };

        setStudentList((prevStudent) => [...prevStudent, newStudent]);
      })();
    }
  }, [data]);

  // edit student
  useEffect(() => {
    try {
      if (studentEdit) {
        (async () => {
          const responseUpdate = await studentApi.updateStudent(studentEdit);
          setStudentList(() => [...responseUpdate]);
        })();
      }
    } catch (error) {
      console.log(error);
    }
  }, [studentEdit]);

  const handleRemoveUser = (idDelete) => {
    setIdRemove(idDelete);
    const newStudentList = studentList.filter((student) => {
      // tra ve 1 mang moi...khong co id can xoa
      return student.id !== idDelete;
    });
    setStudentList(newStudentList);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleAddStudent = (data) => {
    setData(data);
  };
  const handleEditStudent = (dataEdit) => {
    setStudentEdit(dataEdit);
  };

  return (
    <>
      <Row className='row-8'>
        <Col span={8}>
          <label className='lb-student'>STUDENT LIST</label>
        </Col>
        <Col span={8}>
          <SearchForm onChange={handleSearch} />
        </Col>
        <Col span={8}>
          <ModalForm onChange={handleAddStudent} />
        </Col>
      </Row>

      <StudentList
        data={studentList}
        onRemove={handleRemoveUser}
        style={{ marginTop: '50px' }}
        onEdit={handleEditStudent}
      />
    </>
  );
}
