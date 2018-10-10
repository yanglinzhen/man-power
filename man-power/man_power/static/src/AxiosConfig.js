import axios from 'axios'
import config from './GlobalConfig'

const instance = axios.create({
    baseURL: config.url,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
})

export default instance;