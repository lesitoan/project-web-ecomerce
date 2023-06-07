const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const promisePool = require('../configs/connectDB');
const { generateAccessToken, generateRefreshToken } = require('../utils/jwt');

const createUser = (payload) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { firstName, lastName, email, password, gender } = payload;
            const [[isUser], dsdsd] = await promisePool.query(`SELECT * FROM users WHERE email = '${email}'`);
            if (isUser) {
                return resolve(false)
            }
            const salt = bcrypt.genSaltSync(10);
            const hashPassword = bcrypt.hashSync(password, salt);
            const query = ` INSERT INTO users (firstName, lastName, email, password, gender)
                            VALUES ('${firstName}', '${lastName}', '${email}', '${hashPassword}', '${gender}') `;
            const [response, fields] = await promisePool.query(query);
            return resolve(response);
        } catch (e) {
            reject(e);
        }
    })
}

const loginUser = (payload) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { email, password } = payload;
            const [[response], fields] = await promisePool.query(`SELECT * FROM users WHERE email = '${email}'`);
            if (!response) {
                return resolve(false);
            }
            const checkPassword = bcrypt.compareSync(password, response.password);
            if (!checkPassword) {
                return resolve(false);
            }
            const accessToken = generateAccessToken(response.userId, response.role);
            const refreshToken = generateRefreshToken(response.userId);
            response.accessToken = accessToken;
            response.refreshToken = refreshToken;
            await promisePool.query(`UPDATE users SET refreshToken = '${refreshToken}' WHERE userId = ${response.userId}`);
            delete response.password;
            return resolve(response);
        } catch (e) {
            reject(e);
        }
    })
}

const getAllUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const [response, fields] = await promisePool.query(`SELECT * FROM users`);
            resolve(response);
        } catch (e) {
            reject(e);
        }
    })
}

const refreshAccessToken = (refreshToken) => {
    return new Promise(async (resolve, reject) => {
        try {
            const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
            const [[user], fields] = await promisePool.query(`SELECT * FROM users WHERE userId = '${decoded.userId}'`);
            if (refreshToken !== user.refreshToken) {
                resolve(false);
            }
            const newAccessToken = generateAccessToken(user.userId, user.role);
            resolve({ newAccessToken });
        } catch (e) {
            reject(e);
        }
    });
}

module.exports = {
    createUser,
    loginUser,
    getAllUsers,
    refreshAccessToken
}
