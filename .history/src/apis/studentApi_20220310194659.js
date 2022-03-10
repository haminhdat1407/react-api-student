import { apiConfig } from "./apiConfig";
import axiosClient from "./axiosClient";

const studentApi = {
  getAll() {
    const url = `students`;
    return axiosClient.get(url);
  },

  getWithSearch(term :string){
    const url = search/photos?query=${term}&${apiConfig.apiKey};
    return axiosClient.get(url);
  }
};

export default studentApi;