
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://1a0630fdd603.ngrok.io/api/',
    headers: {
        "Content-Type":"application/json",
        "Accept" : "application/json"
    }
  });

export default instance;