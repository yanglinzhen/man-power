import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://192.168.3.206:8089',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    },
})

export default instance;