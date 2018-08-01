import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://192.168.3.206:8089',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
})

export default instance;