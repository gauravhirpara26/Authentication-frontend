import ky from 'ky'

const API_URL = 'http://localhost:3000/api/auth'

export const authApi = {
    register: async (payload) => {
        return await ky.post(`${API_URL}/register`, { json: payload }).json()
    },
    checkUserName: async (username) => {
        return await ky.post(`${API_URL}/check-username`,{searchParams:{username}}).json()
    }
}  