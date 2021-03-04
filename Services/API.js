
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://3f14ef2e1d68.ngrok.io/api/',
    headers: {
        "Content-Type":"application/json",
        "Accept" : "application/json"
    }
  });

export default instance;