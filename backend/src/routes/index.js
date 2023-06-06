const userRoute = require('./userRoute');

const initRouter = (app) => {
    app.use('/api/v1/user', userRoute);
}

module.exports = initRouter;