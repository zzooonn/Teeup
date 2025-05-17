// src/services/auth.js
import api from '../api'

export const login = async (openid) => {
    try {
        const response = await api.post('/auth/login', { openid });
        return response.data;
    } catch (error) {
        console.error('로그인 실패ㅠㅠ:', error.response?.data || error.message);
        throw error;
    }
}