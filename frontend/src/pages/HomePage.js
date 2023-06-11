import axios from 'axios';
import { useState, useEffect } from 'react';

const HomePage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState({});

    const handleSubmit = () => {
        console.log('email', email);
        console.log('password', password);
        setData({
            email: email,
            password: password
        })
    }

    useEffect(async () => {
        const response = await axios.post('http://localhost:8080/api/v1/user/login', {
            email: 'toan@gmail.com',
            password: '123456'
        })
        console.log(response)
    }, [data])



    return (
        <>
            <label>Email</label>
            <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}></input>
            <label>Password</label>
            <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}></input>
            <button onClick={handleSubmit} >submit</button>
        </>
    )

}

export default HomePage;
