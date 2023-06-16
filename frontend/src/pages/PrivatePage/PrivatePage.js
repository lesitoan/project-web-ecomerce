import { useContext } from 'react';
import clsx from 'clsx';
import { AuthContext } from '../../AuthContext/AuthContext';
import style from './privatePage.module.css';


const PrivatePage = () => {
    const user = useContext(AuthContext);

    console.log('user:', user);
    return (
        <div className={clsx(style.container)}>
            <h1>Private page</h1>
        </div>
    )
}

export default PrivatePage;