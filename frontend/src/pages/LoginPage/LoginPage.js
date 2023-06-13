import { useState } from 'react';
import clsx from 'clsx';
import style from './loginPage.module.css';
import { login, testApi } from '../../apis/apiCalls';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPasswordl] = useState('');

    const handleSubmit = async () => {
        const response = await login({ email, password })
    }

    return (
        <div className={clsx(style.container)}>
            <div className={clsx(style.form)}>
                <div className={clsx(style.email, style.formItem)}>
                    <label>emaile:</label>
                    <input
                        type="text"
                        onChange={e => setEmail(e.target.value)}
                    />

                </div>
                <div className={clsx(style.password, style.formItem)}>
                    <label>Password:</label>
                    <input
                        type="text"
                        onChange={e => setPasswordl(e.target.value)}
                    />
                </div>
                <button
                    className={clsx(style.formItem)}
                    onClick={handleSubmit}
                >
                    Login
                </button>
            </div>
        </div>
    )
}

export default LoginPage;
