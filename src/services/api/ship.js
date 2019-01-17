import axios from 'axios';

export default {
  test() {
    return axios.get('http://127.0.0.1:5000/test').then((response) => {
      return response.data;
    });
  },
};
