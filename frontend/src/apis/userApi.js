import axios from 'axios';
import { setCookie } from '../utils/cookie'

const baseURL = "http://localhost:8080/api/v1/user";

const login = async (data) => {
    const url = `${baseURL}/login`;
    try {
        const response = await axios.post(url, data);
        console.log('post login response: ', response);
        const user = response.data.data;
        setCookie('accessToken', user.accessToken);
        setCookie('refreshToken', user.refreshToken);
    } catch (e) {
        console.log('login ERR:', e);
    }
}

const getAllUsers = async (token) => {
    const url = `${baseURL}/users`;
    try {
        const response = await axios.get(url, { headers: { 'Authorization': `Bearer ${token}` } });
        console.log('getAllUsers: ', response);
        return response;
    } catch (e) {
        console.log('Get All Users ERR: ', e);
    }
}

const refreshAccessToken = async (refreshToken) => {
    const url = `${baseURL}/refresh-access-token`;
    try {
        const response = await axios.get(url, { headers: { 'Authorization': `Bearer ${refreshToken}` } });
        const newAccessToken = response.data.data.newAccessToken;
        setCookie('accessToken', newAccessToken);
        return newAccessToken;
    } catch (e) {
        console.log('reFresh token ERR: ', e);
    }
}

export {
    login,
    getAllUsers,
    refreshAccessToken
}