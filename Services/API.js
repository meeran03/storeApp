
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://0f6afc3dc5e3.ngrok.io/api/',
    headers: {
        "Content-Type":"application/json",
        "Accept" : "application/json"
    }
  });

export default instance;