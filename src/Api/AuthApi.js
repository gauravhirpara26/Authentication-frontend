import axios from 'axios'

const APIURL = 'http://localhost:3000/api/auth'

export const registerUser = async (payload) => {
    const response = await axios.post(`${APIURL}/register`,payload)
    return response.data
}