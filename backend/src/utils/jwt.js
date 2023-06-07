const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateAccessToken = (userId, role) => {
    accessToken = jwt.sign({ userId, role }, process.env.JWT_SECRET, { expiresIn: 15 });
    return accessToken;
}

const generateRefreshToken = (userId) => {
    refreshToken = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
    return refreshToken;
}

module.exports = {
    generateAccessToken,
    generateRefreshToken,
}