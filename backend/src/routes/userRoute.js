const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authUser, authAdmin } = require('../middlewares/authMiddleware');

router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);
router.get('/logout', userController.logoutUser);
router.get('/users', authUser, userController.getAllUsers);
router.get('/refresh-access-token', userController.refreshAccessToken);

module.exports = router;
