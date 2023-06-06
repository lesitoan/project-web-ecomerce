const bcrypt = require('bcryptjs');
const promisePool = require('../configs/connectDB');

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
            delete response.password;
            return resolve(response);
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    createUser,
    loginUser,
}
