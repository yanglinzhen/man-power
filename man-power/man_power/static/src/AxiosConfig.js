import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://loalhost:8089',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
})

export default instance;