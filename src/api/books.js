import axios from 'axios';

const host = 'https://yf2vwz-8080.csb.app/';

export default axios.create({
  baseURL: host,
});
