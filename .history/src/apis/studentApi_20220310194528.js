import { apiConfig } from "./apiConfig";
import axiosClient from "./axiosClient";

const imageApi = {
  getAll() {
    const url = photos/?${apiConfig.apiKey};
    return axiosClient.get(url);
  },

  getWithSearch(term :string){
    const url = search/photos?query=${term}&${apiConfig.apiKey};
    return axiosClient.get(url);
  }
};

export default imageApi;