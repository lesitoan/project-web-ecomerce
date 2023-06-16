import { useEffect, useState } from 'react';
import clsx from 'clsx';
import style from './homePage.module.css';
import { getCookie } from '../../utils/cookie';
import { getAllUsers, refreshAccessToken } from '../../apis/userApi';

let test = 0;
console.log('dsdsd')
const HomePage = () => {
    test = test + 1
    console.log('a')
    console.log('test:', test);
    const [token, setToken] = useState(getCookie('accessToken'));
    const [users, setUsers] = useState([]);
    useEffect(async () => {
        if (token) {
            const response = await getAllUsers(token);
            if (!response) {
                console.log('refreshToken')
                const newToken = await refreshAccessToken(getCookie('refreshToken'));
                setToken(newToken)
            } else if (response) {
                setUsers(response.data.data);
                console.log("all users:", users);
            }
        }
    }, [token]);

    console.log('b')


    return (
        <div className={clsx(style.container)}>
            <h1>GET ALL USER</h1>
            <table className={clsx(style.table)}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>userId</th>
                    </tr>
                </thead>
                <tbody>
                    {console.log(users)}
                    {users && users.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{user.firstName}</td>
                                <td>{user.email}</td>
                                <td>{user.userId}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>

            </table>
        </div>
    )
}

export default HomePage;
