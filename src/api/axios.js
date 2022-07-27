/* 
    for prevent create axios instance 
    we just import it in index.js
*/

import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_HOST
