import axios from "axios";

const baseURL = "http://localhost:3000/api";

export const axiosInstance = axios.create({
    baseURL,
    withCredentials: true
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

axiosInstance.interceptors.request.use((response) => response,
    async (error) => {
        const origianlRequest = error.config
        if (error.response?.status === 401 && !origianlRequest._retry) {
            origianlRequest._retry = true

            try {
                const res = await axiosInstance.post('/auth/refresh-token')
                const newAccessToken = res.data.accessToken
                localStorage.setItem('accessToken', newAccessToken)

                origianlRequest.headers.Authorization = `Bearer ${newAccessToken}`
                return axiosInstance(origianlRequest)
            } catch (refresherror) {
                localStorage.removeItem('accessToken')
                window.location.href = '/login'
            }
        }
        return Promise.reject(error)
    }
)