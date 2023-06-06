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
        return res.status(200).json(handleSuccess('SUCCESS', 'login user successful !!!', response));
    } catch (e) {
        console.log(e)
        return res.status(501).json(handleError('ERR', 'server error, login failed !!!'));
    }
}

module.exports = {
    createUser,
    loginUser,
}
