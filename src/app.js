const express = require("express");
const app = express();
const path = require('path');
const router = express.Router();
port = 3000;

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
})
app.get('/about', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/views/about.html'));
})
app.get('/contact-me', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/views/contact-me.html'));
})
app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/views/404.html'));
})


app.use('/', router);
app.listen(process.env.port || port)


console.log('Running on Port ' + port);