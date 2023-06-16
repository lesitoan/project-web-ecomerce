const express = require('express');
const dotenv = require('dotenv');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const initRoute = require('./routes/index');

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', process.env.CLIENT_HOST);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
})

initRoute(app);


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})