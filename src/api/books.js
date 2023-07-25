import axios from 'axios';

const host = 'https://my-json-server.typicode.com/2H1EU8/JS-MVCS/';

export default axios.create({
  baseURL: host,
});
