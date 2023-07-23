
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';

const publicRoutes = [
    { path: '/', page: HomePage },
    { path: '/login', page: LoginPage },
]

const privateRoutes = [

]

export {
    publicRoutes,
    privateRoutes
}

