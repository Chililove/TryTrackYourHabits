import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const login = async (userData) => {
    return await axios.post(`${API_URL}/auth/login`, userData);
};