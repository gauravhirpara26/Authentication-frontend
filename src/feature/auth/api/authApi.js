import { axiosInstance } from "@/feature/auth/api/axiosInstance"

export const authApi = {
    register: async (payload) => {
        const res = await axiosInstance.post("auth/register", payload);
        return res.data;
    },

    checkUserName: async (username) => {
        const res = await axiosInstance.post("auth/check-username", null, {
            params: { username },
        });
        return res.data;
    },
    login: async (payload) => {
        const res = await axiosInstance.post('auth/login', payload)
        return res.data
    }
};

