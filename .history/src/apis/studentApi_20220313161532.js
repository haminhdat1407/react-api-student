import axiosClient from './axiosClient';

const studentApi = {
  getAll() {
    const url = `students`;
    return axiosClient.get(url);
  },

  removeStudentByID(id) {
    const url = `students/${id}`;
    return axiosClient.delete(url);
  },
  searchByName(searchTerm) {
    const url = `students?name_like=${searchTerm}`;
    return axiosClient.get(url);
  },
  addStudent(data) {
    const url = '/students';
    return axiosClient.post(url, data);
  },
  updateStudent(data) {
    const url = `/posts/${data.id}`;
    return axiosClient.patch(url, data);
  },
};

export default studentApi;
