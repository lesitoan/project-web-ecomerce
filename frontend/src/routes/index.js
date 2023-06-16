
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import PrivatePage from '../pages/PrivatePage/PrivatePage';

const publicRoutes = [
    { path: '/', page: HomePage },
    { path: '/login', page: LoginPage },
    { path: '/private', page: PrivatePage },
]

const privateRoutes = [

]

export {
    publicRoutes,
    privateRoutes
}

