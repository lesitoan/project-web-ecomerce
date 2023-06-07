const jwt = require('jsonwebtoken');
require('dotenv').config();
const { handleError } = require('../utils/handleStatus');

const authUser = (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            throw "Unauthorized !!!";
        }
        const accessToken = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
        if (decoded.role === 'customer' || decoded.role === 'admin') {
            req.user = decoded;
            return next();
        };
        return res.status(403).json(handleError('ERR', 'Forbidden !!!'));
    } catch (e) {
        console.log(e);
        return res.status(401).json(handleError('ERR', 'Unauthorized !!!'));
    }
}

const authAdmin = (req, res, next) => {
    try {
        console.log("cookie:", req.cookies);
        if (!req.headers.authorization) {
            throw new Error("Unauthorized !!!");
        }
        const accessToken = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
        if (decoded.role === 'admin') {
            req.user = decoded;
            return next();
        };
        return res.status(403).json(handleError('ERR', 'Forbidden !!!'));
    } catch (e) {
        console.log(e);
        return res.status(401).json(handleError('ERR', 'Unauthorized !!!'));
    }
}

module.exports = {
    authUser,
    authAdmin,
}
