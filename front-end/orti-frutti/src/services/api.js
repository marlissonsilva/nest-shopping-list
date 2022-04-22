import axios from 'axios';

const api = axios.create({
    baseURL: 'ec2-34-207-12-160.compute-1.amazonaws.com'
})

export default api;