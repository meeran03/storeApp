
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://884a423aba1a.ngrok.io/api/',
    headers: {
        "Content-Type":"application/json",
        "Accept" : "application/json"
    }
  });

export default instance;