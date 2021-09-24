import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID bFEIikS9nePH0pXs2yZRCfrImL3J4UeSGMRC12vdnJk',
    },
})
