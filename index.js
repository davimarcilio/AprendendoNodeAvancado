const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');

// EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//bodyParser
app.use(bodyParser.urlencoded({ extendedparser: false }));
app.use(bodyParser.json());

// ROUTES
PORT = 8080;
app.use((req, res) => {
    switch (req._parsedUrl.pathname) {
        case '/':
            res.render('index');
            break;
        case '/api':
            res.render('api/index', { 'name': req.body.username, 'email': req.body.email });
            break;
        case '/add':
            res.render({ 'name': req.body.username, 'email': req.body.email });
            break;
        default:
            res.sendFile(pathURL + '/');
            break;
    }
})
app.listen(PORT)
