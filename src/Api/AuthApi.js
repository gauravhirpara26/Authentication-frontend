import axios from 'axios'

const APIURL = import.meta.env.PROD 
    ? 'https://authentication-backend-xjqb.onrender.com/api/auth'
    : '/api/auth'

export const registerUser = async (payload) => {
    const response = await axios.post(`${APIURL}/register`,payload)
    return response.data
}
