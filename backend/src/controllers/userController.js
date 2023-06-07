const userService = require('../services/userService');
const { handleError, handleSuccess } = require('../utils/handleStatus');

const createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password, gender } = req.body;
        if (!firstName || !lastName || !email || !password || !gender) {
            return res.status(400).json(handleError('ERR', 'error missing input data !!!'));
        }
        const response = await userService.createUser(req.body);
        if (!response) {
            return res.status(400).json(handleError('ERR', 'email has been used !!!'));
        }
        return res.status(200).json(handleSuccess('SUCCESS', 'create new user successful !!!', response));
    } catch (e) {
        console.log(e)
        return res.status(501).json(handleError('ERR', 'server error, user creation failed !!!'));
    }
}

const loginUser = async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) {
            return res.status(400).json(handleError('ERR', 'error missing input data !!!'));
        }
        const response = await userService.loginUser(req.body);
        if (!response) {
            return res.status(400).json(handleError('ERR', 'login failed !!!'));
        }
        res.cookie('accessToken', response.accessToken, { maxAge: 7 * 24 * 60 * 60, httpOnly: true });
        res.cookie('refreshToken', response.refreshToken, { maxAge: 7 * 24 * 60 * 60, httpOnly: true });
        return res.status(200).json(handleSuccess('SUCCESS', 'login user successful !!!', response));
    } catch (e) {
        console.log(e)
        return res.status(501).json(handleError('ERR', 'server error, login failed !!!'));
    }
}

const logoutUser = (req, res) => {
    try {
        res.clearCookie('accessToken');
        res.clearCookie('refreshToken');
        return res.status(200).json(handleSuccess('SUCCESS', 'logout user successful !!!'));
    } catch (e) {
        return res.status(400).json(handleError('ERR', 'server error !!!'));
    }
}

const getAllUsers = async (req, res) => {
    try {
        const response = await userService.getAllUsers();
        return res.status(200).json(handleSuccess('SUCCESS', 'get users successful !!!', response));
    } catch (e) {
        console.log(e)
        return res.status(501).json(handleError('ERR', 'server error, get users failed !!!'));
    }
}

const refreshAccessToken = async (req, res) => {
    try {
        if (!req.headers.authorization) {
            throw "Unauthorized !!!";
        }
        const accessToken = req.headers.authorization.split(' ')[1];
        const response = await userService.refreshAccessToken(accessToken);
        if (!response) {
            return res.status(400).json(handleError('ERR', 'refresh token failed !!!'));
        }
        res.cookie('accessToken', response.newAccessToken, { maxAge: 7 * 24 * 60 * 60, httpOnly: true });
        return res.status(200).json(handleSuccess('SUCCESS', 'refresh access token successful !!!', response));
    } catch (e) {
        console.log(e)
        return res.status(501).json(handleError('ERR', 'server error !!!'));
    }
}

module.exports = {
    createUser,
    loginUser,
    getAllUsers,
    refreshAccessToken,
    logoutUser
}
