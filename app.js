/*
 * App Name: Keeper (https://github.com/davidsaulrodriguez/keeper)
 * Copyright: Copyright (c) 2020 Keeper authors (https://github.com/davidsaulrodriguez/keeper/graphs/master)
 * Licensed under BSD 2 Clause (https://github.com/davidsaulrodriguez/keeper/blob/master/LICENSE)
 */

const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Let express handle data parsing and static assets.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Point the server to the route files, these essentially act as a map for the Express Router
require('./routes/api')(app);
require('./routes/html')(app);

const Port = process.env.PORT || 3000;
const IP = process.env.IP || '127.0.0.1';
app.listen(Port, IP, (err) => {
    if (err) {
       console.log(err)
   } else {
       console.log(`Server is listening at: http://${IP}:${Port}`);
    }
});