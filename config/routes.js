'use strict';

const path = require('path'),
    index = require(path.resolve('./controllers/index')),
    express = require('express'),
    user = express.Router();


user.post('/auth/twitter',index.twitterLogin);

module.exports = {
    user: user
};