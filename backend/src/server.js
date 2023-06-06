const express = require('express');
const dotenv = require('dotenv');
var bodyParser = require('body-parser');
const initRoute = require('./routes/index');

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
initRoute(app);


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})