import axiosClient from './axiosClient';

const studentApi = {
  getAll() {
    const url = `students`;
    return axiosClient.get(url);
  },
  getStudentByID(id) {
    const url = `students/${id}`;
    return axiosClient.get(url);
  },
  removeStudentByID(id) {
    const url = `students/${id}`;
    return axiosClient.get(url);
  },
};

export default studentApi;
