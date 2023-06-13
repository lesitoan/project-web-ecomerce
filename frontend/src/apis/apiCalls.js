import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config();


const login = async (data) => {
    console.log('data:', data)
    const url = 'http://localhost:8080/api/v1/user/login';
    try {
        const response = await axios.post(url, data);
        console.log('response: ', response);
        return response.status
    } catch (e) {
        console.log(e)
    }
}

const testApi = async (data) => {
    const url = process.env.API_URL || 'http://localhost:8080';
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log('response: ', response);
        return response
    } catch (e) {
    }
}

export {
    login,
    testApi
}