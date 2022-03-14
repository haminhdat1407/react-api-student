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
    const url = `students?title_like=${searchTerm}`;
    return axiosClient.delete(url);
  },
};

export default studentApi;
