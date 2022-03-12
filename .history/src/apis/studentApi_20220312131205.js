import axiosClient from './axiosClient';

const studentApi = {
  // getAll() {
  //   const url = `students`;
  //   return axiosClient.get(url);
  // },

  removeStudentByID(id) {
    const url = `students/${id}`;
    return axiosClient.delete(url);
  },
};

export default studentApi;
