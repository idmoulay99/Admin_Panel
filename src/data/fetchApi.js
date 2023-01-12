
import axios from 'axios';

function fetchApi(segment, callback) {
  axios.get(`https://jsonplaceholder.typicode.com/${segment}`)
    .then(res => {
      callback(res.data)
    });
}

export default fetchApi