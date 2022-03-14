import { useEffect, useState } from 'react';
import studentApi from './apis/studentApi';
import FormInput from './components/Form';
import StudentList from './components/StudentList';
import './styles.css';
import { Row, Col } from 'antd';
import { Input } from 'antd';

export default function App() {
  const [studentList, setStudentList] = useState([]);
  const [idRemove, setIdRemove] = useState('');
  const [text, setText] = useState('');

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
  const handleRemoveUser = (idDeleted) => {
    setIdRemove(idDeleted);

    const newStudentList = studentList.filter((student) => {
      // tra ve 1 mang moi...khong co id can xoa
      return student.id !== idDeleted;
    });
    setStudentList(newStudentList);
  };
  //  [dat01, dat02]].len 2 2

  //  id : "dat" + (data.lenght + 1)
  //  6 filed

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.lenght > 0) {
      matches = studentList.filter((usr) => {
        const regex = new RegExp(`${text}`, 'gi');
        // return .name.match(regex);
      });
    }
  };
  return (
    <Row>
      <Col span={18} push={6}>
        <StudentList
          data={studentList}
          onRemove={handleRemoveUser}
          search={onChangeHandler}
        />
      </Col>

      <Col style={{ backgroundColor: 'whitesmoke' }} span={6} pull={18}>
        <Input placeholder='Search.....' style={{ margin: 0 12px;
    margin-top: 12px;
    width: 73%; }} />
        <FormInput />
      </Col>
    </Row>
  );
}
