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
  add(data) {
    const url = '/posts';
    return axiosClient.post(url, data);
  },
};

export default studentApi;
